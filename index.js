const axios = require('axios');

const apikey = "apikey="+"YOUR-API-KEY";
const numbers = "numbers=91999999999"; // add coutry code also
const message = "message=YOUR-MESSAGE";
const params = apikey+"&"+numbers+"&"+message+"&test=true"; //remove test=true to send messages for real

axios.get('http://api.textlocal.in//send/?'+params)
    .then((res) => {
        console.log(res.data);
    })
    .catch(err => console.err);