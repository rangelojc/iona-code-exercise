import axios, { AxiosResponse } from "axios"
import { handleResponse } from "../utils/apiResponseHandler"

/*
    API call to thecatapi cat list
    Parameters: IGetCatById interface
*/

interface IGetCatById {
    catId: string
}

const getCatById = async (payload: IGetCatById): Promise<any> => {
    //const apiKey = 'live_iuTAmG2u8Pm54cEQcKcBMdHPvkyNxyMAhaTeNzYd2SzfBLMD1WKf2CQ9ZukIKkgh'
    const url = `https://api.thecatapi.com/v1/images/${payload.catId}`
    const errorMessage = 'Apologies but we could not load new cats for you at this time! Miau!'

    try {
        let response: AxiosResponse = await axios.get(url)
        //console.log('getCatById:', response)
        return handleResponse(response, errorMessage)
    } catch (ex: any) {
        console.error('An error has been encountered!', ex)
        return handleResponse({ status: 500 }, errorMessage)
    }
}

export default getCatById