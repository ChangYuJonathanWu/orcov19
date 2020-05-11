import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Cases from '../components/cards/Cases'
import Ventilators from '../components/cards/Ventilators'
import Hospitalized from '../components/cards/Hospitalized'
import { MemoizedCapacityCharts } from '../components/cards/CapacityCharts'
import LastUpdated from '../components/cards/LastUpdated'
import OperationStatus from '../components/cards/OperationStatus'
import ESF from '../components/cards/ESF'
import CountyShipmentsTable from '../components/cards/CountyShipmentsTable'
import RecentShipmentsMap from '../components/cards/RecentShipmentsMap'

export default function MobileDashboard(props) {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row style={{ textAlign: 'center', margin: 0 }}>
        <Col xs="12" style={{ marginTop: '1em' }}>
          <OperationStatus ecc={props.operation_status.ecc} esf8={props.operation_status.esf8} />
        </Col>

        <Col xs="12" style={{ marginTop: '1em' }}>
          <Cases total={props.cases.total} deaths={props.cases.deaths} negative={props.cases.negative} />
        </Col>

        <Col xs="12" style={{ marginTop: '1em' }}>
          <MemoizedCapacityCharts adult_icu_available={props.capacity.adult_icu_available}
            adult_icu_total={props.capacity.adult_icu_total}
            adult_non_icu_available={props.capacity.adult_non_icu_available}
            adult_non_icu_total={props.capacity.adult_non_icu_total}
            pediatric_icu_available={props.capacity.pediatric_icu_available}
            pediatric_icu_total={props.capacity.pediatric_icu_total} />
        </Col>

        <Col xs="12" style={{ marginTop: '1em', height: 'auto', minHeight: '70vh' }}>
          <RecentShipmentsMap shipmentDetails={props.shipments.recent_by_county} zoom={4.5} center={[-120.5, 45.8]} />
        </Col>

        <Col xs="12" style={{ marginTop: '1em' }}>
          <CountyShipmentsTable counties={props.shipments.county_names} shipments={props.shipments.total_by_county} />
        </Col>

        <Col xs="12" style={{ marginTop: '1em' }}>
          <Hospitalized total={props.hospitalized.total} icu={props.hospitalized.icu} />
        </Col>

        <Col xs="12" style={{ marginTop: '1em' }}>
          <Ventilators available={props.ventilators.available} used={props.ventilators.in_use} />
        </Col>

        <Col xs="12" style={{ marginTop: '1em' }}>
          <ESF healthMedical8={props.esf.health_medical_8}
            patientMovement={props.esf.patient_movement}
            publicHealth={props.esf.public_health}
            massCare6={props.esf.mass_care_6} />
        </Col>

        <Col style={{ marginTop: '1em' }}>
          <LastUpdated lastUpdated={props.last_updated} />
        </Col>

        <Col xs="12">
          <Button href="/about" style={{ margin: '2em' }} variant="info">
            About
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
