const express = require('express')

const routes = express.Router()

const { saveFormData } = require('../controller/index')

//SAVE DATA
routes.post('/favoriteSurvey', saveFormData)

module.exports = routes