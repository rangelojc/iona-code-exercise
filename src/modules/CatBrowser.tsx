import { useContext, useEffect } from 'react';
import { StateManager } from '../context/stateManager';

import Shadow from '../components/Shadow';
import { Button } from 'react-bootstrap';

import CatSelect from './CatSelect';
import CatCards from './CatCards';

import useCatBrowserController from '../functions/controller/useCatBrowserController'

const CatBrowser = () => {
  const state = useContext(StateManager)
  const controller = useCatBrowserController()

  return (
    <>
      <CatSelect breedList={state.breedList} onChange={controller.setBreed} />

      <section className='cat-browser'>
        <Shadow show={state.catList.length <= 0}>
          <p>No cats available</p>
        </Shadow>

        <div className="cat-browser-cards">
          <Shadow show={state.catList.length > 0}>
            <CatCards catList={state.catList} viewCat={controller.viewCat} />
          </Shadow>
        </div>

        <Shadow show={state.catList.length > 0}>
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
      </section>
    </>
  )
}

export default CatBrowser