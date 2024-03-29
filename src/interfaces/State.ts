export interface IStateManagerBrowserConfig {
    page: number
    isLastPage: boolean
}

export interface IStateManager {
    breedId: string
    breedList: any[]
    catList: any[]
    catId: string
    browser: IStateManagerBrowserConfig

    setBreedId?: any
    setBreedList?: any
    setCatId?: any
    setCatList?: any
    setPage?: any
    setLastPage?: any
    resetBrowser?: any
}

export interface IStateManagerProvider {
    children: any
}