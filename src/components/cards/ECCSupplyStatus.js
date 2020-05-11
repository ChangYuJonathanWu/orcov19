import React from 'react'
import ECCInventoryTable from '../ECCInventoryTable'
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
export default function ECCSupplyStatus({ equipmentType, inventoryYesterday, pastAllocations,
  inventoryToday, scheduledAllocations, projectedInventory, totalReceived }) {
  return (
    <Card bg="dark" text="white" style={{ minWidth: '100%' }}>
      <OverlayTrigger key="ecc-table-header" placement="top" overlay={
        <Tooltip id="ecc-table-header-tooltip">
          The State Emergency Coordination Center, part of the Oregon Office of Emergency
          Management (OEM), coordinates and supports disaster and recovery efforts in statewide
          emergencies.
        </Tooltip>
      }>
        <Card.Header><h3>Emergency Coordination Center (ECC) Supply Status</h3></Card.Header>
      </OverlayTrigger>

      <Card.Body style={{ minWidth: '100%' }}>
        <ECCInventoryTable equipmentType={equipmentType} inventoryYesterday={inventoryYesterday}
          pastAllocations={pastAllocations}
          inventoryToday={inventoryToday} scheduledAllocations={scheduledAllocations} projectedInventory={projectedInventory} totalReceived={totalReceived} />
      </Card.Body>
    </Card>
  )
}
