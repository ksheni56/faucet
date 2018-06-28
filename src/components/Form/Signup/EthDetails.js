import React, { PropTypes } from 'react';
import { Form } from 'antd';

class EthDetails extends React.Component {
    static contextTypes = {
        router: PropTypes.shape({}),
    };

    constructor(props) {
        super(props);
        this.state = {
            ethAddress: null,
        };
    }

    async componentWillMount() {
        const strBody = {
            username: this.props.location.query.username,
            email: this.props.location.query.email,
        };

        console.log('Generating ETH QR code...');
        fetch('https://payment.proto.vit.tube/signupfee/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(strBody),
        })
            .then(res => res.json())
            .then(response => {
                this.setState({
                    ethAddress:
                        'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
                        response.eth_address,
                });
            });
    }

    render() {
        this.qrsrc =
            'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
            this.state.ethAddress;
        return (
            <Form.Item>
                <img src={this.qrsrc} alt="eth-qrcode" />
            </Form.Item>
        );
    }
}

export default Form.create()(EthDetails);
