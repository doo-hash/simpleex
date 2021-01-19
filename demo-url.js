var url = require('url');
var adr = 'https://mail.google.com/mail/u/0/#inbox/FMfcgxwKkHhQmWGSlKLRjcscVqRDPsfh';
var q= url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
 
//var qdata = q.query;
//console.log(qdata.date);