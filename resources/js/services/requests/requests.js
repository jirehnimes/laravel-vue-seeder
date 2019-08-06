import Admin from '../../models/admin.js';

const ROOT_API = '/api';
const ADMIN_ROOT_API = ROOT_API + '/admin';

class RequestsServices {
    get(endpoint, data) {
        let _url = ROOT_API + endpoint

        return this._get(_url, data)
    }

    post(endpoint, data) {
        let _url = ROOT_API + endpoint

        return this._post(_url, data)
    }

    getAdmin(endpoint, data) {
        let _url = ADMIN_ROOT_API + endpoint

        return this._get(_url, data, Admin.LEVEL)
    }

    postAdmin(endpoint, data) {
        let _url = ADMIN_ROOT_API + endpoint

        return this._post(_url, data, Admin.LEVEL)
    }

    _get(_url, data, level = 1) {
        let config = {}

        if (level === Admin.LEVEL) {
            config = this._getConfigAdmin()
        }

        return axios.get(_url, data, config)
    }

    _post(_url, data, level = 1) {
        let config = {}

        if (level === Admin.LEVEL) {
            config = this._getConfigAdmin()
        }

        return axios.post(_url, data, config)
    }

    _getConfigAdmin() {
        let config = {
            headers: {}
        }
        
        config['headers'][Admin.REQUEST_HEADER] = process.env.MIX_ADMIN_AUTHORIZATION_KEY

        return config
    }
}

export default RequestsServices