const axios = require('axios');

// calls GitHub api for user info
const api = {
  async getUserInfo(userResponse) {
    try { 
        let response = await axios
        // passes in github username to api call
        .get(`https://api.github.com/users/${userResponse.username}`);
        return response.data;

    } catch (error) {
        console.log(error);
    }
  }
};

module.exports = api;