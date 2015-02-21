



var casper = require('casper').create();

/*
args=casper.cli.options;
var newstr1 = encodeURI(args[0].replace(/"/, ''));
var newstr2 = encodeURI(args[1].replace(/"/, ''));
*/

var fs = require('fs');
var utils = require('utils');
var data = fs.read('casperInput.txt');

var strArry=data.split("\n");
//utils.dump(strArry);

var headers = {

  method: 'get',

  headers: {

  'Host':'finance.yahoo.com',

  'User-Agent':'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0',

  'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',

  'Accept-Language':'en-US,en;q=0.5',

  'Accept-Encoding':'gzip, deflate',

  'Cookie':'B=a5vs7hpadttla&b=3&s=ir; ywandp=1000911397279%3A2124295925; fpc=1000911397279%3AZU-P9wHW%7C%7C; ypcdb=a9fa538faacf373610a9f3ca6cf7b73d; PRF=&t=ALKM+JAH+AXL+ARDM',

  'Connection':'keep-alive'



  }

};





  casper.start();

  

  

/* http://real-chart.finance.yahoo.com/table.csv?s=ALKM&d=1&e=16&f=2015&g=d&a=2&b=27&c=2013&ignore=.csv */

/*
casper.evaluate(function() {
__utils__.echo(newstr1);
});
*/

/*
casper.open(newstr1, headers).then(function(response) {

   casper.download(newstr2,'nice.csv');

});
*/







casper.open(strArry[0], headers).then(function(response) {

  casper.download(strArry[1],'nice.csv');

});







/*

casper.then(function() {

casper.download('http://real-chart.finance.yahoo.com/table.csv?s=ALKM&d=1&e=16&f=2015&g=d&a=2&b=27&c=2013&ignore=.csv','nice.csv');

});

*/



casper.run();



//eventFire(title, 'click');

//console.log('Page title is ' + title);



  

  

  

