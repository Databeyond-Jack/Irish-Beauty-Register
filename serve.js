// Minimal static server for the register demo. No dependencies.
//   node serve.js                -> http://localhost:5173 (this computer only)
//   HOST=0.0.0.0 node serve.js   -> also reachable from a phone on the same Wi-Fi
// Installing as an app and offline mode need https or localhost, so on a phone
// over plain http the app works in the browser but cannot be installed.
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT) || 5173;
const host = process.env.HOST || '127.0.0.1';
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.css': 'text/css; charset=utf-8',
  '.ico': 'image/x-icon'
};

http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end('Bad request'); return; }
  if (pathname.endsWith('/')) pathname += 'index.html';

  const file = path.normalize(path.join(root, pathname));
  if (!file.startsWith(root + path.sep) || path.basename(file) === 'serve.js') {
    res.writeHead(404, { 'Content-Type': 'text/plain' }).end('Not found');
    return;
  }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain' }).end('Not found'); return; }
    res.writeHead(200, {
      'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff'
    }).end(data);
  });
}).listen(port, host, () => {
  console.log(`Register demo running at http://localhost:${port}` + (host === '0.0.0.0' ? ' (also on this computer\'s network address)' : ''));
});
