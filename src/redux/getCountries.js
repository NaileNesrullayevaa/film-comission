import axios from "axios"

const getCountries=()=>{
    return axios.get('https://filmcback.culture.az/api/countries')
}
export default getCountries