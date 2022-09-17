const { Router } = require('express')
const { clientsController } = require('../controllers/clients.controller')

const router = Router()

router.get('/clients', clientsController.getClients)
router.post('/clients', clientsController.postClients)
router.patch('/clients/:id', clientsController.patchClients)
router.delete('/clients/:id', clientsController.deleteClients)
router.patch('/clients/medecines/:id', clientsController.addMedicines)
router.patch('/clients2/medecines/:id', clientsController.purchaseMedicines)

module.exports = router
