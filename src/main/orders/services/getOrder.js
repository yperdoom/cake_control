import Order from '../models/Order.js';
import defaultMongoOperation from '../../../database/defaultMongoOperation.js';

export default async function (filter, projection) {
  defaultMongoOperation.limit = 10

  return Order.find(filter, projection, defaultMongoOperation)
} 