const Category = require('../models/Category.model')

module.exports.categoriesController = {
  getCategory: async (req, res) => {
    const category = await Category.find()
    res.json(category)
  },
  postCategory: async (req, res) => {
    const { category } = req.body
    const categories = await Category.create({
      category,
    })
    res.json(categories)
  },
  patchCategory: async (req, res) => {
    const { category } = req.body
    const categories = await Category.findByIdAndUpdate(req.params.id, {
      category,
    })
    res.json(categories)
  },
  deleteCategory: async (req, res) => {
    const categories = await Category.findByIdAndDelete(req.params.id)
    res.json(categories)
  },
}
