/*let fs = require("fs");
let moment = require('moment');
let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8');
console.log(datos);
console.log(moment().format('MM Do YYYY'));*/

/*let heroes = require("./superheroes");
console.log(heroes);*/

const http = require('http')

http.createServer(function(req, res) {
    res.writeHead(200, {"content-type": "text/plain"});
    
        switch(req.url){
            case "/":
                res.end("Bienvenido a mi Compu");
                break;
            case "/productos":
                res.end("aca van los productos");
                break;
            default:
                res.end("404");
                break;
        }
}).listen(3000,"localhost" );
