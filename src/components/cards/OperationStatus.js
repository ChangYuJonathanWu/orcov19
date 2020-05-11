import React from 'react'
import Colors from '../../utils/colors'
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap'

export default function OperationStatus({ ecc, esf8 }) {
  return (
    <Card bg="dark" text="white" style={{ minWidth: '100%'}}>
      <Card.Header><h3>Operation Status</h3></Card.Header>
      <Card.Body>
        <OverlayTrigger key="ecc-status-header" placement="top" overlay={
          <Tooltip id="ecc-status-tooltip">
            The State Emergency Coordination Center, part of the Oregon Office of
            Emergency Management (OEM), coordinates and supports disaster and recovery
            efforts in statewide emergencies.
          </Tooltip>
        }>
          <h5>Emergency Coordination Center (ECC)</h5>
        </OverlayTrigger>

        <h5 style={{ padding: '4px 4px', backgroundColor: Colors.GREEN }}>{ecc}</h5>
        <h6>at 1200 on 3/02/2020</h6>
        <br />
        <OverlayTrigger key="esf8-status-header" placement="top" overlay={
          <Tooltip id="esf8-status-tooltip">
            ESF-8 consists of plans, procedures and resources used by the State to respond
            in emergencies and disasters. The Oregon Health Authority (OHA) is the primary
            agency for ESF-8 coordination.
          </Tooltip>
        }>
          <h5>State ESF-8 Oregon Health Authority</h5>
        </OverlayTrigger>
        <h5 style={{ padding: '4px 4px', backgroundColor: Colors.GREEN }}>{esf8}</h5>
        <h6>Agency Operations Center (AOC) activated on 1/21/2020</h6>
      </Card.Body>
    </Card>
  )
}
