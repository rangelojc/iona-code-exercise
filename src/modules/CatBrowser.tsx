import { useContext, useEffect } from 'react';
import { StateManager } from '../context/stateManager';
import { useNavigate } from 'react-router-dom';

import Shadow from '../components/Shadow';
import { Button } from 'react-bootstrap';

import CatSelect from './CatSelect';
import CatCards from './CatCards';

import useCatBrowserController from '../functions/controller/useCatBrowserController'

const CatBrowser = (props: any) => {
  const state = useContext(StateManager)
  const controller = useCatBrowserController()
  const navigate = useNavigate()

  const viewCat = (catId: number) => {
    navigate(`/iona-cat-browser/${catId}`);
  }

  return (
    <>
      <CatSelect breedList={state.breedList} onChange={controller.setBreed} />

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