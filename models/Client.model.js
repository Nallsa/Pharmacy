const mongoose = require('mongoose')

const clientSchema = {
  client: String,
  cTotal: Number,
  basket: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medicines',
    },
  ],
}

const Client = mongoose.model('Clients', clientSchema)

module.exports = Client
