const { Router } = require('express')
const { medicinesController } = require('../controllers/medicines.controller')

const router = Router()

router.get('/medicines', medicinesController.getMedicines)
router.post('/medicines', medicinesController.postMedicines)
router.patch('/medicines/:id', medicinesController.patchMedicines)
router.delete('/medicines/:id', medicinesController.deleteMedicines)

module.exports = router
