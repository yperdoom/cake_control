import deleteOrder from "../services/deleteOrder.js";

export default async (req, res, next) => {
  const { params: { order_id } } = req

  try {
    await connect();
    const order = await deleteOrder(order_id)
    await disconnect();

    return res.status(200).json({
      message: 'Pedido deletado com sucesso.',
      order
    });
  } catch (error) {
    Object.assign(error, { customMessage: 'Erro ao criar pedido.' })
    next(error);
  }
}
