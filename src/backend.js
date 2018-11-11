import axios from 'axios'

let $backend = axios.create({
  baseURL: 'https://afc78029-3724-48da-950b-6af0c707d785.mock.pstmn.io',
  timeout: 5000,
  headers: {'Content-Type': 'application/json'}
})

// Response Interceptor to handle and log errors
$backend.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // eslint-disable-next-line
  console.log(error)
  return Promise.reject(error)
})

$backend.$fetchFilters = () => {
    return $backend.get(`/filtersa`)
        .then(response => response.data)
}

$backend.$postMessage = (payload) => {
    return $backend.post(`messages/`, payload)
        .then(response => response.data)
}

$backend.$deleteMessage = (msgId) => {
    return $backend.delete(`messages/${msgId}`)
        .then(response => response.data)
}

export default $backend
