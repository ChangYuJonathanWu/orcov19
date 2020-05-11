import React from 'react'
import ESFStatus from '../ESFStatus'
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap'

export default function ESF({ healthMedical8, patientMovement, publicHealth, massCare6 }) {
  return (
    <Card bg="dark" text="white" style={{ minWidth: '100%' }}>
      <OverlayTrigger key="esf-header" placement="top" overlay={
        <Tooltip id='esf-header-tooltip'>
          Emergency Support Functions, or ESFs, are Federal and State emergency support services and task forces.
      </Tooltip>
      }>
        <div>
          <Card.Header><h3>Emergency Support Function</h3></Card.Header>
        </div>
      </OverlayTrigger>
      <Card.Body>
        <OverlayTrigger key="esf8-health-medical" placement="top" overlay={
          <Tooltip id='esf8-tooltip'>
            {`ESF 8 – Public Health and Medical Services provides the mechanism for coordinated Federal 
          assistance to supplement State, Tribal, and local resources in response to an emergency.`}
          </Tooltip>}>
          <h4>ESF 8 Health & Medical</h4>
        </OverlayTrigger>
        <ESFStatus title="Medical Care & Supply Chain" status={healthMedical8} />
        <br />
        <ESFStatus title="Patient Movement" status={patientMovement} />
        <br />
        <ESFStatus title="Public Health Impact" status={publicHealth} />
        <br />
        <OverlayTrigger key="esf-6" palcement="top" overlay={
          <Tooltip id="esf6-tooltip">
            {`Emergency Support Function (ESF) #6 – Mass Care, Emergency Assistance, Temporary Housing, and 
          Human Services coordinates and provides life-sustaining resources, essential services,  
          and statutory programs when the needs of disaster survivors exceed local, state, tribal, 
          territorial,  and insular area government capabilities.`}
          </Tooltip>
        }>
          <div>
            <h4>ESF 6 Mass Care</h4>
            <ESFStatus title="" status={massCare6} />
          </div>
        </OverlayTrigger>
      </Card.Body>
    </Card>
  )
}
