import axios, { AxiosResponse } from "axios"
import { handleResponse } from "../utils/apiResponseHandler"

/*
    API call to thecatapi cat list
    Parameters: IGetCatsByBreed interface
*/

interface IGetCatsByBreed {
    breedId: string
    page: number
}

const getCatsByBreed = async (payload: IGetCatsByBreed): Promise<any> => {
    //const apiKey = 'live_iuTAmG2u8Pm54cEQcKcBMdHPvkyNxyMAhaTeNzYd2SzfBLMD1WKf2CQ9ZukIKkgh'
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${payload.breedId}&page=${payload.page || 1}`
    const errorMessage = 'Apologies but we could not load new cats for you at this time! Miau!'

    try {
        let response: AxiosResponse = await axios.get(url)
        //console.log('getCatsByBreed:', response)
        return handleResponse(response, errorMessage)
    } catch (ex: any) {
        console.error('An error has been encountered!', ex)
        return handleResponse({ status: 500 }, errorMessage)
    }
}

export default getCatsByBreed