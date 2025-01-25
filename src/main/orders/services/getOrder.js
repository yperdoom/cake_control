import Order from '../models/Order.js';
import defaultMongoOperation from '../../../database/defaultMongoOperation.js';

export default async function (filter, projection) {
  return Order.find(filter, projection, defaultMongoOperation)
} 