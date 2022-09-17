const mongoose = require('mongoose')

const medicinesSchema = {
  category: String,
}

const Category = mongoose.model('Category', medicinesSchema)

module.exports = Category
