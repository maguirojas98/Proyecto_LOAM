import axios from 'axios';


//URLs
const URLComenarios= 'http://192.168.0.108/PROYECTO_FINAL/api/route.php?option=list_comentarios';

//llamada a la api
const apiCall = async (endpoint)=>{
    const options = {
        method: 'GET',
        url: endpoint,
    };

    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ',error);
        return {};
    }
}

// screens api
export const fetchComentarios = ()=>{
    return apiCall(URLComenarios);
}