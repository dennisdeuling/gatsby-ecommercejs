import { loadStripe } from '@stripe/stripe-js';

const stripe = loadStripe(process.env.GATSBY_STRIPE_PUBLIC_KEY);

export default stripe;
