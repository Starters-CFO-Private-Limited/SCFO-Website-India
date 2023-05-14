import createContact from "../../../utils/hubspot/createContact";
import createDeal from "../../../utils/hubspot/createDeal";
import sendLeadEmails from "../../../utils/postmark/sendLeadEmails";
import sendLeadMessages from "../../../utils/twilio/sendLeadMessages";
import updateGoogleSheet from "../../../utils/leads/googleSheet"


export default async function handler(req, res) {
    try {
        const body = req.body;

        console.info(body)

        // create a contact on hubspot 
        let contactCreated = false;
        let contactVID = null;
        try {
            contactVID = await createContact(body.full_name, body.email, body.mobile);
            contactCreated = true;
        } catch (err) {
            console.error(err);
        }

        // create a deal on hubspot
        let dealCreated = false;
        try {
            await createDeal(contactVID, body.full_name, body.product);
            dealCreated = true;
        } catch (err) {
            console.error(err);
        }

        let emailsSent = false;
        try {
            await sendLeadEmails(body);
            emailsSent = true;
        } catch (err) {
            console.error(err)
        }

        let smsSent = false;
        try {
            await sendLeadMessages(body);
            smsSent = true;
        } catch (err) {
            console.error(err);
        }

        let googleSheetUpdated = false;
        try {
            await updateGoogleSheet(body);
            googleSheetUpdated = true;
        } catch (err) {
            console.error(err);
        }

        //
        // respond
        // 
        res.status(200).json({
            "contactVID": contactVID,
            "emailSent": emailsSent,
            "smsSent": smsSent,
            "dealCreated": dealCreated,
            "contactCreated": contactCreated,
        })
    } catch (err) {
        res.status(500).json({
            "status": false,
            "message": err.message
        })
    }
}
