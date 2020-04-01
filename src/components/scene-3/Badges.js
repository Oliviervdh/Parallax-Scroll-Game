import React from 'react'
import styled, {keyframes} from 'styled-components'
import { ReactComponent as FullSVG } from '../../assets/scene-3/full-badge.svg'
import { ReactComponent as PrepSVG } from '../../assets/scene-3/prep-badge.svg'
import { ReactComponent as OptimizeSVG } from '../../assets/scene-3/optimize-badge.svg'
import { ReactComponent as EngageSVG } from '../../assets/scene-3/engage-badge.svg'

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const FullBadge = styled.div`
  position: absolute;
  right: 10vw;
  top: 10vh;
  width: 120px;
  height: 120px;
  z-index: 200;
  transition: top 3s ease-out, opacity 5s ease-out;
  path {
    transition: opacity 2s ease-out;
  }
  h4{
    position: absolute;
    top: 50px;
    right: 150px;
    width: max-content;
    opacity: 0;
    transition: opacity 1s ease;
  }

  &.loading {
    svg {
      animation: ${spinning} 1s linear infinite
    }
  }
  &.fade-down {
    top: 73vh;
    opacity: 0;
  }
`
const BadgeLayer = styled.div`
  position: absolute;
  top: 11vh;
  text-align: center;
  z-index: 200;
`
const PrepBadgeContainer = styled.div`
  position: absolute;
  left: 3100px;
  width: 400px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  
  svg {
    position: absolute;
    width: 200px;
    transition: opacity 0.7s ease-in, left 2s ease-in-out;
  }

  h4 {
    margin-top: 15vh;
  }
`
const Prepare = styled(PrepSVG)`
  top: 0;
  left: calc(50% - 100px);
`
const OptimizeBadgeContainer = styled(PrepBadgeContainer)`
  left: 7100px;

  h4 {
    margin-top: 20vh;
  }
`
const Optimize = styled(OptimizeSVG)`
  left: calc(50% - 40px);
  top: -12vh;
`
const EngageBadgeContainer = styled(OptimizeBadgeContainer)`
  left: 5100px
`
const Engage = styled(EngageSVG)`
  left: calc(50% - 11vw);
  top: -12vh;
`

const Badges = () => {
  return (
    <>
      <FullBadge className="platform">
        <FullSVG className="full-svg"/>
        <h4 className="status-text">Hank starts thinking about it...</h4>
      </FullBadge>
      <BadgeLayer className="badges-layer">
        
        <PrepBadgeContainer className="prep-sellers">
          <Prepare />
          <h4>Hank just found a badge!</h4>
          <h3>Prepare Sellers</h3>
        </PrepBadgeContainer>


        <EngageBadgeContainer className="engage-buyers">
          <Engage />
          <h4>Hank just found a badge!</h4>
          <h3>Engage Buyers</h3>
        </EngageBadgeContainer>

        <OptimizeBadgeContainer className="optimize-insights">
          <Optimize />
          <h4>Hank just found a badge!</h4>
          <h3>Optimize with Insights</h3>
        </OptimizeBadgeContainer>

      </BadgeLayer>
    </>
  )
}

export default Badges