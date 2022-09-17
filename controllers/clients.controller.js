const Client = require('../models/Client.model')
const Medicines = require('../models/Medicines.model')

module.exports.clientsController = {
  getClients: async (req, res) => {
    const clients = await Client.find().populate('basket')
    res.json(clients)
  },
  postClients: async (req, res) => {
    const { client, cTotal, recipe } = req.body
    const clients = await Client.create({
      client,
      recipe,
      cTotal,
    })
    res.json(clients)
  },
  patchClients: async (req, res) => {
    const { client, cTotal, recipe, basket } = req.body
    const clients = await Client.findByIdAndUpdate(req.params.id, {
      client,
      recipe,
      cTotal,
      basket,
    })
    res.json(clients)
  },
  deleteClients: async (req, res) => {
    const clients = await Client.findByIdAndDelete(req.params.id)
    res.json(clients)
  },
  addMedicines: async (req, res) => {
    try {
      const { MedicinesID } = req.body
      const clients = await Client.findById(req.params.id)
      if (clients.recipe !== true) {
        await Client.findByIdAndUpdate(req.params.id, {
          $addToSet: { basket: MedicinesID },
        })
        res.json('Перемещено в корзину')
      } else {
        res.json('У вас нет рецепта')
      }
      res.json(clients)
    } catch (e) {
      console.log(e)
    }
  },
  purchaseMedicines: async (req, res) => {
    try {
      const { MedicinesID } = req.body
      const clients = await Client.findById(req.params.id)
      const medicines = await Medicines.findById(MedicinesID)
      if (clients.cTotal > medicines.total) {
        await Client.findByIdAndUpdate(req.params.id, {
          $pull: { basket: MedicinesID },
          cTotal: clients.cTotal - medicines.total,
        })
        res.json('Покупка')
      } else {
        res.json('Недостаточно средств на счете')
      }

      res.json(clients)
    } catch (e) {
      console.log(e)
    }
  },
}

// const { MedicinesID } = req.body
// const clients = await Client.findById(req.params.id)
// if (clients.recipe !== false) {
//   const medicines = await Medicines.findById(MedicinesID)
//   if (clients.cTotal > medicines.total) {
//     await Client.findByIdAndUpdate(req.params.id, {
//       $addToSet: { basket: MedicinesID },
//     })
//     res.json('Покупка ')
//     res.json(clients.cTotal - medicines.total)

//   } else {
//     res.json('Недостаточно средств на счете')
//   }
// } else {
//   res.json('У вас нет рецепта')
// }
// res.json(clients)
