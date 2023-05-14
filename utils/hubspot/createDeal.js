export default async function createDeal(contactID, fullName, product) {
    // request URL
    const hapikey = 'c4567aee-28c1-457d-af2f-6097dca6e682';
    let url = 'https://api.hubapi.com/deals/v1/deal/?hapikey=' + hapikey;

    // request body
    const requestBody = {
        "associations": {
            "associatedVids": [
                contactID
            ]
        },
        "properties": [
            {
                "value": fullName.split(" ")[0] + " : " + product,
                "name": "dealname"
            },
            {
                "value": "appointmentscheduled",
                "name": "dealstage"
            },
            {
                "value": "default",
                "name": "pipeline"
            },
            {
                "value": 36741196,
                "name": "hubspot_owner_id"
            }
        ]
    }
    console.log(`Hubspot create deal request body: ${JSON.stringify(requestBody)}\n`);

    // make that request
    await fetch(url, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            response.json((response) => {
                console.log(`Hubspot response ${JSON.stringify(response)}\n`);
            })
            return true;
        } else {
            return false;
        }
    }).catch(err => {
        console.error(err);
        return false;
    });
}