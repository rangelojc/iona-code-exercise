import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CatCards = ({ catList, viewCat }: any) => {

  const getCatInfo = (cat: any, key: string) => {
    return cat?.breeds?.[0]?.[key] || 'NULL'
  }

  return (
    <div className="cat-browser-cards">
      {
        catList.map((cat: any) => <>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Img src={cat.url} alt={getCatInfo(cat, 'name')}></Card.Img>
              <Button variant="primary" onClick={() => { viewCat(cat.id) }}>View Details</Button>
            </Card.Body>
          </Card>
        </>)
      }

      {/* Design workaround for last row */}
      <Card className='empty'></Card>
      <Card className='empty'></Card>
      <Card className='empty'></Card>
      <Card className='empty'></Card>
    </div>
  )
}

export default CatCards