"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// const router = express.Router()
const router = require('express').Router()

// Controller:
const todo = require('../controllers/todo.controller.view')

/* ------------------------------------------------------- *

router.route('/')
    .get(todo.list)
    .post(todo.create)

router.route('/:id')
    .get(todo.read)
    .put(todo.update)
    .delete(todo.delete)

/* ------------------------------------------------------- */

router.get('/', todo.list)
router.get('/create', todo.create)
router.post('/create', todo.create)

/* ------------------------------------------------------- */

module.exports = router