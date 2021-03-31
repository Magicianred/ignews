import styles from '../styles/pages/home.module.scss';

import Head from 'next/head';
import { Fragment } from 'react';
import { SubscribeButton } from '../components/SubscribeButton';
import { GetStaticProps } from 'next';
import { stripe } from '../services/stripe';
import { CurrencyFormatterUSD } from '../utils/CurrencyFormatter';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  console.log(product);
  return (
    <Fragment>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey Helcome</span>
          <h1>
            News about <br /> the
            <span> React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/assets/images/avatar.svg" alt="Girl coding" />
      </main>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IaqTjJuDidflKosDDxN4Fgx', {
    expand: ['product'],
  });

  const product = {
    priceId: price.id,
    amount: CurrencyFormatterUSD(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
