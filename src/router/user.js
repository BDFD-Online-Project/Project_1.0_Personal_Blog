const handleUserRouter = (req, res) => {
  const method = req.method; //GET POST

  //登入界面
  if (method === 'POST' && req.path === '/api/user/login') {
    return {
      msg: '这是登入的接口'
    };
  }
};

module.exports = handleUserRouter;
