import Commerce from '@chec/commerce.js';

const commerce = new Commerce(`${process.env.GATSBY_CHEC_PUBLIC_KEY}`);

export default commerce;
