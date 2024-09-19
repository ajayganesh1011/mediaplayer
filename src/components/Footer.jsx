import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='container-fluid bg-info p-5 mt-5'>
        <Row>
          <Col>
            <h3>MEDIA PLAYER</h3>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, vero. Qui, suscipit, reprehenderit possimus quos quisquam cum, quibusdam numquam maxime magnam tempora aliquid saepe recusandae illo soluta exercitationem fugit veritatis.</p>
          </Col>
          <Col>
            <h3>LINKS</h3>
            <div className='d-flex flex-column'>
              <Link to={'/'}>Landing</Link>
              <Link to={'/dash'}>Dashboard</Link>
              <Link to={'/his'}>Watch History</Link>
            </div>
          </Col>
          <Col>
            <h3>CONTACT US</h3>
            <p className='my-4'>mediaplayer2024@gmail.com</p>
            <textarea name="" className='form-control' id=''></textarea>
            <button className='btn btn-success mt-3'>Send</button>
          </Col>
        </Row>
        <h4 className='text-center'>Mediaplayer &copy; all rights reserved</h4>
      </div>
    </>
  )
}

export default Footer