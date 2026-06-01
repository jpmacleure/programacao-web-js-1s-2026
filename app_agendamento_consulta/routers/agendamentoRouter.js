const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');
const usuarioController = require('../controllers/usuarioController');

router.get("/", usuarioController.verificarAutenticacao, agendamentoController.getIndex);
router.get("/detalhar/:id", usuarioController.verificarAutenticacao, agendamentoController.getDetalharAgendamento);
router.get("/agendamentos", usuarioController.verificarAutenticacao, agendamentoController.getAgendamentos);
router.post('/agendamento', usuarioController.verificarAutenticacao, agendamentoController.postAgendamento);

module.exports = router;