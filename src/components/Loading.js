import React from 'react'
import ReactLoading from 'react-loading'
import { isMobile } from 'react-device-detect'

export default function Loading() {
  return (
    <div style={{ marginTop: '20%' }}>
      <ReactLoading type='bars' color='white' height={isMobile ? '30%' : '10%'} width={isMobile ? '30%' : '10%'} className="mx-auto" />
    </div>
  )
}
