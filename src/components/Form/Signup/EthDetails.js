import React, { PropTypes } from 'react';
import { Form } from 'antd';

class EthDetails extends React.Component {
    static contextTypes = {
        router: PropTypes.shape({}),
    };

    componentWillMount() {
        console.log('Generating ETH QR code...');
        this.qrsrc =
            'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=XXXXXXXXXXXX';
    }

    render() {
        return (
            <Form.Item>
                <img src={this.qrsrc} alt="eth-qrcode" />
            </Form.Item>
        );
    }
}

export default Form.create()(EthDetails);
