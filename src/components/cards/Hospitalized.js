import React from 'react'
import Colors from '../../utils/colors'
import { Card } from 'react-bootstrap'

export default function Hospitalized({ total, icu }) {
  return (
    <Card bg="dark" text="white" style={{ minHeight: '100%' }}>
      <Card.Header><h3>COVID-19 Hospitalized Patients</h3></Card.Header>
      <Card.Body style={{ textAlign: 'center' }}>
        <h1>{total}</h1>
        <h6>Total Confirmed and Suspected</h6>
        <h1 style={{ color: Colors.RED }}>{icu}</h1>
        <h6>Currently in ICU</h6>
      </Card.Body>

    </Card>
  )
}
