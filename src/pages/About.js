import React, { useEffect } from 'react'
import { Card, Row, Col, Container, Table } from 'react-bootstrap'
import { initGA, PageView } from '../analytics/google-analytics'

export default function About() {
  useEffect(() => {
    initGA(`${process.env.REACT_APP_GA}`)
    PageView()
  }, [])
  return (
    <Container fluid style={{ textAlign: 'center', color: 'white' }}>
      <Row className="justify-content-center" style={{ margin: 0 }}>
        <Col xs="12" xl="4" style={{ marginTop: '1em' }}>
          <h1>About this Dashboard</h1>
          <img src="/logo.png" alt="oregon-flat-white" height="100" />
          <Card bg="dark" text="white" style={{ margin: '1em' }}>
            <Card.Header>
              <h3>Data Sources</h3>
            </Card.Header>
            <Card.Body>
              All COVID data is available publicly from the <a href="https://www.oregon.gov/oha/pages/index.aspx" target="_blank" rel="noopener noreferrer">Oregon Health Authority.</a> <br />
              Please see their <a href="https://govstatus.egov.com/OR-OHA-COVID-19" target="_blank" rel="noopener noreferrer">COVID-19 Updates</a> for more information. <br /> <br />
              <Table style={{ textAlign: 'left' }} responsive variant="dark">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cases (total, deaths, tested)</td>
                    <td><a href="https://oregon-coronavirus-geo.hub.arcgis.com/datasets/oregon-covid-19-cases-public?showData=true" target="_blank" rel="noopener noreferrer">Oregon COVID-19 Case History</a><br /></td>
                  </tr>
                  <tr>
                    <td>Shipments</td>
                    <td><a href='https://oregon-coronavirus-geo.hub.arcgis.com/datasets/oregon-state-warehouse-ppe-shipments-to-counties-public?geometry=11.953%2C-88.438%2C-11.953%2C88.438&page=10&showData=true' target="_blank" rel="noopener noreferrer">
                      Oregon State Warehouse PPE Shipments to Counties</a></td>
                  </tr>
                  <tr>
                    <td>Hospital capacity, hospitalized patients, ventilators and ESF</td>
                    <td><a href='https://govstatus.egov.com/OR-OHA-COVID-19' target="_blank" rel="noopener noreferrer">Oregon Health Authority | COVID-19 Updates</a></td>
                  </tr>
                  <tr>
                    <td>County cartography</td>
                    <td><a href="https://data.oregon.gov/Natural-Resources/Oregon-counties-map/djry-8qn8" target="_blank" rel="noopener noreferrer">Oregon Open Data Portal</a></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>

        </Col>
      </Row>
      <Row className="justify-content-center" style={{ margin: 0 }}>
        <Col xs="12" xl="4">
          <Card bg="dark" text="white" style={{ margin: '1em' }}>
            <Card.Header>
              <h3>Author</h3>
            </Card.Header>
            <Card.Body>
              {`My name's Jonathan Wu. I'm a software engineer and an Oregonian.`} <br />
              <hr />
              Connect with me on <a href="https://www.linkedin.com/in/changyujonathanwu/">LinkedIn</a> or <a href="mailto: orcov19@gmail.com">email me.</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ margin: 0 }}>
        <Col xs="12" xl="4">
          <Card bg="dark" text="white" style={{ margin: '1em' }}>
            <Card.Header>
              <h3>This is cool. How can I say thanks?</h3>
            </Card.Header>
            <Card.Body>
              Please donate to an Oregon non-profit assisting with COVID recovery.
          <br /><i>Oregon Live</i> has published an excellent list
          <a href="https://www.oregonlive.com/coronavirus/2020/03/coronavirus-in-oregon-how-you-can-help.html" target="_blank" rel="noopener noreferrer"> here.</a>
              <br /> And please stay inside.
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ margin: 0 }}>
        <Col xs="12" xl="4">
          <Card bg="dark" text="white" style={{ margin: '1em' }}>
            <Card.Header>
              <h3>Feedback and Ideas</h3>
            </Card.Header>
            <Card.Body>
              {`Greatly appreciated. Please send to my `} <a href="mailto: orcov19@gmail.com">email.</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ margin: 0 }}>
        <Col xs="12" xl="4">
          <Card bg="dark" text="white" style={{ margin: '1em' }}>
            <Card.Header>
              <h3>Powered By</h3>
            </Card.Header>
            <Card.Body>
              <h5>Front End</h5>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                <img src="/logo192.png" alt="react-logo" height="40" style={{ margin: '1em' }} />
              </a>
              <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer">
                <img src="/js.png" alt="javascript-logo" height="40" style={{ margin: '1em' }} />
              </a>
              <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                <img src="/bootstrap.png" alt="bootstrap-logo" height="40" style={{ margin: '1em' }} />
              </a>
              <a href="https://plotly.com/" target="_blank" rel="noopener noreferrer">
                <img src="/plotly.png" alt="plotly-js-logo" height="40" style={{ margin: '1em' }} />
              </a>
              <a href="https://docs.mapbox.com/mapbox.js/api/v3.3.0/" target="_blank" rel="noopener noreferrer">
                <img src="/mapbox.png" alt="mapbox-js-logo" height="40" style={{ margin: '1em' }} />
              </a>

              <h5>Back End</h5>
              <a href="https://flask.palletsprojects.com/en/1.1.x/" target="_blank" rel="noopener noreferrer">
                <img src="/flask.png" alt="flask-logo" height="40" style={{ margin: '1em' }} />
              </a>
              <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                <img src="/python.png" alt="python-logo" height="40" style={{ margin: '1em' }} />
              </a>
              <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                <img src="/postgres.png" alt="postgres-logo" height="40" style={{ margin: '1em' }} />
              </a>



              <h5>Development</h5>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                <img src="/vscode.png" alt="visual-studio-code-logo" height="40" style={{ margin: '1em' }} />
              </a>
              <a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">
                <img src="/pycharm.png" alt="pycharm-logo" height="40" style={{ margin: '1em' }} />
              </a>
              <h5>Repository</h5>
              <a href="https://github.com/ChangYuJonathanWu/orcov19" target="_blank" rel="noopener noreferrer">Available on GitHub</a>
              <br /><br />
              <i>All product names, logos, and brands are property of their respective owners. </i>

            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ margin: 0 }}>
        <Col xs="12" xl="4">
          <Card bg="dark" text="white" style={{ margin: '1em' }}>
            <Card.Header>
              <h3>Disclaimer</h3>
            </Card.Header>
            <Card.Body style={{ textAlign: 'left' }}>
              {`This software is provided "AS IS", without warranty of any kind, expressed or implied,
              including but not limited to the warranties of merchantibility, fitness for a particular
              purpose and noninfringement. In no event shall the authors or copyright holders be liable
              for any claim, damages or other liability, whether in an action of contract, tort or otherwise,
              arising from, out of or in connection with the software or the use or other dealings in the
              software. This software is not for use in advising medical, policy or any other decisions and is
              intended for demonstration purposes only.`}
              <br /><hr />
              {`Although every effort has been made to provide complete and accurate data for this software,
              the authors and copyright holders make no warranties, expressed or implied, or representations
              as to the accuracy of content on this website. Authors or copyrightholders will not be held 
              liable or responsible for any errors or omissions in the information contained in the website
              or operation of this website.`}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
