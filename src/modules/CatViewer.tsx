import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import getCatById from '../functions/api/get-cat-by-id';
import Shadow from '../components/Shadow';

const CatViewer = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [data, setData] = useState<any>({})

  //Get query params and load cat details
  useEffect(() => {
    loadCat(params.catId)
  }, [params.catId])

  //Load cat details using query params
  const loadCat = async (catId?: string) => {
    const response = await getCatById({ catId: catId || '' })
    if (!response.errorMessage) setData(response.data)
    else alert(response.errorMessage)
  }

  const back = () => {
    navigate(`/iona-code-exercise`);
  }

  const getCatInfo = (key: string) => {
    return data?.breeds?.[0]?.[key] || 'NULL'
  }

  return (
    <section className="cat-viewer">
      <Card>
        <section className="cat-viewer-header">
          <Button className="cat-viewer-back-btn" variant="primary" onClick={back}>Back</Button>
        </section>

        <Shadow show={Object.keys(data).length > 0}>
          <section>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Img src={data.url}></Card.Img>
              <div className="cat-viewer-text">
                <Card.Title>{getCatInfo('name')}</Card.Title>
                <Card.Text className="cat-viewer-origin">Origin: {getCatInfo('origin')}</Card.Text>
                <Card.Text className="cat-viewer-temp">Temperament: {getCatInfo('temperament')}</Card.Text>
                <Card.Text className="cat-viewer-desc">{getCatInfo('description')}</Card.Text>
              </div>
            </Card.Body>
          </section>
        </Shadow>

        <Shadow show={Object.keys(data).length === 0}>
          <div className="cat-viewer-empty"></div>
        </Shadow>
      </Card>
    </section>
  )
}

export default CatViewer