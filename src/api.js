const axios = require('axios');
const URI = "https://url-ayush-shortner.herokuapp.com/";
const URI1 = 'http://localhost:5000/';
export const postData = async(url)=> {
    const response = await axios({
        method: 'post',
        url: URI,
        data: {
          url: url
        },
        header:{
            "Content-Type":"application/json"
        }
      });
    return response;
  }