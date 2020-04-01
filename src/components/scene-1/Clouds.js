import React from 'react'
import styled from 'styled-components'
import { ReactComponent as CloudSVG1 } from '../../assets/scene-1/cloud-1.svg'
import { ReactComponent as CloudSVG2 } from '../../assets/scene-1/cloud-2.svg'
import { ReactComponent as CloudSVG3 } from '../../assets/scene-1/cloud-3.svg'

const CloudLayer = styled.div`
  position: absolute;
  top: 20%

  svg {
    fill: white;
    opacity: 0.5;
    position: absolute;
  }
`
const Cloud1 = styled(CloudSVG1)`
  width: 150px;
  left: 950px;
  top: 10px;
`
const Cloud2 = styled(CloudSVG2)`
  width: 200px;
  left: 2000px;
  top: -100px;
`
const Cloud3 = styled(CloudSVG3)`
  width: 120px;
  left: 3500px;
  top: -60px;
`
const Cloud4 = styled(CloudSVG2)`
  width: 150px;
  left: 5000px;
  top: 10px;
`
const Cloud5 = styled(CloudSVG3)`
  width: 200px;
  left: 7000px;
  top: -100px;
`
const Cloud6 = styled(CloudSVG1)`
  width: 120px;
  left: 9000px;
  top: -60px;
`

const Clouds = () => {
  return (
    <CloudLayer className="cloudlayer">
      <Cloud1 />
      <Cloud2 />
      <Cloud3 />
      <Cloud4 />
      <Cloud5 />
      <Cloud6 />
    </CloudLayer>
  )
}

export default Clouds