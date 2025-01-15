const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const recipeRouter = require('./routes/recipe/recipeRouter')

mongoose
    .connect("mongodb://localhost:27017/mongo-mania")
    .then(()=>{
      console.log('MONGODB CONNECTED.')
    })
    .catch((e)=>{
      console.log(e)
    })

const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use('/api/recipe', recipeRouter)

const PORT = 3000


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})