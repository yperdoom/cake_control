import { connect, disconnect } from '../../../database/mongodb.js';
import editOrder from '../services/editOrder.js'

export default async (req, res, next) => {
  const { body, params: { order_id } } = req

  try {
    await connect();
    const order = await editOrder(order_id, body)
    await disconnect();

    return res.status(200).json({
      message: 'Pedido criado com sucesso.',
      order
    });
  } catch (error) {
    Object.assign(error, { customMessage: 'Erro ao criar pedido.' })
    next(error);
  }
}
