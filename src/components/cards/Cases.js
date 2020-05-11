import React from 'react'
import Colors from '../../utils/colors'
import { Card } from 'react-bootstrap'

export default function Cases({ total, deaths, negative }) {
  return (
    <Card bg="dark" text="white" style={{ textAlign: 'center' }}>
      <Card.Header><h3>Cases</h3></Card.Header>
      <Card.Body>
        <h1>{total ? total : '-'}</h1>
        <h4>Total</h4>
        <h1 style={{ color: Colors.RED }}>{deaths ? deaths : '-'}</h1>
        <h4>Deaths</h4>
        <h1>{negative ? negative : '-'}</h1>
        <h4>Tested (Negative)</h4>
      </Card.Body>
    </Card>
  )
}
