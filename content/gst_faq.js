export const GST_FAQ = [
    {
        "title": "Do I need to register for GST?",
        "body": () => {
            return (
                <>
                    <p className="color__grey">
                        If any of the following are true, you need to register for GST.
                        <br></br>
                        <ul className="card__list">
                            <li><i className="fa fa-check"></i>&nbsp;You had pre - gst tax registration. ( VAT, Excise, Service Tax )</li>
                            <li><i className="fa fa-check"></i>&nbsp;Businesses with turnover greater than ₹40 Lakhs. <sup><span className="color__light-grey font__10">additional terms apply.</span></sup></li>
                            <li><i className="fa fa-check"></i>&nbsp;You run an e commerce business.</li>
                        </ul>
                        We recommend talking to an advisor with us to be sure. (Free!)
                    </p>
                </>
            )
        }
    },
    {
        "title": "What documents do I need?",
        "body": () => {
            return (
                <>
                    <p className="color__grey">
                        <ul className="card__list">
                            <li><i className="fa fa-check"></i>&nbsp;KYC documents of directors.</li>
                            <li><i className="fa fa-check"></i>&nbsp;Proof of incorporation.</li>
                            <li><i className="fa fa-check"></i>&nbsp;Cancelled Cheque / Bank Statement.</li>
                            <li><i className="fa fa-check"></i>&nbsp;Digital Signature.</li>
                            <li><i className="fa fa-check"></i>&nbsp;Letter of authorization / board resolution.</li>
                        </ul>
                    </p>
                </>
            )
        }
    },
    {
        "title": "What if I don't register?",
        "body": () => {
            return (
                <>
                    Deliberately avoiding paying taxes will attract <b>fines of 100%</b>, with possible <b>criminal prosecution</b>. Genuine mistakes attract a fine of 10%, with a minimum of ₹ 10,000.
                </>
            )
        }
    },
    {
        "title": "How long will this take?",
        "body": () => {
            return (
                <>
                    After submitting your documents with us, and making an advance payment, you will receive your GSTIN number within <b>5 days</b>. An advisor will get on a call to help answer any questions about your registration.
                </>
            )
        }
    },
    {
        "title": "What is a GSTIN?",
        "body": () => {
            return "All businesses registered under GST are allocated a unique number known as GSTIN."
        }
    },
    {
        "title": "Do I need multiple GST numbers?",
        "body": () => {
            return "If a business sells in more than one state, a separate GST registration should be completed for each state."
        }
    },
    {
        "title": "What is Composition scheme and when should a business opt for it?",
        "body": () => {
            return (
                <>
                    If eligible, under the composition scheme, a business is granted certain benefits.

                    <ul className="card__list mt-2 mb-2">
                        <li><i className="fa fa-check"></i>&nbsp;File returns only once every quarter.</li>
                        <li><i className="fa fa-check"></i>&nbsp;They cannot issue taxable invoices.</li>
                        <li><i className="fa fa-check"></i>&nbsp;They cannot claim any input credit.</li>
                    </ul>
                    To understand if you are eligible for this scheme, feel free to schedule a free call with us.
                </>
            )
        }
    },
    {
        "title": "What are the benefits of GST registration?",
        "body": () => {
            return (
                <>
                    <ul className="card__list">
                        <li><i className="fa fa-check"></i>&nbsp;Collect input credit.</li>
                        <li><i className="fa fa-check"></i>&nbsp;Make interstate sales without any restrictions.</li>
                        <li><i className="fa fa-check"></i>&nbsp;They cannot claim any input credit.</li>
                    </ul>
                </>
            )
        }
    }
]

export default GST_FAQ;