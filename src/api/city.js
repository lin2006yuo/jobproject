import axios from 'axios'

export function getProvince() {
    let url = 'https://restapi.amap.com/v3/config/district'
    return axios.get(url, {
        params: {
            key: 'c72b87e93517a0f814afe36a10d6bcfc',
            subdistrict: 1,
            extensions: 'base'
        } 
    }).then(res => {
        return Promise.resolve(res.data)
    })
}

export function getCity(adcode) {
    let url = 'https://restapi.amap.com/v3/config/district'
    return axios.get(url, {
        params: {
            key: 'c72b87e93517a0f814afe36a10d6bcfc',
            subdistrict: 1,
            keywords: adcode,
            extensions: 'base'
        }
    }).then(res => {
        return Promise.resolve(res.data)
    })
}