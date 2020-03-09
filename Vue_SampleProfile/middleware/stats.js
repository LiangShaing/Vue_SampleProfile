import axios from 'axios'

export default function ({ route }) {
    console.log('middleware',route);
}

// export default function ({ store, redirect }) {
//     console.log('middleware',store.state);
// //   return axios.post('http://my-stats-api.com', {
// //     url: route.fullPath
// //   })
// }