import React, { useEffect, useState } from 'react';
import { isMobileOnly } from 'react-device-detect'
import { initGA, PageView } from './analytics/google-analytics'
import { Alert } from 'react-bootstrap'
import DesktopDashboard from './views/DesktopDashboard'
import MobileDashboard from './views/MobileDashboard'
import Navigation from './components/Navigation'
import Loading from './components/Loading'
import About from './pages/About'
import CacheRoute from 'react-router-cache-route'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

function App() {
  const [data, setData] = useState({})
  const [ready, setReady] = useState(false)

  // Start Analytics
  useEffect(() => {
    initGA(`${process.env.REACT_APP_GA}`)
    PageView()

    fetch(`${process.env.REACT_APP_WEBSERVICE}/${process.env.REACT_APP_DATA_ENDPOINT}`)
      .then(res => res.json())
      .then(result => {
        if (result.errors && result.errors.length > 1) {
          setData({ ...result, message: { content: 'Sorry, there seems to be a problem getting data from the OHA. Please try again later.', variant: 'info' } })
        } else {
          setData(result)
        }
        setReady(true)
      }).catch(err => {
        console.log(err)
        setReady(false)
        setData({ message: { content: "Sorry, there seems to be a problem getting data. Please try again later.", variant: 'info' } })
      })
  }, [])

  return (
    <Router>
      <Navigation />
      {data.message && data.message.content ? <Alert key="message-alert" style={{ textAlign: 'center' }}
        variant={data.message.variant}>{data.message.content}</Alert> : null}
      <CacheRoute exact path="/" render={(props) => (
        !ready ? <Loading /> :
          isMobileOnly ? <MobileDashboard {...props} {...data} /> :
            <DesktopDashboard {...props} {...data} />)} />
      <CacheRoute exact path="/about" component={About} />
    </Router>)
}

export default App;
