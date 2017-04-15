var repeat = require('repeat');
var express = require('express')
var http = require('http');
var app = express()
var QuickBase = require('quickbase');

var quickbase = new QuickBase({
	realm: 'team',
	//appToken: 'application token',
	userToken: 'b287yg_uyp_dsagzw8b755gx7bvr8hfmdp3fu53'
});

quickbase.api('API_AddRecord', {
	dbid: 'bmp25zq2a',           /* Required */
	fields: [                    /* Required */
		{ fid: 6, value: 'INITIAL!' }
	],
	disprec: false,
	fform: false,
	ignoreError: false,
	msInUTC: false
}).then((results) => {
	console.log(results); 
	/* results = {
	 * 	action: 'API_AddRecord',
	 * 	errcode: 0,
	 * 	errtext: 'No error',
	 * 	rid: 21,
	 * 	update_id: 1206177014451
	 * }
	*/
}).catch((error) => {
	console.log(error); 
	// Handle error
});



var i = 0; 
function sayHello() {
   i++; 
  console.log("Sending Hello Testin!"+i);

  quickbase.api('API_AddRecord', {
	dbid: 'bmp25zq2a',           /* Required */
	fields: [                    /* Required */
		{ fid: 6, value: 'I='+i }
	],
	disprec: false,
	fform: false,
	ignoreError: false,
	msInUTC: false
}).then((results) => {
	console.log(results); 
	/* results = {
	 * 	action: 'API_AddRecord',
	 * 	errcode: 0,
	 * 	errtext: 'No error',
	 * 	rid: 21,
	 * 	update_id: 1206177014451
	 * }
	*/
}).catch((error) => {
	console.log(error); 
	// Handle error
});
};


repeat(sayHello).every(10000, 'ms').for(1, 'minutes').start.in(5, 'sec');

http.createServer(app).listen(1337, function () {
  console.log("Express server listening on port 1337");
});



var server = app.listen(3456, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});

var schedule = require('node-schedule');
 
var j = schedule.scheduleJob('42 * * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});


//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'www.random.org',
  path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();