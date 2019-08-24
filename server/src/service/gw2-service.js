const axios = require('axios');

class GW2Service {
   constructor() {
      this.baseUrl = 'https://api.guildwars2.com/v2';
   }

   getUrl() {
      return this.baseUrl;
   }

   async get(path = '') {
      const response = await axios.get(`${this.getUrl()}/${path}`);
      return response.data;
   }
}

module.exports = GW2Service;
