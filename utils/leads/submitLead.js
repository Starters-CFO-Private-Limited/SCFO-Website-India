
import { WHATSAPP_MESSAGE_NUMBER } from 'scfonext/constants';

const submitLead = async (fields, product, leadValue) => {
    // when a lead is submitted, store details locally as well
    localStorage.setItem("LEAD_FULL_NAME", fields.full_name);
    localStorage.setItem("LEAD_EMAIL", fields.email);
    localStorage.setItem("LEAD_MOBILE", fields.mobile);

    const response = await fetch('/api/v1/leads/', {
        'body': JSON.stringify({
            "full_name": fields.full_name,
            "email": fields.email,
            "mobile": fields.mobile,
            "product": product,
        }),
        'method': 'POST',
        'headers': {
            "cache-control": "no-cache",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        gtag_report_conversion("LEAD_FORM", leadValue);
        window.setTimeout(() => {
            window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_MESSAGE_NUMBER}&text=Hi%21%20I%20just%20submitted%20a%20request%20form%20on%20your%20website.%0d%0aI%20am%20interested%20in%20your%20product.&source=&data=`)
        }, 1000)
    } else {
        response.text().then(result => { console.log(result) });
    }
}

export default submitLead;