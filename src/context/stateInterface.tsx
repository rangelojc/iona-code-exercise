export interface IStateManager {
    breedId: string
    breedList: any[]
    catList: any[]
    catId: string

    setBreedId?: any
    setBreedList?: any
    setCatId?: any
    setCatList?: any
}

export interface IStateManagerProvider {
    children: any
}