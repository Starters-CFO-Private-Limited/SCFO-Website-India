const { WHATSAPP_DISPLAY_NUMBER } = require('../../../constants');

export default function handler(req, res) {
    try {
        const body = req.body;

        //
        // postmark
        //
        var postmark = require("postmark");
        var client = new postmark.ServerClient("0fa67d34-215f-42c2-a039-d0e0db129b7b");
        client.sendEmailWithTemplate({
            "From": "hello@starterscfo.com",
            "To": body.email,
            "TemplateAlias": "scfo-contact",
            "TemplateModel": {
                "product_name": "Starters' CFO",
                "name": body.full_name,
                "product_url": "https://www.starterscfo.com",
                "company_name": "Starters' CFO",
                "company_address": "Delhi, NCT, India"
            }
        })
            .then((response) => {
                console.log(response)
            });
        client.sendEmailWithTemplate({
            "From": "hello@starterscfo.com",
            "To": 'akshay@starterscfo.in, abhishek@starterscfo.in, archit@starterscfo.in, scfo@ftwo.in',
            "TemplateAlias": "scfo-contact-admin",
            "TemplateModel": {
                "product_name": "Starters' CFO",
                "name": body.full_name,
                "email": body.email,
                "mobile": body.mobile,
                "message": body.message,
                "product_url": "https://www.starterscfo.com",
                "company_name": "Starters' CFO",
                "company_address": "Delhi, NCT, India"
            }
        })
            .then((response) => {
                console.log(response)
            });

        //
        // twilio c2c
        //
        const twilio = require('twilio');
        const twilioEnv = {
            "TWILIO_ACCOUNT_SID": "ACef026b05b88c0baac0c25d9905baf149",
            "TWILIO_AUTH_TOKEN": "76e9201303bb247817447ddd37e09461",
            "TWILIO_NUMBER": "+12018174529"
        }
        const twClient = new twilio(twilioEnv.TWILIO_ACCOUNT_SID, twilioEnv.TWILIO_AUTH_TOKEN);
        twClient.messages.create({
            body: `Dear ${body.full_name},\nWe have received your message submitted at Starters' CFO.\nOur team will reach out shortly.\nPlease feel free to whatsapp at ${WHATSAPP_DISPLAY_NUMBER} if you need to talk sooner.\n\nTeam Starters' CFO\n\n`,
            to: '+91' + body.mobile,
            from: twilioEnv.TWILIO_NUMBER
        })
            .then((message) => console.log(message.sid))

        adminNumbers = ['+918527661224', '+919911464354', '+919911088852', '+919999016554', '+919599357038'];
        for (var i = 0; i < adminNumbers.length; i++) {
            twClient.messages.create({
                body: `Hello admin,\n\nWe have a new contact page message for you.\n\nName:${body.full_name}\nMobile:${body.mobile}\nEmail:${body.email}\nMessage:${body.message}\n\nGood day!\nSCFO.`,
                to: adminNumbers[i],
                from: twilioEnv.TWILIO_NUMBER
            })
                .then((message) => console.log(message.sid))
        }

        //
        // respond
        // 
        res.status(204).end()
    } catch (err) {
        res.status(500).json({
            "status": false,
            "message": err.message
        })
    }
}