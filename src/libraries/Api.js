import axios from 'axios';
import { getToken, getAuthToken, refreshToken } from './Auth';

export default class Api{

    constructor() {
        this.route = 'http://192.168.1.58:5000';
        this.call = this.call.bind(this);
    }

    get = async function(params) {
        let url = this.route + params.route;
        this.call('get', url, params);
    }
    post = async function(params) {
        let url = this.route + params.route;
        this.call('post', url, params);
    }
    put = async function(params) {
        let url = this.route + params.route;
        this.call('put', url, params);
    }
    delete = async function(params) {
        let url = this.route + params.route;
        this.call('delete', url, params);
    }

    call = async function(method, url, params) {
        getToken().then(token => {
            getAuthToken().then(auth => {

                if (token === null || auth === null) {
                    params.error(417);
                }
                else {
                    axios({
                        url: url,
                        method: method,
                        headers: {
                            token: token,
                            authtoken: auth,
                            'Content-Type': 'application/json'
                        },
                        data: JSON.stringify(params.data),
                        params: params.params
                    })
                    .then(resp => { params.success(resp); })
                    .catch(error => {
                        console.log(error)
                        if (error.response.status == 417) {
                            refreshToken(error.response.data.token, () => {
                                this.call(method, url, params);
                            })
                        }
                    })
                }

            })
        })
    }
}

