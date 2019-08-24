class Recipe {
    constructor(recipeData) {
        this.id = recipeData.id;
        this.type = recipeData.type;
        this.outputItemId = recipeData.output_item_id;
        this.outputItemCount = recipeData.output_item_count;
        this.timeToCraftMs = recipeData.time_to_craft_ms;
        this.desciplines = recipeData.disciplines;
        this.minRating = recipeData.min_rating;
        this.flags = recipeData.flags;
        this.ingredients = recipeData.ingredients;
        this.guildIngredients = recipeData.guild_ingredients;
        this.outputUpgradeId = recipeData.output_upgrade_id;
        this.chatLink = recipeData.chat_link;
    }

    toJson() {
        return {
            id: this.id,
            type: this.type,
            outputItemId: this.outputItemId,
            outputItemCount: this.outputItemCount,
            timeToCraftMs: this.timeToCraftMs,
            discipline: this.desciplines,
            minRating: this.minRating,
            flags: this.flags,
            ingredients: this.ingredients,
            guildIngredients: this.guildIngredients,
            outputUpgradeId: this.outputUpgradeId,
            chatLink: this.chatLink,
        };
    }
}

module.exports = Recipe;
