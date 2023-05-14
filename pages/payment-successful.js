import React from "react";
import ButtonRounded from 'scfonext/pages/components/site/buttonRounded';
import Container from "scfonext/pages/components/site/container";
import Layout from 'scfonext/pages/components/site/layout';


class PaymentSuccessful extends React.Component {

    state = {
        showScheduler: true,
        emojis: ["🎉", "🎊", "🎈", "🎓", "🍾", "😺", "🙋", "🍡", "🎄"],
        emoji: "",
    }

    schedulerComponent = () => {
        return (
            <div className="mt-5">
                <p className="text-slate-700">
                    We will reach out to you shortly. If you'd like, you can schedule a call yourself on the calendar here.
                </p>
                <iframe src="https://meetings.hubspot.com/abhishek100?embed=true" width="100%" height="700px" className="mt-10"></iframe>
            </div>
        )
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                emoji: this.state.emojis[Math.floor(Math.random() * this.state.emojis.length)]
            })
        }, 1500);
        this.forceUpdate();
    }

    render() {

        const {
            showScheduler,
            emoji,
        } = this.state;

        return (
            <>
                <Layout>
                    <Container className="py-20">
                        <div className="flex flex-col items-center justify-center text-slate-700 text-center h-full w-full text-sm">
                            <span className="text-5xl text-center mb-10">{emoji}</span>
                            We have successfully received your payment. We will get in touch with you with a confirmation email shortly.

                            {
                                showScheduler && (
                                    this.schedulerComponent()
                                )
                            }

                            <ButtonRounded link="/">Go Back</ButtonRounded>
                        </div>
                    </Container>
                </Layout>
            </>
        )
    }
}

export default PaymentSuccessful;