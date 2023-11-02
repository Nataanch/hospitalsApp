/**   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::45a3:febd:a474:bc10%4
   IPv4 Address. . . . . . . . . . . : 172.20.10.3
   Subnet Mask . . . . . . . . . . . : 255.255.255.240
   Default Gateway . . . . . . . . . : 172.20.10.1 */

//hospitals?filters[categories][Name][$in]=Dentist&spopulate=*



/**  Connection-specific DNS Suffix  . :
   IPv6 Address. . . . . . . . . . . : 2a00:a041:3967:2100:c560:80e1:62b6:9ac6
   Temporary IPv6 Address. . . . . . : 2a00:a041:3967:2100:1dce:9729:f058:9aa9
   Link-local IPv6 Address . . . . . : fe80::45a3:febd:a474:bc10%4
   IPv4 Address. . . . . . . . . . . : 192.168.1.15
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : fe80::dafb:5eff:fe17:a08e%4
                                       192.168.1.1 */

//ttp://localhost:1337/api/hospitals?filters[category][Name][$in]=%22Dentist%22&spopulate=*
//const BASE_URL = 'http://172.20.10.3:1337/api/'
const BASE_URL = 'http://192.168.1.15:1337/api/'
//192.168.1.1
export const DEVELOP_TOKEN='f1950ce55080155490ba53fb63915fb72e76e0ae284c7623a35a025cfccfee8a957175539de22593af228c2c706c76c2e10e6b6b78dc6f9a880c5e0cbb90a1fc014303183bdd3575a0c312292b0c0dd6c561d9f5861c6f352046e4604b3b08eef2b9d8a8ec6b1d8d16b6d6c0763a6129f4b561d907d97483f01148fda7158b93'
import axios from "axios";
const AxioInstance = axios.create({
    baseURL:BASE_URL,
    headers:{
        'Authorization':'Bearer '+ DEVELOP_TOKEN
    }
})

const getSlider =() => AxioInstance.get("sliders?populate=*");

const getCategories = ()=> AxioInstance.get("categories?populate=*")

const getPremiumHospitals = ()=> AxioInstance.get("hospitals?filters[Premium][$eq]=true&populate=*")
                                 //http://localhost:1337/api/hospitals?filters[categories][name][$in]=%22Dentist%22&populate=*
const getHospitalsByCategory = (category)=> AxioInstance.get("hospitals?filters[categories][Name][$in]="+category+"&populate=*")

// const getDoctorsByCategory =(category)=>AxioInstance.get("doctors?filters[category][$eq]="+category+"&populate=*")
const getDoctorsByCategory =(category)=>AxioInstance.get("doctors?filters[category][Name][$eq]="+category+"&populate=*")
const getAllDoctors = ()=> AxioInstance.get("doctors?populate=*")

const createAppointment=(data)=> AxioInstance.post(
    "appointments", data
)
const getAllHospital=()=> AxioInstance.get("hospitals?populate=*")

const getUserAppointments =(email)=>AxioInstance.get("appointments?filters[email][Name][$eq]="+email+"&populate=*")



export default{
    getSlider,
    getCategories,
    getPremiumHospitals,
    getHospitalsByCategory,
    getDoctorsByCategory,
    getAllDoctors,
    createAppointment,
    getAllHospital,
    getUserAppointments
}
