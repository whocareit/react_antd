import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';

// jsonp deal use Promise
export default class Axios {

    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, (err, response) => {
                if (response.status == 'success') {
                    resolve(response)
                } else {
                    reject(response.message)
                }
            })
        })
    }

    static ajax(options) {
        let baseUrl = 'https://easy-mock.com/mock/5d6fbb3ab3db060775b1f0dc';
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseUrl,
                timeout: 5000,
                params: (options.data && options.data.params ) || ''
            }).then((response) => {
                if(response.status == '200'){
                    let res = response.data;
                    if(res.code == 0){
                        resolve(res)
                    }else{
                        Modal.info({
                            title: '提示',
                            content: res.message
                        })
                    }
                }else{
                    reject(response.data)
                }
            })
        })
    }

    static ajaxs(options){
        let baseUrl = 'https://easy-mock.com/mock/5d6fbb3ab3db060775b1f0dc';
        return new Promise((resolve,reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseUrl,
                timeout: 5000,
                params: (options.data && options.data.params ) || ''
            }).then((response) => {
                if(response.status == 200){
                    let res = response.data;
                    if(res.data.code == 0){
                        resolve(res.data);
                    }
                }else{
                    reject(response.data);
                }
            })
        })
    }
}