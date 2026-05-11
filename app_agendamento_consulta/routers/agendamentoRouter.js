const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

router.get("/", agendamentoController.getIndex);
router.get("/agendamentos", agendamentoController.getAgendamentos);
router.post('/agendamento', agendamentoController.postAgendamento);

module.exports = router;