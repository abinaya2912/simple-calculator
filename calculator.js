const http = require('http');
const url = require('url');
const cal=require("./ownmodule");

function getexample(request, response) {
const parsedUrl = url.parse(request.url, true);
 const path = parsedUrl.pathname;
    const qs = parsedUrl.query;
    const num1 = parseInt(qs['num1']);
    const num2 = parseInt(qs['num2']);
    var result;
    var op;
    switch (path) {
 case '/add':
 op = 'addition';
            result = cal.add(num1,num2);
            break;
        case '/sub':
            op = 'subtraction';
            result = cal.sub(num1,num2);
            break;
        case '/product':
            op = 'multiplication';
            result = cal.product(num1,num2);
            break;
        case '/divide':
            op = 'division';
           result=cal.divide(num1,num2);
            break;
        case '/modulo':
            op = 'modulo';
            result = cal.modulo(num1,num2);
            break;
        default:
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.write('Page not found');
            response.end();
            return;
    }

    console.log('URL ' + request.url + ' received. using get method');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write("The result of "+op+" is "+result);
    response.end();
}
http.createServer(getexample).listen(4000);
console.log('Server Started');





