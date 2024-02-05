class APIResponse {
    data: any
    errorMessage?: string

    constructor(data: any, errorMessage?: string) {
        this.errorMessage = errorMessage
        this.data = data
    }
}

export const handleResponse = (response: any, message?: string) => {
    if (response.status === 200) return new APIResponse(response.data)
    else return new APIResponse(response, message)
}