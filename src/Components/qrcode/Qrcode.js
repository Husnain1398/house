import React, { useState } from "react";
import { QrReader } from 'react-qr-reader';

const Qrcode = props => {
    const [data, setData] = useState('No result');
    // navigator.mediaDevices.getUserMedia({ audio: true, video: true })

    return (
        <>
            <QrReader
            facingMode="rear"
                onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                    }

                    if (!!error) {
                        console.info(error);
                    }
                }}
                style={{ width: '100%' }}
            />
            <p>{data}</p>
        </>
    );
};

export default Qrcode;