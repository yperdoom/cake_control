module.exports = async (requisition, response, next) => {
  const body = requisition.body


  const order = await createOrder(body)

  if (order) {
    return response.send({
      success: true,
      message: "Carteira criada com sucesso",
      body: order
    })
  }

  return response.send({
    success: false,
    message: "Não foi possível criar a carteira"
  })
}
