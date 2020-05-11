import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Cases from '../components/cards/Cases'
import Ventilators from '../components/cards/Ventilators'
import Hospitalized from '../components/cards/Hospitalized'
import { MemoizedCapacityCharts } from '../components/cards/CapacityCharts'
import LastUpdated from '../components/cards/LastUpdated'
import OperationStatus from '../components/cards/OperationStatus'
import ESF from '../components/cards/ESF'
import CountyShipmentsTable from '../components/cards/CountyShipmentsTable'
import { MemoizedRecentShipmentsMap } from '../components/cards/RecentShipmentsMap'

export default function DesktopDashboard(props) {
  return (
    <Container fluid style={{ minWidth: "1366px" }}>
      <Row style={{ margin: '1em', textAlign: 'center' }}>
        <Col xs="2">
          <Row>
            <Col xs="12" style={{ marginBottom: '1em' }}>
              <Cases total={props.cases.total} deaths={props.cases.deaths} negative={props.cases.negative} />
            </Col>
            <Col xs="12" style={{ marginBottom: '1em' }}>
              <Ventilators available={props.ventilators.available} used={props.ventilators.in_use} />
            </Col>
            <Col xs="12">
              <Hospitalized total={props.hospitalized.total} icu={props.hospitalized.icu} />
            </Col>
          </Row>
        </Col>
        <Col xs="8" style={{ height: 'auto' }}>
          <Row style={{ marginBottom: '1em' }}>
            <Col style={{ padding: 0 }}>
              <MemoizedCapacityCharts adult_icu_available={props.capacity.adult_icu_available} adult_icu_total={props.capacity.adult_icu_total}
                adult_non_icu_available={props.capacity.adult_non_icu_available} adult_non_icu_total={props.capacity.adult_non_icu_total}
                pediatric_icu_available={props.capacity.pediatric_icu_available} pediatric_icu_total={props.capacity.pediatric_icu_total} />
            </Col>
          </Row>
          <Row style={{ height: 'auto', minHeight: '30vh', padding: 0, minWidth: '100%', marginBottom: '1em' }}>
            <Col style={{ padding: 0 }} xs="6">
              <CountyShipmentsTable counties={props.shipments.county_names} shipments={props.shipments.total_by_county}/>
            </Col>
            <Col style={{ padding: 0 }} xs="6">
              <MemoizedRecentShipmentsMap shipmentDetails={props.shipments.recent_by_county}/>
            </Col>
          </Row>
          <Row>
            <Col style={{ padding: 0 }}>
              <LastUpdated lastUpdated={props.last_updated} />
            </Col>
          </Row>
        </Col>
        <Col xs="2">
          <Row>
            <Col xs="12" style={{ marginBottom: '1em' }}>
              <OperationStatus ecc={props.operation_status.ecc} esf8={props.operation_status.esf8} />
            </Col>
            <Col xs="12">
              <ESF healthMedical8={props.esf.health_medical_8} patientMovement={props.esf.patient_movement}
                publicHealth={props.esf.public_health} massCare6={props.esf.mass_care_6} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
