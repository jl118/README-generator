const axios = require('axios');

// calls GitHub api for user info
const api = {
  async getUser(userResponses) {
    try { 
        let response = await axios
        // passes in github username to api call
        .get(`https://api.github.com/users/${userResponses.username}`);
        return response.data;

    } catch (error) {
        console.log(error);
    }
  }
};

module.exports = api;