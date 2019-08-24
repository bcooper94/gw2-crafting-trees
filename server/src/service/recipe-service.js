const axios = require('axios');
const GW2Service = require('./gw2-service');
const Recipe = require('../models/recipe');

class RecipeService extends GW2Service {
    async getRecipe(recipeId) {
        const recipeResponse = await axios.get(`${this.getUrl()}/${recipeId}`);
        return new Recipe(recipeResponse.data);
    }

    getUrl() {
        return `${super.getUrl()}/recipes`;
    }
}

module.exports = RecipeService;
