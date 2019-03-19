let http = require('http');
let fs = require('fs');



// http.createServer(function(req, res) {
//  res.write('Hello World');
//  res.end();
// }).listen(3000);

http.createServer(function(req, res) {

    if(req.url === '/'){
        res.write('Hello out tere! My name ist Madschi!');
        res.end();
    }
    if(req.url === '/status'){
        res.write('I\'m busy.');
        res.end();
    }
    if(req.url === '/contact'){
        res.write('Please do not hesitate to contact me: madschi.steigi@mymail.com');
        res.end();
    }

    if(req.url === '/'){
        fs.readFile('html/index.html', function (err, data) {
            res.write(data);
            res.end();
        });
    }
}).listen(3000);







