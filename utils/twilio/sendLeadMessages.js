const TWILIO_ACCOUNT_SID = "AC9a99478f2803757808798af299a5fd08";
const TWILIO_AUTH_TOKEN = "7a283283acb24a406beec839e1670cd3";
const TWILIO_FROM_NUMBER = "+14157920480"

import { configureScope } from "@sentry/node";
import WHATSAPP_MESSAGE_NUMBER from "../../constants";


export default async function sendLeadMessages(body) {
    const twilio = require('twilio');
    const twilioEnv = {
        "TWILIO_ACCOUNT_SID": TWILIO_ACCOUNT_SID,
        "TWILIO_AUTH_TOKEN": TWILIO_AUTH_TOKEN,
        "TWILIO_NUMBER": TWILIO_FROM_NUMBER
    }

    let twClient;
    try {
        twClient = new twilio(twilioEnv.TWILIO_ACCOUNT_SID, twilioEnv.TWILIO_AUTH_TOKEN);
    } catch {
        console.error("Could not create twilio client");
    }

    if (twClient != undefined) {

        // send sms to customer
        twClient.messages.create({
            body: `Dear ${body.full_name},\nWe have received your enquiry for services at Starters' CFO.\nOur team will reach out shortly.\nPlease feel free to whatsapp at ${WHATSAPP_MESSAGE_NUMBER} if you need to talk sooner.\n\nTeam Starters' CFO\n\n`,
            to: '+91' + body.mobile,
            from: twilioEnv.TWILIO_NUMBER
        })
            .then((message) => {
                console.log(`Twilio Response ${JSON.stringify(message)}`);
            })
            .catch(err => {
                console.error(`Failed to send sms via Twilio, ${err}`);
            })

        // send sms to admins
        const adminNumbers = ['+918527661224', '+919911464354', '+919911088852'];
        for (let adminNumber of adminNumbers) {
            twClient.messages.create({
                body: `Hello admin,\n\nWe have a new lead for you.\n\nProduct: ${body.product}\nName:${body.full_name}\nMobile:${body.mobile}\nEmail:${body.email}\n\nGood day!\nSCFO.`,
                to: adminNumber,
                from: twilioEnv.TWILIO_NUMBER
            })
                .then((message) => {
                    console.log(`Twilio Response ${JSON.stringify(message)}`);
                })
                .catch(err => {
                    console.error(`Failed to send sms via Twilio, ${err}`);
                })
        }
    } else {
        console.error("Skipped sending SMS to customer and admins, could not init twilio client");
    }
}
