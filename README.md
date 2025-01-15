# Mongo-Mania

1. Start up a new backend called 'mongo-mania'

2. Install Mongoose:

    ```
    npm i mongoose
    ```

3. Create a new folder called `recipe` in the `routes` folder.

4. Inside the `recipe` folder, create a file called `recipeRouter.js` and make sure you require it in `app.js`.

5. Inside the `recipe` folder, create `controller` and `model` folders.

6. In the `controller` folder, create a file called `recipeController.js`.

7. In the `model` folder, create a file called `Recipe.js`.

8. In `Recipe.js`, create a model with the key `recipeName`.

9. In `recipeController`, bring in the `Recipe` model and create a function called `getAllRecipe`. Recipe.find({})

10. Use the `getAllRecipe` function in `recipeRouter.js`; the function should get all the recipes.

11. In `recipeController`, create a function called `createRecipe`. Use this function in the router as well. The function should create a recipe from the body of a request, and make sure it is saved to MongoDB.

`12. Submit the GitHub URL link in canvas. Don't forget to add `node_modules` to the `.gitignore` file.

