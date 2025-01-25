const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StockSchema = new Schema({
  name: {
    type: String, required: true
  },
  description: {
    type: String
  },
  quantity_in_stock: {
    type: Int32,
    required: true
  },
  type_of_quantity: {
    type: String,
    required: true,
    enum: ['unit']
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  id: false,
  versionKey: false
})

StockSchema.index({ name: 'text' }, { default_language: 'pt-br' })

module.exports = mongoose.model('stock', StockSchema)
