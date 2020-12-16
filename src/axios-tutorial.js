import axios from 'axios';

export default class AxiosTutorial {

  async getDogCeo() {
    try {
      const response = await axios({
        url: 'https://dog.ceo/api/breeds/list/all',
        method: 'get'
      });
      console.log(response.data.message);
    } catch (error) {
      console.log(error.response.data);
    }
  }
}