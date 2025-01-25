module.exports = async (requisition, response, next) => {
  const body = requisition.body

  const stock = await createStock(body)

  if (stock) {
    return response.send({
      success: true,
      message: "Carteira criada com sucesso",
      body: stock
    })
  }

  return response.send({
    success: false,
    message: "Não foi possível criar a carteira"
  })
}
