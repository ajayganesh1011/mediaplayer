import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className="container-fluid p-5">
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            <h1>Media Player</h1>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, vero. Qui, suscipit, reprehenderit possimus quos quisquam cum,
              quibusdam numquam maxime magnam tempora aliquid saepe recusandae illo soluta exercitationem fugit veritatis. </p>
            <div className="d-grid">
              <Link to={'/dash'} className="btn btn-success">Let's Go</Link>
            </div>
          </Col>
          <Col>
            <img src="https://niceillustrations.com/wp-content/uploads/2020/12/Youtube-Studio-color-800px.png" className="img-fluid" alt="landing" />
          </Col>
        </Row>
      </div>

      <div className="container-fluid p-5 mt-3">
        <h4 className="text-center mb-3">Features</h4>
        <div className="row justify-content-around">

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif" />
            <Card.Body>
              <Card.Title>Simple Upload</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31a97258737059.5a07705b4b565.gif" />
            <Card.Body>
              <Card.Title>Watch Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/77098/screenshots/2485682/main-icons_2.gif" />
            <Card.Body>
              <Card.Title>Categorize Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>

      <div className="p-5 container-fluid">
        <Row>
          <Col md={8}>
            <h3>Simple And Faster</h3>
            <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, vero. Qui, suscipit, reprehenderit possimus quos quisquam cum,
              quibusdam numquam maxime magnam tempora aliquid saepe recusandae illo soluta exercitationem fugit veritatis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quasi, vero. Qui, suscipit, reprehenderit possimus quos quisquam cum,quibusdam numquam maxime magnam tempora aliquid saepe recusandae illo soluta exercitationem fugit veritatis.
            </p>
          </Col>
          <Col md={4}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/w7ejDZ8SWv8?si=Xm0gvh9Kalv13uDe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landing