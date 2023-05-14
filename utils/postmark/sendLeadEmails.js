let postmark = require("postmark");
const POSTMARK_API_KEY = "0fa67d34-215f-42c2-a039-d0e0db129b7b";

export default async function sendLeadEmails(body) {
    var client = new postmark.ServerClient(POSTMARK_API_KEY);

    client.sendEmailWithTemplate({
        "From": "hello@starterscfo.com",
        "To": body.email,
        "TemplateId": 26500340, //scfo-popconvert
        "TemplateModel": {
            "product_name": body.product,
            "name": body.full_name,
            "email": body.email,
            "mobile": body.mobile,
            "product_url": "https://www.starterscfo.com",
            "company_name": "Starters' CFO",
            "company_address": "Delhi, NCT, India"
        }
    })
        .then(response => {
            console.log(`Postmark response ${JSON.stringify(response)}`);
        })
        .catch(error => {
            console.error(`Failed to send email via Postmark`);
            console.error(error)
        })

    client.sendEmailWithTemplate({
        "From": "hello@starterscfo.com",
        "To": 'akshay@starterscfo.in, abhishek@starterscfo.in, archit@starterscfo.in, n+scfoleads@nvdk.co',
        "TemplateId": 26500342, // scfo-popconvert-admin
        "TemplateModel": {
            "product_name": body.product,
            "name": body.full_name,
            "email": body.email,
            "mobile": body.mobile,
            "product_url": "https://www.starterscfo.com",
            "company_name": "Starters' CFO",
            "company_address": "Delhi, NCT, India"
        }
    })
        .then(response => {
            console.log(`Postmark response ${JSON.stringify(response)}`);
        })
        .catch(error => {
            console.error(`Failed to send email via Postmark`);
            console.error(error)
        });
}