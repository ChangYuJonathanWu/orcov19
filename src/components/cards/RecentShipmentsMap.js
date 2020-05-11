import React, { useEffect, useState } from 'react'
import CountyMap from '../CountyMap'
import Loading from '../Loading'
import { Card } from 'react-bootstrap'

export default function RecentShipmentsMap({ zoom, center, shipmentDetails }) {
  const [countyLines, setCountyLines ] = useState(null)
  const [ready, setReady] = useState(false)

  // Getting the list GeoJSON defining counties in Oregon. While MapBox supports directly adding URL's as layer sources,
  // I've factored it out here to reduce time to first map load and add a loading animation as it's a larger query.
  useEffect(() => {
    fetch(`${process.env.REACT_APP_OREGON_COUNTIES}`)
      .then(res => res.json())
      .then(result => {
        setCountyLines(result)
        setReady(true)
      })
  }, [])
  return (
    <Card bg="dark" text="white" style={{ paddingBottom: '0.65em', minWidth: '100%', height: '100%' }}>
      <Card.Header>
        <h3>Recent Supply Shipments</h3>
      </Card.Header>
      <Card.Body style={{padding: 0}}>
        { ready ? <CountyMap countyLines={countyLines} zoom={zoom} center={center} shipmentDetails={shipmentDetails}/> : <Loading /> }
      </Card.Body>
    </Card>
  )
}

export const MemoizedRecentShipmentsMap = React.memo(RecentShipmentsMap)
