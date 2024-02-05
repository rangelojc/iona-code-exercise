import { useContext, useEffect, useState } from 'react';
import { StateManager } from '../../context/stateManager';

import getCatsByBreed from '../api/get-cats-by-breed';
import getCats from '../api/get-breeds';
import { ICatBrowserControllerReturn } from '../../interfaces/CatBrowserController'

/*
    Primary hook used to control cat browser page state

    Parameters: none
    Return: ICatBrowserReturn interface
*/

const useCatBrowserController = (): ICatBrowserControllerReturn => {
    const state = useContext(StateManager)

    const [buttonLoading, setButtonLoading] = useState<boolean>(false)

    useEffect(() => {
        loadBreeds()
    }, [])

    useEffect(() => {
        loadCats(state.breedId)
    }, [state.breedId, state.browser])

    const loadBreeds = async () => {
        const response = await getCats()
        state.setBreedList(response)
    }

    const loadCats = async (breedId: string) => {
        if (state.breedId) {
            const newCats = await getCatsByBreed({ breedId, page: state.browser?.page || 1 })
            state.setCatList([...state.catList, ...newCats])
            setButtonLoading(false)
        }
    }

    const loadMoreCats = () => {
        setButtonLoading(true)
        const currentPage = state.browser.page;
        state.setPage(currentPage + 1)
    }

    const setBreed = (event: any) => {
        state.setBreedId(event.target.value)
    }

    const viewCat = (catId: any) => {
        state.setCatId(catId)
    }

    return {
        buttonLoading,

        loadBreeds,
        loadCats,
        loadMoreCats,
        setBreed,
        viewCat
    }
}

export default useCatBrowserController