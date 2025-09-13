const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Bienvenido al servidor de Mueblería Jota</h1>');
    } else if (req.url === '/productos') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h2>Nuestro catalogo de productos</h2>');
    } else if (req.url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<p>Contáctanos al 555-1234</p>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
}).listen(3000, 'localhost', () => {
    console.log('Servidor corriendo en http://localhost:3000/');
});