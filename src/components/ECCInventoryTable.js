import React from 'react'
import { Table } from 'react-bootstrap'
import Colors from '../utils/colors'

export default function ECCInventoryTable({ equipmentType, inventoryYesterday, pastAllocations,
  inventoryToday, scheduledAllocations, projectedInventory, totalReceived }) {
  return (
    <Table variant="dark" striped hover responsive>
      <thead>
        <tr>
          <th key="shipment-indicator" style={{textAlign: 'left'}}>Inventory</th>
          {equipmentType.map(equipment => <th key={`shipments-${equipment}`}>{equipment}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{textAlign: 'left'}}>Yesterday</td>
          {inventoryYesterday.map((inventory, index) => <td key={`inventory-yesterday-${index}`}>{inventory}</td>)}
        </tr>
        <tr>
          <td style={{textAlign: 'left'}}>Shipped Out (past 24 hours)</td>
          {pastAllocations.map((inventory, index) => <td key={`past-allocations-${index}`}>{inventory}</td>)}
        </tr>
        <tr style={{ color: Colors.DARK_RED }}>
          <td style={{textAlign: 'left'}}>Today</td>
          {inventoryToday.map((inventory, index) => <td key={`inventory-today-${index}`}>{inventory}</td>)}
        </tr>
        <tr>
          <td style={{textAlign: 'left'}}>Scheduled Allocations</td>
          {scheduledAllocations.map((inventory, index) => <td key={`scheduled-allocations-${index}`}>{inventory}</td>)}
        </tr>
        <tr style={{ color: Colors.DARK_RED }}>
          <td style={{textAlign: 'left'}}>Projected End-of-Day</td>
          {projectedInventory.map((inventory, index) => <td key={`projected-inventory-${index}`}>{inventory}</td>)}
        </tr>
        <tr>
          <td style={{textAlign: 'left'}}>Total Received</td>
          {totalReceived.map((inventory, index) => <td key={`total-received-${index}`}>{inventory}</td>)}
        </tr>
      </tbody>
    </Table>
  )
}
