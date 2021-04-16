const { Router } = require('express');
const router = Router();

const { welcome, getSongs } = require('../controllers/controller.js')

router.get('/', welcome);
router.get('/songs', getSongs);

module.exports = router;