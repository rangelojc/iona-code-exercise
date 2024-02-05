import axios, { AxiosResponse } from "axios"

const getCats = async (): Promise<any> => {
    const url = `https://api.thecatapi.com/v1/breeds`
    try {
        let response: AxiosResponse = await axios.get(url)
        return response.data
    } catch (ex: any) {
        console.error(ex)
        return ex
    }
}

export default getCats