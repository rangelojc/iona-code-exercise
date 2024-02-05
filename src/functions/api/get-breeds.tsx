import axios, { AxiosResponse } from "axios"

/*
    API call to thecatapi breed list
    Parameters: none
*/
const getBreeds = async (): Promise<any> => {
    const url = `https://api.thecatapi.com/v1/breeds`
    try {
        let response: AxiosResponse = await axios.get(url)
        return response.data
    } catch (ex: any) {
        console.error(ex)
        return ex
    }
}

export default getBreeds