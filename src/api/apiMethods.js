const tempToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYwNTYyNzliODQ4NmNmMmZjNzIxYTFmNzRlODQ3YTgxYmZjMDdjMmNhYWVmNTJjZmM1OThjNDhmZjVhMDhkNWFmNTEwMzQwYjhmMjlhZjRkIn0.eyJhdWQiOiIyIiwianRpIjoiZjA1NjI3OWI4NDg2Y2YyZmM3MjFhMWY3NGU4NDdhODFiZmMwN2MyY2FhZWY1MmNmYzU5OGM0OGZmNWEwOGQ1YWY1MTAzNDBiOGYyOWFmNGQiLCJpYXQiOjE1MTg2NzU0NTQsIm5iZiI6MTUxODY3NTQ1NCwiZXhwIjoxNTUwMjExNDU0LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.oo7Ki0f9nhTNogQ2x5p56qxMAwZbcL7eOparHLvyFVoHAkSOcO8vXa1zNjtZHcZ5eQcXgIzuJvsgcdHh7H2F-u1xqsOG7DEOyMfG1z57IF1l48b7ZT_naNufjeT2XLEcjeTlZB6vp93K4_YN0LiHvaKpASlfwavd19aszwlWych3vNdK_5Ul7qDrURyztwaTmx-VjVfma-gySGf6GDqqSJDtK1z5AQ1-EEOApevMGjnRTntAkOHbpmfOSltvv9A0Ly6M6h7-jDuev_Ky4QfUwlHPx09-fR0HKODX05-uKf9I03uru2nQ71oJNm_V3KKwHyyvEeQgTCNIspVGmcB-J0AN320jIvpk8d3ox_jhoV1jW5BrUSbwwODj4fsSlp8DTPQN9kM1pJc4zmEtBcvvo1vYc2zjFSU24CUrorWQmHwB6rQszpZkMS9nA5eR88gGs3UlnUlBzm2j__RhDe5MTmcITz8c6pwhBbjGL7ml2tNj_J5IpUuE1Fb2E6tCQap6WtSz-DEJWdnyl3i4jd32VSBXZMlKsF0_hf0B_BGwIvaHYNBOTvWI-bXYRBvTm74oF6AHgTOFN5cKErbdo-YzisNmDwkR0SPI2kN2vG8XzmvX1b4OktBVPw2_GVYg_0IxN1vu0ZQVz1NVA8MdRg80V_sM0yXSC6nPHHJWSnibXyo';

//-- header options common fileds
const getHeaderOptions = (token) => ({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token ? tempToken : process.env.REACT_APP_SECRET_KEY,
});

export const getMethod = (url) => {
    return fetch( process.env.REACT_APP_ACCOUNTING_BASE_URL + url, {
        method: "GET",
        headers: getHeaderOptions(tempToken),
        // body: JSON.stringify(info)
    })
        .then(res => res.json())
}


export const postMethod = (url, passData) => {
    return fetch(process.env.REACT_APP_ACCOUNTING_BASE_URL + url, {
        method: "POST",
        headers: getHeaderOptions(tempToken),
        body: JSON.stringify(passData)
        // body: passData
    })
        .then(res => res.json())
}


export const postFileMethod = (url, passData) => {
    return fetch(process.env.REACT_APP_ACCOUNTING_BASE_URL + url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'x-access-token': localStorage.getItem('accessToken')
        },
        body: passData
    })
        .then(res => res.json())
}


export const putMethod = (url, passData) => {
    return fetch(process.env.REACT_APP_ACCOUNTING_BASE_URL + url, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('accessToken')
        },
        body: JSON.stringify(passData)
    })
        .then(res => res.json())
}


export const deleteMethod = (url, passData) => {
    return fetch(process.env.REACT_APP_ACCOUNTING_BASE_URL + url, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('accessToken')
        },
        body: JSON.stringify(passData)
    })
        .then(res => res.json())
}