import { WHATSAPP_MESSAGE_LINK } from 'scfonext/constants';

const navigateToWhatsapp = ({
    newPage = true,
}) => {
    gtag_report_conversion("CONTACT", leadValue);
    if (newPage) {
        window.open(WHATSAPP_MESSAGE_LINK)
    } else {
        window.location = WHATSAPP_MESSAGE_LINK;
    }
}

module.exports = { navigateToWhatsapp }