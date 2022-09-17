const Client = require('../models/Client.model')

module.exports.clientsController = {
  getClients: async (req, res) => {
    const clients = await Client.find()
    res.json(clients)
  },
  postClients: async (req, res) => {
    const { client, cTotal } = req.body
    const clients = await Client.create({
      client,
      cTotal,
    })
    res.json(clients)
  },
  patchClients: async (req, res) => {
    const { medicine, total, category } = req.body
    const clients = await Client.findByIdAndUpdate(req.params.id, {
      medicine,
      total,
      category,
    })
    res.json(clients)
  },
  deleteClients: async (req, res) => {
    const clients = await Client.findByIdAndDelete(req.params.id)
    res.json(clients)
  },
}
