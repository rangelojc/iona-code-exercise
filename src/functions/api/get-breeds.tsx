import axios, { AxiosResponse } from "axios"
import { handleResponse } from "../utils/apiResponseHandler"

/*
    API call to thecatapi breed list
    Parameters: none
*/
const getBreeds = async (): Promise<any> => {
    const url = `https://api.thecatapi.com/v1/breeds`
    const errorMessage = 'Apologies but we could not load new breeds for you at this time! Miau!'

    try {
        let response: AxiosResponse = await axios.get(url)
        //console.log('getBreeds:', response)

        return handleResponse(response, errorMessage)
    } catch (ex: any) {
        console.error('An error has been encountered!', ex)
        return handleResponse({ status: 500 }, errorMessage)
    }
}

export default getBreeds