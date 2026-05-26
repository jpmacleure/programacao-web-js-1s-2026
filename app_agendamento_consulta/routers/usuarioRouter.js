const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get("/login", usuarioController.getLoginView);
router.get("/cadastrar_usuario", usuarioController.getCadastroView);
router.post('/cadastrar_usuario', usuarioController.postCadastrarUsuario);
router.post('/login', usuarioController.postLogin);

module.exports = router;