import { createContext, useState } from "react";
import { IStateManager, IStateManagerProvider } from "./stateInterface";

const StateManager = createContext<IStateManager>({
    breedId: '',
    breedList: [],
    catList: [],
    catId: ''
})

const StateManagerProvider = ({ children }: IStateManagerProvider) => {
    const [breedList, setBreedList] = useState<any[]>([])
    const [breedId, setBreedId] = useState<string>('')
    const [catList, setCatList] = useState<any[]>([])
    const [catId, setCatId] = useState<string>('')

    return (
        <StateManager.Provider value={{
            breedId,
            breedList,
            catId,
            catList,

            setBreedList,
            setBreedId,
            setCatList,
            setCatId
        }}>
            {children}
        </StateManager.Provider>
    )
}

export { StateManager, StateManagerProvider }