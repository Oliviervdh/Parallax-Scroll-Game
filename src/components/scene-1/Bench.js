import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BenchSVG } from '../../assets/scene-1/bench.svg'
import { ReactComponent as TreeSVG } from '../../assets/scene-1/tree.svg'

const BenchContainer = styled.div`
  position: absolute;
  left: 1100px;
  bottom: 12%;
`

const Bench1 = styled(BenchSVG)`
  width: 400px;
  fill: #609BBE;
`
const Tree = styled(TreeSVG)`
  width: 350px;
  fill: #609BBE;
  position: absolute;
  bottom: 10%;
  left: 70%;
`

const Bench = () => {
  return (
    <BenchContainer className="bench">
      <Tree />
      <Bench1 />
    </BenchContainer>
  )
}

export default Bench