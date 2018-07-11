import React, { PropTypes } from 'react';
import { Form } from 'antd';
import { FormattedMessage } from 'react-intl';

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
        fetch('https://payment.vit.tube/signupfee/', {
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
                    ethAddress: response.eth_address,
                });
            });
    }

    render() {
        this.qrsrc =
            'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0x' +
            this.state.ethAddress;
        return (
            <div>
                <p className="eth-address">0x{this.state.ethAddress}</p>
                <img src={this.qrsrc} alt="eth-qrcode" />
            </div>
        );
    }
}

export default Form.create()(EthDetails);
