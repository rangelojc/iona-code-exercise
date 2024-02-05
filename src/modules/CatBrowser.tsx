import { useContext, useEffect, useState } from 'react';
import { StateManager } from '../context/stateManager';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Shadow from '../components/Shadow';
import { Button } from 'react-bootstrap';

import CatSelect from './CatSelect';
import CatCards from './CatCards';

import useCatBrowserController from '../functions/controller/useCatBrowserController'

const CatBrowser = (props: any) => {
  const state = useContext(StateManager)
  const controller = useCatBrowserController()
  const navigate = useNavigate()
  const [searchParams, setSearchParams]: any = useSearchParams()
  const [paramsBreedId, setParamsBreedId] = useState(searchParams.get("breedId") || "");

  //Use query params to set breed id to state
  useEffect(() => {
    if (state.breedList.length > 0) state.setBreedId(paramsBreedId)
  }, [state.breedList, paramsBreedId])

  //handle change breed and clear search params
  const changeBreed = (event: any) => {
    const breedId: string = event?.target.value
    setSearchParams({})
    controller.setBreed(breedId)
  }

  //navigate to cat view page
  const viewCat = (catId: number) => {
    navigate(`/iona-code-exercise/${catId}`, { state: { breedId: state.breedId } });
  }

  return (
    <>
      <CatSelect breedList={state.breedList} onChange={changeBreed} selectedBreed={paramsBreedId} />

      <section className='cat-browser'>

        <Shadow show={state.catList.length <= 0}>
          <p>No cats available</p>
        </Shadow>

        <Shadow show={state.catList.length > 0}>
          <CatCards catList={state.catList} viewCat={viewCat} />
        </Shadow>

        {/* Show button only if there is a list of cats and it isn't the last page  */}
        <Shadow show={state.catList.length > 0 && !state.browser.isLastPage}>
          <Button
            variant="primary"
            className='cat-browser-more-btn'
            size='lg'
            onClick={controller.loadMoreCats}
            disabled={controller.buttonLoading ? true : false}
          >
            <Shadow show={!controller.buttonLoading}>
              Load More
            </Shadow>
            <Shadow show={controller.buttonLoading}>
              Loading Cats...
            </Shadow>
          </Button>
        </Shadow>

        <Shadow show={state.browser.isLastPage}>
          <p style={{ width: '100%', textAlign: 'center' }}>You have reached the end of the list.</p>
        </Shadow>
      </section >
    </>
  )
}

export default CatBrowser