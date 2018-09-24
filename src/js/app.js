// JS Goes here - ES6 supported

// Say hello

var axios = require('axios');

//axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = 'https://myrestapiworkd.cfapps.io/en/api/v1.0';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

axios.get('/welcome')
.then(function(respose){
	alert(respose);
})
.catch(function (error) {
   console.log(error);
});