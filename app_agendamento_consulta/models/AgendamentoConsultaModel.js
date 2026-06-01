const Sequelize = require('sequelize');
const db = require('../db');

const AgendamentoConsulta = db.define('agendamento_consulta', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clinica: {
        type: Sequelize.STRING,
        allowNull: false
    },
    especialidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_consulta: {
        type: Sequelize.DATE,
        allowNull: false
    },
    hora_consulta: {
        type: Sequelize.TIME,
        allowNull: false
    },
    observacao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = AgendamentoConsulta;