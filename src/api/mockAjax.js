import axios from 'axios';


// 发送接口请求
axios.get('/mock/test')
  .then(response => {
    const data = response.data;
    console.log(data);
    // 处理获取到的 Mock 数据
   
  })
  .catch(error => {
        console.error(error);
    // 处理错误
  });
