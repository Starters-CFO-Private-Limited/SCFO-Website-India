export default async function createContact(fullName, email, mobile) {
    // request URL
    const hapikey = 'c4567aee-28c1-457d-af2f-6097dca6e682';
    let url = 'https://api.hubapi.com/contacts/v1/contact/?hapikey=' + hapikey;

    // request body 
    const requestBody = {
        "properties": [
            {
                "property": "email",
                "value": email
            },
            {
                "property": "firstname",
                "value": fullName.split(" ")[0]
            },
            {
                "property": "lastname",
                "value": fullName.split(" ")[1] || "lnu"
            },
            {
                "property": "phone",
                "value": mobile
            },
        ]
    };
    console.log(`Hubspot create contact request body: ${JSON.stringify(requestBody)}\n`);

    // make that request
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            console.log(`Hubspot response (${response.status}) ${JSON.stringify(response)}\n`);
            if (response.ok) {
                // extract contact ID
                response.json().then(json => {
                    console.log(`Created hubspot contact ${JSON.stringify(json)}`);
                    return json["vid"];
                });
            }
        })
        .catch(err => {
            console.error("Error creating contact on hubspot")
            console.error(err);
            return false;
        })
};