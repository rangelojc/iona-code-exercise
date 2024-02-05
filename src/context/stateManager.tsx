import { createContext, useState } from "react";
import { IStateManager, IStateManagerProvider } from "./stateInterface";

const StateManager = createContext<IStateManager>({
    selectionId: '',
    selectionList: []
})

const StateManagerProvider = ({ children }: IStateManagerProvider) => {
    const [selectionId, setSelectionId] = useState<string>('')
    const [selectionList, setSelectionList] = useState<any[]>([])

    return (
        <StateManager.Provider value={{
            selectionId,
            selectionList,

            setSelectionId,
            setSelectionList
        }}>
            {children}
        </StateManager.Provider>
    )
}

export { StateManager, StateManagerProvider }