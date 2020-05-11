import React from 'react'
import Colors from '../../utils/colors'
import { Card } from 'react-bootstrap'

export default function LastUpdated({ lastUpdated }) {
  return (
    <Card bg="dark" text="white" style={{ minWidth: '100%', }}>
      <Card.Body style={{ padding: '5px' }}>
        Last Updated: <b>{new Date(lastUpdated * 1000).toLocaleString("en-us")}</b> -
        All data sources are publicly available and listed <a href="/about" style={{ color: Colors.RED }}>here. </a>  
        Please read <a href="/about" style={{ color: Colors.RED }}>disclaimer</a> before using.
    </Card.Body>
    </Card>
  )
}
