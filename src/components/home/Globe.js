import React from 'react'
import ReactGlobe from 'react-globe'
import { useMediaQuery } from 'react-responsive'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'

const globeCloudsTexture =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Fair_Weather_Cloud_Map.jpg/1280px-Fair_Weather_Cloud_Map.jpg'
const globeTexture = 'https://i.imgur.com/MipfNVK.png'

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

const options = {
  enableGlobeGlow: false,
  enableCameraAutoRotate: true,
  cameraRotateSpeed: 0.3,
  markerType: 'bar',
  enableMarkerGlow: false,
  markerRadiusScaleRange: [0.2, 0.5],
  cameraDistanceRadiusScale: 4,
  enableCameraZoom: false,
  cameraAutoRotateSpeed: 0.6,
  initialCoordinates: [51.5074, 0.1278],
  markerTooltipRenderer: marker => `${marker.city} (${marker.value})`,
}

const Globe = () => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 641px)' })
  return (
    <ReactGlobe
      options={options}
      markers={markers}
      height={isMobile ? 600 : 800}
      width={isMobile ? 600 : 800}
      globeBackgroundTexture={null}
      globeCloudsTexture={globeCloudsTexture}
      globeTexture={globeTexture}
    />
  )
}

export default Globe
