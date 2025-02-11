import { connect, disconnect } from '../../../database/mongodb.js';
import createOrder from '../services/createOrder.js'

export default async (req, res, next) => {
  const { body } = req

  try {
    await connect();
    const order = await createOrder(body)
    await disconnect();

    return res.status(201).json({
      message: 'Pedido criado com sucesso.',
      order
    });
  } catch (error) {
    Object.assign(error, { customMessage: 'Erro ao criar pedido.' })
    next(error);
  }
}
