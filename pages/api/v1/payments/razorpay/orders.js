import { v4 as uuidv4 } from 'uuid';
import Razorpay from "razorpay";
import { RAZORPAY_API_KEY_ID, RAZORPAY_API_KEY_SECRET } from 'scfonext/keys';

export default async function handler(req, res) {
    try {
        const traceID = uuidv4();
        const body = req.body;
        const razorpay = new Razorpay({ key_id: RAZORPAY_API_KEY_ID, key_secret: RAZORPAY_API_KEY_SECRET })

        const order = await razorpay.orders.create({
            amount: body.amount,
            currency: "INR",
            notes: {
                traceID: traceID,
            }
        });

        //
        // respond
        // 
        res.status(200).json({
            order: {
                id: order.id,
                status: order.status,
                notes: {
                    traceID: traceID
                }
            }
        })
    } catch (err) {
        res.status(500).json({
            "status": false,
            "message": err.message
        })
    }
}
