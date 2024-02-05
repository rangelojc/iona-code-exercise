import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { StateManager } from '../context/stateManager';

const CatBrowser = () => {
    const state = useContext(StateManager)

    return (
        <>
            <Form.Select aria-label="Select breed">
                <option>Select breed</option>
            </Form.Select>

            <section className='cat-browser'>
                <p>No cats available</p>
            </section>


        </>
    )
}

export default CatBrowser