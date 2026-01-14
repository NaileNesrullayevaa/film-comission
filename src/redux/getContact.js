import axios from "axios"

const getContact=()=>{
    return axios.get('https://filmcback.culture.az/api/contact-us')
}
export default getContact