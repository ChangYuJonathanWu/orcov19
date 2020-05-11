import React, { useState } from 'react'
import { Table, FormControl } from 'react-bootstrap'
import Colors from '../utils/colors'

export default function PPEShipmentsTable({ counties, shipments}) {
  const [countySearch, setCountySearch] = useState('')

  const tableBodyRows = []

  // Determine which counties to show based on page or if searching. Pagination is ignored on search.
  let processedCounties = []
  if (countySearch !== '') {
    counties.forEach(county => {
      if (county.toLowerCase().startsWith(countySearch.toLowerCase())) {
        processedCounties.push(county)
      }
    })
  } else {
    // Otherwise process county array for paginated counties
    // processedCounties = countiesAndShipments.counties.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    processedCounties = counties
  }

  processedCounties.forEach(county => {
    tableBodyRows.push(
      <tr key={county}>
        <td><b>{formatCounty(county)}</b></td>
        <td>{shipments[county]['population'] ? shipments[county]['population'] :'-'} </td>
        <td>{shipments[county]['n95_masks'] ? shipments[county]['n95_masks'] : '-'}</td>
        <td>{shipments[county]['surgical_masks'] ? shipments[county]['surgical_masks'] : '-'}</td>
        <td>{shipments[county]['gowns'] ? shipments[county]['gowns'] : '-'}</td>
        <td>{shipments[county]['face_shields'] ? shipments[county]['face_shields'] : '-'}</td>
        <td>{shipments[county]['gloves'] ? shipments[county]['gloves'] : '-'}</td>
      </tr>
    )
  })

  const shipmentTable = (
    <>
      <FormControl style={{ backgroundColor: 'lightgrey' }} placeholder="Search county" onChange={(e) => setCountySearch(e.target.value)} />
      <div style={{ overflowY: 'scroll', height: '35vh' }}>
        <Table variant="dark" striped style={{ width: '100%' }}>
          <thead>
            <tr style={{ fontWeight: 'bold', backgroundColor: Colors.DARK_GRAY }} className="sticky-top">
              <td><b>County</b></td><td>Population</td><td>N95</td><td>Surgical Masks</td><td>Gowns</td><td>Face Shields</td><td>Gloves</td>
            </tr>
          </thead>
          <tbody style={{ maxHeight: '20vh' }}>
            {tableBodyRows}
          </tbody>
        </Table>
      </div>
    </>

  )
  return shipmentTable
}

function capitalizeLetterAtIndex(string, index = 0) {
  return string.slice(0, index) + string.charAt(index).toUpperCase() + string.slice(index + 1);
}


function formatCounty(string) {
  const capitalized = capitalizeLetterAtIndex(string, 0)
  let capitalizedAfterSpace = capitalized
  for (let i = 0; i < string.length; i++) {
    if (capitalized.charAt(i) === "_") {
      capitalizedAfterSpace = capitalizeLetterAtIndex(capitalized.replace("_", " "), i + 1)
    }
  }

  return capitalizedAfterSpace
}

