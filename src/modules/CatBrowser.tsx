import { useContext, useEffect } from 'react';
import { StateManager } from '../context/stateManager';
import Form from 'react-bootstrap/Form';
import Shadow from '../components/Shadow';
import getCatsByBreed from '../functions/api/get-cats-by-breed';
import getCats from '../functions/api/get-breeds';

const CatBrowser = () => {
  const state = useContext(StateManager)

  useEffect(() => {
    loadBreeds()
  }, [])

  useEffect(() => {
    loadCats(state.breedId)
  }, [state.breedId])

  const loadBreeds = async () => {
    const response = await getCats()
    state.setBreedList(response)
  }

  const loadCats = async (breedId: string) => {
    const response = await getCatsByBreed({ breedId })
    state.setCatList(response)
  }

  const setBreed = (event: any) => {
    state.setBreedId(event.target.value)
  }

  return (
    <>
      <CatSelect selectionList={state.breedList} onChange={setBreed} />

      <section className='cat-browser'>
        <Shadow show={state.catList.length <= 0}>
          <p>No cats available</p>
        </Shadow>
        <Shadow show={state.catList.length > 0}>
          <CatItem />
        </Shadow>
      </section>
    </>
  )
}

const CatItem = ({ catInfo }: any) => {
  return (
    <>

    </>
  )
}

const CatSelect = ({ selectionList, onChange }: any) => {
  return (
    <>
      <h5>Breed</h5>
      <Form.Select aria-label="Select breed" onChange={onChange}>
        <option>Select breed</option>
        {
          selectionList.map((item: any) =>
            <option value={item.id}>{item.name}</option>
          )
        }
      </Form.Select>
    </>
  )
}

export default CatBrowser