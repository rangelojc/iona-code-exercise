import { createContext, useState } from "react";
import { IStateManager, IStateManagerProvider, IStateManagerBrowserConfig } from "../interfaces/State";

const STATE_DEFAULTS = {
    breedId: '',
    breedList: [],
    catList: [],
    catId: '',

    browser: {
        page: 1,
        isLastPage: false,
    }
}

const StateManager = createContext<IStateManager>(STATE_DEFAULTS)

const StateManagerProvider = ({ children }: IStateManagerProvider) => {
    const [breedList, setBreedList] = useState<any[]>(STATE_DEFAULTS.breedList)
    const [breedId, setBreedId] = useState<string>(STATE_DEFAULTS.breedId)
    const [catList, setCatList] = useState<any[]>(STATE_DEFAULTS.catList)
    const [catId, setCatId] = useState<string>(STATE_DEFAULTS.catId)
    const [browser, setBrowser] = useState<IStateManagerBrowserConfig>(STATE_DEFAULTS.browser)

    const setPage = (page: number) => {
        setBrowser({ ...browser, page })
    }

    const setLastPage = (isLastPage: boolean) => {
        setBrowser({ ...browser, isLastPage })
    }

    return (
        <StateManager.Provider value={{
            breedId,
            breedList,
            catId,
            catList,
            browser,

            setBreedList,
            setBreedId,
            setCatList,
            setCatId,
            setPage,
            setLastPage
        }}>
            {children}
        </StateManager.Provider>
    )
}

export { StateManager, StateManagerProvider }