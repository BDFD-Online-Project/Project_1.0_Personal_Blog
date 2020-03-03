const getList = (author, keyword) => {
  //先返回假数据（格式是正确的）
  return [
    {
      id: 1,
      title: 'title 1',
      content: 'content 1',
      createTime: 1583253694353,
      author: 'zhangsan'
    },
    {
      id: 2,
      title: 'title 2',
      content: 'content 2',
      createTime: 1583253749398,
      author: 'lisi'
    }
  ];
};

const getDetail = id => {
  //先返回假数据（格式是正确的）
  return {
    id: 1,
    title: 'title 1',
    content: 'content 1',
    createTime: 1583253694353,
    author: 'zhangsan'
  };
};

module.exports = {
  getList,
  getDetail
};
