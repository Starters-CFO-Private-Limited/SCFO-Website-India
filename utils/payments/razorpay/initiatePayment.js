import { RAZORPAY_API_KEY_ID } from 'scfonext/keys.js';
const TESTING = false;

const handlePaymentError = () => {
    alert("Apologies, but your payment could not be processed. If you think there was a mistake, please reach out to us.");
}

const handlePaymentSuccess = () => {
    window.location = "/payment-successful?action=schedule-meeting";
}

const createOrder = async (amountInPaise) => {
    let response = await fetch("/api/v1/payments/razorpay/orders", {
        method: "POST",
        body: JSON.stringify({
            amount: TESTING ? 100 : amountInPaise,
        }),
        headers: {
            "cache-control": "no-cache",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        response = await response.json();
        return response.order
    } else {
        alert("We're very sorry, but an error occurred when processing your payment.");
        console.error((await response).text());
    }
}

const getPaymentContext = (order, amount, name, description, prefill) => {
    return {
        key: RAZORPAY_API_KEY_ID,
        amount: TESTING ? 100 : amount,
        currency: "INR",
        name: name || "Starters' CFO Private Limited",
        description: description,
        image: "https://www.starterscfo.com/static/images/logos/scfo/no-cap.png",
        order_id: order.id,
        handler: handlePaymentSuccess,
        prefill: prefill,
        notes: {
            address: ""
        },
        theme: {
            color: "#425089"
        }
    }
};

const initiatePayment = async (amount, name, description, prefill) => {
    if (TESTING) {
        alert("Testing mode is enabled. Payment amount will be limited to INR 1.");
    }

    if (!prefill) {
        prefill = {
            name: localStorage.getItem("LEAD_FULL_NAME"),
            email: localStorage.getItem("LEAD_EMAIL"),
            contact: localStorage.getItem("LEAD_MOBILE"),
        }
    }

    // first, create an order
    const razorpayOrder = await createOrder(amount);
    console.log(razorpayOrder);

    // then, create a payment context
    const razorpay = new Razorpay(getPaymentContext(razorpayOrder, amount, name, description, prefill));
    razorpay.open();

    razorpay.on("payment.failed", () => {
        handlePaymentError();
    })
}

export default initiatePayment;