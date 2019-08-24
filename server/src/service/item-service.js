const axios = require('axios');
const GW2Service = require('./gw2-service');
const Item = require('../models/item');

class ItemService extends GW2Service {
    async getItem(itemId) {
        const item = await this.get(itemId)
        return new Item(item);
    }

    async getItemIds() {
        return await this.get();
    }

    getUrl() {
        return `${super.getUrl()}/items`;
    }
}

module.exports = ItemService;