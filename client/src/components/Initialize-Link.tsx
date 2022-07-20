import React, { useState } from "react";


function InitializeLink() {
    const [linkToken, setLinkToken] = useState(null);
    const generateToken = async () => {
        const response = await fetch('http://localhost:3001/api/plaid/link/token', {
            method: 'POST',
        });
        const data = await response.json();
        setLinkToken(data.token);
    }
    React.useEffect(() => {
        if (linkToken === null) {
            generateToken();
        }

    });
    return linkToken != null ? console.log('linkToken: ' + linkToken) : <></>
}

export default InitializeLink;