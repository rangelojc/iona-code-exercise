export interface ICatBrowserControllerReturn {
    buttonLoading: boolean

    loadBreeds: () => void
    loadCats: (breedId: string, page: number) => Promise<void>
    loadMoreCats: () => void
    setBreed: (event: any) => void
    viewCat: (catId: string) => void
}