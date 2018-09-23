// JS Goes here - ES6 supported

// Say hello

var axios = require('axios');

axios.get('https://myrestapiworkd.cfapps.io/en/api/v1.0/welcome')
.then(function(respose){
	alert(respose);
})
.catch(function (error) {
   console.log(error);
});