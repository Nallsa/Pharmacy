const Medicines = require('../models/Medicines.model')

module.exports.medicinesController = {
  getMedicines: async (req, res) => {
    const medicines = await Medicines.find().populate('category')
    res.json(medicines)
  },
  postMedicines: async (req, res) => {
    const { medicine, total, category } = req.body
    const medicines = await Medicines.create({
      medicine,
      total,
      category,
    })
    res.json(medicines)
  },
  patchMedicines: async (req, res) => {
    const { medicine, total, category } = req.body
    const medicines = await Medicines.findByIdAndUpdate(req.params.id, {
      medicine,
      total,
      category,
    })
    res.json(medicines)
  },
  deleteMedicines: async (req, res) => {
    const medicines = await Medicines.findByIdAndDelete(req.params.id)
    res.json(medicines)
  },
}
