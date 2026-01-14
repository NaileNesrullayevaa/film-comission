import axios from "axios"

const getFile=()=>{
    return axios.get('https://filmcback.culture.az/api/file')
}
export default getFile