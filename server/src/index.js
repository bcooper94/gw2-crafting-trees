const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

const ItemService = require('./service/item-service');
const itemService = new ItemService();

const RecipeService = require('./service/recipe-service');
const recipeService = new RecipeService();

app.use(cors());

app.get('/items', async (req, res) => {
    try {
        const itemIds = await itemService.getItemIds();
        res.status(200).send(itemIds);
    } catch (ex) {
        res.status(500).send('Failed to retrieve itemIds');
    }
});

app.get('/items/:itemId', async (req, res) => {
    const itemId = req.params.itemId;

    try {
        const item = await itemService.getItem(itemId);
        res.status(200).send(item.toJson());
    } catch (ex) {
        res.status(500).send(`Failed to retrieve item for itemId=${itemId}`);
    }
});

app.get('/recipes/:recipeId', async (req, res) => {
    try {
        const recipe = await recipeService.getRecipe(req.params.recipeId);
        res.status(200).send(recipe.toJson());
    } catch (ex) {
        res.status(500).send(`Failed to retrieve recipe for recipeId=${recipeId}`);
    }
});

app.listen(port, () => console.log(`GW2 Crafting Trees server listening on port ${port}`));
