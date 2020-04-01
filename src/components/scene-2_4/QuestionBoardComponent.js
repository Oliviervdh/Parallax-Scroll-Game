import React from 'react'
import styled from 'styled-components'

import { ReactComponent as QuestionB } from "../../assets/scene-2/QuestionBoard.svg";


const QuestionBoardLayer = styled.div`
  position: absolute;
  width: 100%;
  
    .questionBoard {
    opacity: 0.3;
    transition: 2.5s;
    position: absolute;
    margin: auto;
    top: -900px;
    left: 400px;
    width: 700px;
    height: 725px;
  }
  .questionBoardToggle{
  opacity: 1;
      top: -130px;
      width: 700px;
   height: 725px;
      left: 400px;
  }
 
    
`

const QuestionBoard = (props) => {
    return(
        <QuestionBoardLayer className={props.passClass}>
            <QuestionB className="questionBoard"/>
        </QuestionBoardLayer>
    )
};


export default QuestionBoard;