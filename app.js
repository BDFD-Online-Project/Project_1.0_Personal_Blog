const querystring = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRotuer = require('./src/router/user');

//用于处理post data

const serverHandle = (req, res) => {
  //设置返回格式
  res.setHeader('Content-type', 'application/json');
  const url = req.url;
  req.path = url.split('?')[0];

  //解析 query
  req.query = querystring.parse(url.split('?')[0]);

  //处理Blog&user路由
  const blogData = handleBlogRouter(req, res);
  if (blogData) {
    res.end(JSON.stringify(blogData));
    return;
  }

  const userData = handleUserRotuer(req, res);
  if (userData) {
    res.end(JSON.stringify(userData));
    return;
  }

  //为命中，返回404
  res.writeHead(404, { 'Content-type': 'text/plain' });
  res.write('404 NOT FOUND\n');
  res.end();
};

module.exports = serverHandle;
