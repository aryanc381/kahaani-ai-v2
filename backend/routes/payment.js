import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();
const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.use(cors({origin: process.env.CLIENT_URL}));

router.post('/create-checkout-session', async (req, res) => {
    try {
        const { product } = req.body;
        console.log(product)

        if(!product || !product.name || !product.price) {
            return res.status(400).json({error: "Invalid Product Data"});
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: product.name,
                            images: [product.image],
                        },
                        unit_amount: product.price * 100
                    },
                    quantity: 1
                }
            ],
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/success`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`
        });

        return res.status(200).json({
            url: session.url
        });
    } catch(err) {
        return res.status(500).json({error: err.message});
    }
});

export default router;