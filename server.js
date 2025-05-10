const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
const publicDirectory = path.join(__dirname, 'public');

const server = http.createServer(async (req, res) => {
  try {
    let filePath = path.join(publicDirectory, req.url === '/' ? 'home.html' : req.url);
    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      case '.json':
        contentType = 'application/json';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
      case '.jpeg':
        contentType = 'image/jpeg';
        break;
        case '.svg': // Adicionando o suporte para arquivos SVG
        contentType = 'image/svg+xml';
        break;
    }

    const data = await fs.readFile(filePath);

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      // Arquivo não encontrado
      fs.readFile(path.join(publicDirectory, '404.html'))
        .then(contents => {
          res.writeHead(404, { 'Content-Type': 'public/Error_404' });
          res.end(contents);
        })
        .catch(err => {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        });
    } else {
      // Outro erro
      res.writeHead(500);
      res.end(`Server Error: ${err.code}`);
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});