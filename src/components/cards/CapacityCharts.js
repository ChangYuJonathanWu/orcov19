import React from 'react'
import CapacityPieChart from '../CapacityPieChart'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'

export default function CapacityCharts({ adult_icu_available, adult_icu_total, adult_non_icu_available, adult_non_icu_total, pediatric_icu_available, pediatric_icu_total }) {
  const StyledHR = () => <hr style={{ backgroundColor: 'white' }} />
  return (
    <Card bg="dark" text="white" style={{ minWidth: '100%' }}>
      <Card.Header><h3>Hospital Capacity</h3></Card.Header>
      <Card.Body style={{ paddingTop: 0 }}>
        <Container fluid>
          <Row>
            <Col xs="12" md="4" style={{margin: 'auto'}}>
              <CapacityPieChart available={adult_icu_available} total={adult_icu_total} title="Adult ICU Beds" />
              <div style={{ marginTop: '1em' }}><b>Total:</b> {adult_icu_total} beds</div>
              {isMobile ? <StyledHR /> : null}
            </Col>
            <Col xs="12" md="4" style={{margin: 'auto'}}>
              <CapacityPieChart available={adult_non_icu_available} total={adult_non_icu_total} title="Adult Non-ICU Beds" />
              <div style={{ marginTop: '1em' }}><b>Total:</b> {adult_non_icu_available} beds</div>
              {isMobile ? <StyledHR /> : null}
            </Col>
            <Col xs="12" md="4" style={{margin: 'auto'}}>
              <CapacityPieChart available={pediatric_icu_available} total={pediatric_icu_total} title="Pediatric NICU/PICU Beds" />
              <div style={{ marginTop: '1em' }}><b>Total:</b> {pediatric_icu_total} beds</div>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export const MemoizedCapacityCharts = React.memo(CapacityCharts)
