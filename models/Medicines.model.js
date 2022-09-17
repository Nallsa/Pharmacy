const mongoose = require('mongoose')

const medicinesSchema = {
  medicine: String,
  total: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
}

const Medicines = mongoose.model('Medicines', medicinesSchema)

module.exports = Medicines
