require('dotenv').config();

const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 6060;

const server = http.createServer((req,res) => {

  console.log(req.headers)
  const urlData = new URL(req.url, `http://${req.headers.host}`);

  console.log(urlData)

  const resFile = urlData.pathname == '/' || !urlData.pathname.length ? 'index.html' : urlData.pathname;

  // if (req.url == '/') {
  //   filePath = path.join(__dirname, '..', 'public', 'index.html');
  // }
  // else {
  //   console.log('not root', req.url)
  const filePath = path.join(__dirname, '..', 'public', resFile);
  // }
  console.log(filePath)
  const extname = String(path.extname(filePath)).toLowerCase();

  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml'
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    console.log(err, content);
    if(err) {
      if(err.code == 'ENOENT') {
        res.writeHead(400, { 'Content-Type': 'text/plain'});
        res.end("File not Found");
      }
      else {
        res.writeHead(500);
        res.end(`$Server error ${err.code}`);
      }
    }
    else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
