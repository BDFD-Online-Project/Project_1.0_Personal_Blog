const http = require('http');
const querystring = require('querystring');

// const server = http.createServer((req, res) => {
//   console.log('method: ', req.method); //GET;
//   const url = req.url; //获取完整的URL
//   console.log('url', url);
//   req.query = querystring.parse(url.split('?')[1]); //解析 querystring
//   console.log('req.query', req.query);

//   res.end(JSON.stringify(req.query)); //将querystring返回
// });

// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     //req 数据格式
//     console.log('req connect-type: ', req.headers['content-type']);
//     //接受数据
//     let postData = '';
//     req.on('data', chunk => {
//       postData += chunk.toString();
//     });
//     req.on('end', () => {
//       console.log('postData', postData);
//       res.end('Hello World!');
//     });
//   }
// });

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];
  const query = querystring.parse(url.split('?')[1]);
  const content_type = req.headers['content-type'];
  //设置返回格式
  res.setHeader('Content-type', 'application/json');
  //定义返回数据
  const resData = {
    method,
    url,
    path,
    query,
    content_type
  };
  //返回
  if (method === 'GET') {
    res.end(JSON.stringify(resData));
  }
  if (method === 'POST') {
    let postData = '';
    req.on('data', chunk => {
      postData += chunk.toString();
    });
    req.on('end', () => {
      resData.postData = postData;
      //返回
      res.end(JSON.stringify(resData));
    });
  }
});

server.listen(3000);
console.log('node run on localhost:3000...');
