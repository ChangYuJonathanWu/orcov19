import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl';
import Colors from '../utils/colors'
import { pulse } from '../utils/pulse'

mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX}`
export default function CountyMap({countyLines = {}, shipmentDetails = {}, zoom = 5.8, maxZoom = 7, minZoom = 4.5, center = [-120.5, 44.1] }) {
  const mapContainer = useRef(null)

  useEffect(() => {
    const lastShipmentCounties = Object.keys(shipmentDetails)
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: center,
      zoom: zoom,
      maxZoom: maxZoom,
      minZoom: minZoom
    })

    map.on('load', () => {
      map.addImage('pulse', pulse(map), { pixelRatio: 2 })
      map.addSource('oregon-counties', {
        type: 'geojson',
        data: countyLines,
        generateId: true
      })
      map.addLayer({
        id: 'last-shipment',
        type: 'symbol',
        source: 'oregon-counties',
        layout: {
          'icon-image': 'pulse',
          'icon-ignore-placement': true
        },
        paint: {
          'icon-opacity': [
            'case', ['==', ['in', ['downcase', ['get', 'altname']], ['literal', lastShipmentCounties]], true],
            1, 0
          ]
        }
      })
      map.addLayer({
        id: 'oregon-counties-fill',
        type: 'fill',
        source: 'oregon-counties',
        layout: {},
        paint: {
          'fill-color': Colors.DARK_RED,
          'fill-opacity': 0.1
        }
      })
      map.addLayer({
        id: 'oregon-counties-line',
        type: 'line',
        source: 'oregon-counties',
        'layout': {},
        'paint': {
          'line-opacity': 1,
          'line-color': Colors.DARK_RED
        }
      })

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      })

      map.on('mouseleave', 'oregon-counties-fill', () => {
        map.getCanvas().style.cursor = '';
        popup.remove()
      })
      map.on('mousemove', 'oregon-counties-fill', function (e) {
        const county = e.features[0].properties.altname;
        const countyLower = county.toLowerCase()
        if (!shipmentDetails[countyLower]) {
          popup.remove()
          return
        }
        map.getCanvas().style.cursor = '';
        popup
          .trackPointer()
          .setHTML(`<h4>${county} County</h4>
              <b>N95:</b> ${shipmentDetails[countyLower].n95_masks}<br> 
              <b>Surgical Masks:</b> ${shipmentDetails[countyLower].surgical_masks}<br> 
              <b>Gowns:</b> ${shipmentDetails[countyLower].gowns}<br> 
              <b>Face Shields:</b> ${shipmentDetails[countyLower].face_shields}<br> 
              <b>Gloves:</b> ${shipmentDetails[countyLower].gloves}<br>
              <b>Date:</b> ${new Date(shipmentDetails[countyLower].date).toLocaleDateString("en-US")}`)
          .addTo(map);
      });
    });
  }, [zoom, minZoom, maxZoom, center, shipmentDetails, countyLines])
  return (
    <div style={{ height: '100%', width: '100%', color: 'black' }} ref={el => mapContainer.current = el} />
  )
}

export const MemoizedCountyMap = React.memo(CountyMap)