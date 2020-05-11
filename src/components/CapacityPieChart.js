import React from 'react'
import createPlotlyComponent from 'react-plotly.js/factory';
import Colors from '../utils/colors' 

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

export default function CapacityPieChart({available, total, title}) {
  const used = total - available
    return (
      <Plot
        data={[
          {
            values: [available, used],
            labels: ['Available', 'In Use'],
            textinfo: "label+percent",
            type: 'pie',
            marker: { colors: [Colors.LIGHT_GRAY, Colors.DARK_RED] },
            insidetextorientation: 'horizontal',
            automargin: true
          },
        ]}
        layout={
          {
            title: { text: title, font: { color: 'white' } },
            showlegend: false,
            margin: { "b": 0, "l": 0, "r": 0 },
            font: { size: 14 },
            paper_bgcolor: Colors.DARK_GRAY
          }}
        style={{ maxWidth: '100%' }}
        config={{ responsive: true, displaylogo: false}}
      />)
  
}
