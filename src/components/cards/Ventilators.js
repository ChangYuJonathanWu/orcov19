import React from 'react'
import Colors from '../../utils/colors'
import { Card } from 'react-bootstrap'

export default function Ventilators({ available, used }) {
  return (
    <Card bg="dark" text="white" style={{ minHeight: '100%' }}>
    <Card.Header><h3>Ventilators</h3></Card.Header>
    <Card.Body >
      <h1>{available}</h1>
      <h4>Available</h4>
      <h1 style={{ color: Colors.RED}}>{used}</h1>
      <h4>In use by COVID-19 patients</h4>
    </Card.Body>
  </Card>
  )
}
