import axios, { AxiosResponse } from "axios"

/*
    API call to thecatapi cat list by breed id
    Parameters: IGetCatsByBreed interface
*/

interface IGetCatsByBreed {
    breedId: string
    page: number
}

const getCatsByBreed = async (payload: IGetCatsByBreed): Promise<any> => {
    const apiKey = 'live_iuTAmG2u8Pm54cEQcKcBMdHPvkyNxyMAhaTeNzYd2SzfBLMD1WKf2CQ9ZukIKkgh'
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${payload.breedId}&api_key=${apiKey}&page=${payload.page || 1}`

    try {
        let response: AxiosResponse = await axios.get(url)
        return response.data
    } catch (ex: any) {
        console.error(ex)
        return ex
    }
}

export default getCatsByBreed