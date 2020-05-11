import React from 'react'
import Colors from '../utils/colors'

export default function ESFStatus({title, status}) {
  const color = status === "Stable" ? Colors.GREEN : status === "Anticipated Instability" ? Colors.YELLOW : status === "Unstable" ? Colors.DARK_RED : Colors.LIGHT_GRAY
  return (
    <>
      <h5>{title}</h5>
      <h5 style={{ padding: '4px 4px', backgroundColor: color }}>{status}</h5>
    </>
  )
}
