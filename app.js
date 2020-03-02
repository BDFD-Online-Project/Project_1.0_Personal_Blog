const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  console.log('method: ', req.method); //GET;
  const url = req.url; //获取完整的URL
  console.log('url', url);
  req.query = querystring.parse(url.split('?')[1]); //解析 querystring
  console.log('req.query', req.query);

  res.end(JSON.stringify(req.query)); //将querystring返回
});

server.listen(3000);
console.log('node run on localhost:3000...');
