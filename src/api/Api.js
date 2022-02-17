import axios from 'axios'

const url = "https://raw.githubusercontent.com/akshita151199/APIs/main/data"

export const getData = async () => {
    try {
        const { data } = await axios.get(url)
        return await data;
    } catch (error) {
        console.log(error)
    }

}


