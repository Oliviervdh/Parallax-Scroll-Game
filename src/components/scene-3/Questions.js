import React from 'react'
import styled from 'styled-components'
import QuestionCard from './QuestionCard'

const QuestionsLayer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`

const Questions = () => {

    return (
        <QuestionsLayer className="questions-layer">
      <QuestionCard num={"first"} left={'1500px'} />
      <QuestionCard num={"second"} left={'2000px'}/>
      <QuestionCard num={"third"} left={'2500px'}/>
      <QuestionCard num={"fourth"} left={'3000px'}/>
      <QuestionCard num={"fifth"} left={'3500px'}/>
      <QuestionCard num={"sixth"} left={'4000px'}/>
      <QuestionCard num={"seventh"} left={'4500px'}/>
      <QuestionCard num={"eighth"} left={'5000px'}/>
      <QuestionCard num={"ninth"} left={'5500px'}/>
      <QuestionCard num={"tenth"} left={'6000px'}/>
      <QuestionCard num={"eleventh"} left={'6500px'}/>
      <QuestionCard num={"twelfth"} left={'7000px'}/>
        </QuestionsLayer>
    )
}

export default Questions