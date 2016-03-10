
var senzor= require('ds18b20'); 

senzor.sensors( function (err, ids) {
	console.log('Senzor id is:', ids); 

}); 


var timer = setInterval ( function () {

senzor.temperature('28-0000073745c3', function (err, value) {

        console.log('Current temperature is ', value);
});


}, 500); 







