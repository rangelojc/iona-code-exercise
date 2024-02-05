import axios, { AxiosResponse } from "axios"

const viewCat = async (headers: any, payload: any): Promise<any> => {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=` + payload.selectionId
    const config = {
        headers: headers
    }

    let response: AxiosResponse = await axios.get(
        url,
        config
    )

    return response
}

export default viewCat