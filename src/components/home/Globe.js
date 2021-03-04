import React from 'react'
import ReactGlobe from 'react-globe'
import { createBreakpoint } from 'react-use'
// import 'tippy.js/dist/tippy.css'
// import 'tippy.js/animations/scale.css'

const globeCloudsTexture = '/cloud_map.jpg'
const globeTexture = '/globe_texture.jpg'

const options = {
  cameraRotateSpeed: 0.3,
  cameraDistanceRadiusScale: 4,
  cameraAutoRotateSpeed: 0.6,
  enableGlobeGlow: false,
  enableCameraZoom: false,
  enableCameraAutoRotate: true,
  enableMarkerGlow: false,
  globeGlowColor: '#000000',
  globeGlowCoefficient: 0,
  globeGlowPower: 0,
  globeGlowRadiusScale: 0,
  // markerType: 'bar',
  // markerRadiusScaleRange: [0.2, 0.5],
  // markerTooltipRenderer: marker => `${marker.city} (${marker.value})`,
}

const markers = [
  {
    id: 'marker1',
    city: 'Singapore',
    color: '#67b246',
    coordinates: [1.3521, 103.8198],
    value: 50,
  },
  {
    id: 'marker2',
    city: 'New York',
    color: '#67b246',
    coordinates: [40.73061, -73.935242],
    value: 25,
  },
  {
    id: 'marker3',
    city: 'San Francisco',
    color: '#67b246',
    coordinates: [37.773972, -122.431297],
    value: 35,
  },
  {
    id: 'marker4',
    city: 'Beijing',
    color: '#67b246',
    coordinates: [39.9042, 116.4074],
    value: 135,
  },
  {
    id: 'marker5',
    city: 'London',
    color: '#67b246',
    coordinates: [51.5074, 0.1278],
    value: 80,
  },
  {
    id: 'marker6',
    city: 'Los Angeles',
    color: '#67b246',
    coordinates: [29.7604, -95.3698],
    value: 54,
  },
]

const Globe = () => {
  const useBreakpoint = createBreakpoint()
  const breakpoint = useBreakpoint()
  return (
    <ReactGlobe
      options={options}
      // markers={markers}
      height={breakpoint === 'tablet' ? 600 : 800}
      width={breakpoint === 'tablet' ? 600 : 800}
      globeBackgroundTexture={null}
      globeCloudsTexture={globeCloudsTexture}
      globeTexture={globeTexture}
    />
  )
}

export default Globe
