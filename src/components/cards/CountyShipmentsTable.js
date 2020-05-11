import React from 'react'
import PPEShipmentsTable from '../PPEShipmentsTable'
import { Card } from 'react-bootstrap'

export default function ShipmentsTable({counties, shipments}) {
  return (
    <Card bg="dark" text="white" style={{ height: '100%', minWidth: '100%' }}>
    <Card.Header><h3>Total Shipments by County</h3></Card.Header>
    <Card.Body>
      <div>
        <PPEShipmentsTable counties={counties} shipments={shipments}/>
      </div>
    </Card.Body>
  </Card>
  )
}
