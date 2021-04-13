import { fauna } from '../../../services/fauna';
import { query as q } from 'faunadb';
import { stripe } from '../../../services/stripe';

export async function saveSubscription(
  subscriptionId: string,
  customerId: string
) {
  console.log('subscriptionId: ', subscriptionId, 'customerId: ', customerId);

  const userRef = await fauna.query(
    q.Select(
      'ref',
      q.Get(q.Match(q.Index('user_by_stripe_customer_id'), customerId))
    )
  );

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  const { id, status, items } = subscription;

  const subscriptionData = {
    id,
    price_id: items.data[0].price.id,
    status,
    userId: userRef,
  };

  await fauna.query(
    q.Create(q.Collection('subscriptions'), { data: subscriptionData })
  );
}
