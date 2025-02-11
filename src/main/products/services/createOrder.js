import Order from '../models/Product.js';

export default async function (document) {
  return Order.create(document)
}
