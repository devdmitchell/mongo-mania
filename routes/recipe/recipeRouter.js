const express = require('express')
const router = express.Router()
const { getAllRecipes, createRecipe } = require('../../controller/recipe/recipeController')


router.get('/get-all-recipes', getAllRecipes)


router.post('/create-recipe', createRecipe)

module.exports = router