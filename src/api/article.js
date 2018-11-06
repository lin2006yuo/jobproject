import axios from 'axios'
import qs from 'qs'

//拦截器
axios.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if(config.method === 'post') {
        config.data = qs.stringify( {
            ...config.data
        })
    } 
    return config;
  }, function (error) {
    loadinginstace.close()
    return Promise.reject(error);
  })



export function getArticle(type, page, topic){
    let url = 'https://angelswing.com.cn/angelproject/public/angeloffice/py/get_angel_article_list'
    return axios.post(url, {
        type: type,
        page: page,
        baby_state: topic
    }).then(res => {
        return Promise.resolve(res.data)
    })
}