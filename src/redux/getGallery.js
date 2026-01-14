import axios from "axios"

const getGallery=()=>{
    return axios.get('https://filmcback.culture.az/api/gallery')
}
export default getGallery