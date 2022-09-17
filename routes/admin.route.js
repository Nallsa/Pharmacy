const { Router } = require('express')
const { medicinesController } = require('../controllers/medicines.controller')
const { categoriesController } = require('../controllers/categories.controller')

const router = Router()

router.get('/admin', medicinesController.getMedicines)
router.get('/admin/OP/:id', medicinesController.get2Medicines)
router.get('/admin/:id', medicinesController.get3Medicines)
router.post('/admin', medicinesController.postMedicines)
router.patch('/admin/:id', medicinesController.patchMedicines)
router.delete('/admin/:id', medicinesController.deleteMedicines)

router.get('/category/admin', categoriesController.getCategory)
router.post('/category/admin', categoriesController.postCategory)
router.patch('/category/admin/:id', categoriesController.patchCategory)
router.delete('/category/admin/:id', categoriesController.deleteCategory)

module.exports = router
