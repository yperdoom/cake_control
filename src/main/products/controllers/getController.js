import { connect, disconnect } from '../../../database/mongodb.js';
import getOrder from '../services/getOrder.js';
export default async (req, res, next) => {
  const filter = {};
  const projection = {};
  let paginate = true;

  if (req.params.order_id) {
    filter._id = req.params.order_id
    paginate = false;
  }

  try {
    await connect();
    const order = await getOrder(filter, projection)
    await disconnect();

    if (paginate) {
      return res.json({
        message: 'Operação concluída com sucesso.',
        quantity: order.length,
        page: 1,
        pageLength: 1,
        order
      });
    }

    res.json({
      message: 'Operação concluída com sucesso.',
      order
    });
  } catch (error) {
    Object.assign(error, { customMessage: 'Erro ao buscar pedido.' })
    next(error);
  }
}
