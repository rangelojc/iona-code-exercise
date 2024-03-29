import Form from 'react-bootstrap/Form';

const CatSelect = ({ breedList, onChange, selectedBreed }: any) => {
  return (
    <>
      <h6>Breed</h6>
      <Form.Select aria-label="Select breed" onChange={onChange} className='cat-browser-select'>
        <option>Select breed</option>
        {
          breedList.map((item: any) =>
            <option value={item.id} selected={selectedBreed === item.id ? true : false}>{item.name}</option>
          )
        }
      </Form.Select>
    </>
  )
}


export default CatSelect