const { Router } = require('express')
const { clientsController } = require('../controllers/clients.controller')

const router = Router()

router.get('/clients', clientsController.getClients)
router.post('/clients', clientsController.postClients)
router.patch('/clients/:id', clientsController.patchClients)
router.delete('/clients/:id', clientsController.deleteClients)

module.exports = router
