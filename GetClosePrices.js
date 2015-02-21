var casper = require('casper').create();

var fs = require('fs');
var utils = require('utils');

// read the input file which was prepared by ruby script GetClosePrices.rb
var data = fs.read('casperInput.txt');

// input file expected to be newline, \n, delimited
var strArry=data.split("\n");


// Not sure if this is needed anymore. When I was putting this together,
// these YF pages seemed to not like being scraped by casperjs unless
// you at least pretended to be a request coming from a browser.
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


// Note headers from above comment
casper.open(strArry[0], headers).then(function(response) {

  // get csv
  casper.download(strArry[1],'nice.csv');

});



casper.run();



  

  

  

