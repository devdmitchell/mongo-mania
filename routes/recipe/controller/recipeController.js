const Recipe = require('../../model/Recipe')

const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.find({})
    res.status(200).json({message: "Here are all the recipes.", payload: allRecipes})
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
}

const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body)
    await newRecipe.save()
    res.status(200).json({message: "New Recipe Created successfully.", payload: newRecipe})
  } catch (error) {
    res.status(500).json({ message: 'Error creating recipe', error: error.message })
  }
}

module.exports = { getAllRecipes, createRecipe }
