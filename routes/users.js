var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/:username', userController.getOne);
router.get('/', userController.getAll);

router.post('/',userController.register);
router.put('/:username', userController.update);
router.delete('/:username',userController.delete);

module.exports = router;