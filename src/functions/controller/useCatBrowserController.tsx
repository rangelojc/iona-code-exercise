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

    //Load breeds on initialization of hook
    useEffect(() => {
        loadBreeds()
    }, [])

    //Load cat list based on changes in breedId or browser page config
    useEffect(() => {
        loadCats(state.breedId, state.browser.page)
    }, [state.breedId, state.browser.page])

    //Load breed list for breed select box
    const loadBreeds = async () => {
        const response = await getCats()
        state.setBreedList(response.data)
    }

    //Load cat list based on breedid selected, show error if found
    const loadCats = async (breedId: string, page: number) => {
        if (state.breedId) {
            const response = await getCatsByBreed({ breedId, page })
            const newCats = response.data

            if (!response.errorMessage) {
                state.setCatList([...state.catList, ...newCats])
                state.setLastPage(newCats.length < 10 ? true : false)
                setButtonLoading(false)
            }
            else {
                alert(response.errorMessage)
                setButtonLoading(false)
            }
        }
    }

    //Load more cats by adding +1 page in state and letting useEffect read changes
    const loadMoreCats = () => {
        setButtonLoading(true)
        const currentPage = state.browser.page;
        state.setPage(currentPage + 1)
    }

    //Set breed id based on selection letting useEffect read changes
    const setBreed = (breedId: string) => {
        state.setCatList([])
        state.resetBrowser()
        state.setBreedId(breedId)
    }

    //Set cat id based on cat details clicked
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