function convertJsonToFormUrlEncoded() {
    const jsonInput = document.getElementById('jsonInput').value;
    try {
        const jsonData = JSON.parse(jsonInput);
        let urlEncodedData = '';
        for (const key in jsonData) {
            if (Object.hasOwnProperty.call(jsonData, key)) {
                const value = jsonData[key];
                if (typeof value === 'object') {
                    for (const nestedKey in value) {
                        if (Object.hasOwnProperty.call(value, nestedKey)) {
                            urlEncodedData += `${key}[${nestedKey}]=${encodeURIComponent(value[nestedKey])}&`;
                        }
                    }
                } else {
                    urlEncodedData += `${key}=${encodeURIComponent(value)}&`;
                }
            }
        }
        urlEncodedData = urlEncodedData.slice(0, -1); // Remove the trailing '&'
        document.getElementById('result').innerText = urlEncodedData;
    } catch (error) {
        document.getElementById('result').innerText = 'Invalid JSON data!';
    }
}
