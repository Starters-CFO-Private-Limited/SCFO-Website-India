const WHATSAPP_MESSAGE_NUMBER = "918112811268";
const WHATSAPP_DISPLAY_NUMBER = "+91 81128 11268";
const TELEPHONE_NUMBER_DISPLAY = "911141183815";
const TELEPHONE_NUMBER = "+911141183815";
const WHATSAPP_MESSAGE_LINK = "https://api.whatsapp.com/send?phone=8112811268&text=&source=&data=";
const BLOG_LINK = "https://blog.starterscfo.com/";

const LEAD_FORM_CONFIG = {
    full_name: {
        isRequired: {
            message: 'Full name is a required field.'
        },
    },
    mobile: {
        isRequired: {
            message: 'Mobile is a required field.'
        },
        isExactLength: {
            message: 'Mobile number must have exactly 10 digits.',
            length: 10,
        },
        isRegexMatch: {
            message: 'Mobile numbers can only contain digits.',
            regex: /^\d{10}$/,
        }
    },
    email: {
        isRequired: {
            message: 'Email is a required field.'
        },
        isEmail: { message: 'Please enter a valid e-mail address' },
    }
};

const VALUATION_CONVERSION_VALUE = 45000.00;
const VALUATION_HUBSPOT_MEETINGS_LINK = "https://meetings.hubspot.com/abhishek100"

module.exports = {
    WHATSAPP_MESSAGE_NUMBER,
    WHATSAPP_DISPLAY_NUMBER,
    TELEPHONE_NUMBER_DISPLAY,
    TELEPHONE_NUMBER,
    WHATSAPP_MESSAGE_LINK,
    BLOG_LINK,
    LEAD_FORM_CONFIG,
    VALUATION_CONVERSION_VALUE,
    VALUATION_HUBSPOT_MEETINGS_LINK
};
