import React, {useContext} from 'react'
import styled from 'styled-components'
import disableScroll from 'disable-scroll';

import { ReactComponent as QuestionIconSVG } from '../../assets/scene-3/question-icon.svg'
import { ReactComponent as QuestionBlockSVG } from '../../assets/scene-3/question-block.svg'
import { ReactComponent as YesSVG } from '../../assets/scene-3/yes.svg'
import { ReactComponent as NoSVG } from '../../assets/scene-3/no.svg'
import {QuestionContext} from "../QuestionsContext";



const QContainer = styled.div`
  width: 500px;
  position: relative;
  top: 75vh;
  left: ${props => props.left}
  opacity: 90%;
  transition: top .3s ease-out;

  &.up {
    top: 10vh;
    z-index: 100;

    svg, .questiontext, .answerContainer {
      display: block;
    }
  }

  .questionicon, .questionblock {
    position: absolute;
    top: 0;
    left: 0;
  }
`
const QuestionBlock = styled(QuestionBlockSVG)`
  display: none;
`
const QuestionText = styled.div`
  display: none;
  width: 80%;
  position: absolute;
  left: calc(50% - 40%);
  top: 25vh;
  text-align: center;
  line-height: 3rem;
`
const AnswerContainer = styled.div`
  display: none;
  width: 100%;
`
const ButtonContainer = styled.div`
  width: 80px;
  position: absolute;
  top: 55vh;
  fill: #2D2E83;

  circle {
    display: none;
  }

  &.no{
    left: 20%;
  }
  &.yes {
    left: calc(80% - 80px);
  }
  &:hover {
    circle {
      display: block;
    }
    .no-symbol, .yes-symbol {
      fill: white;
    }
  }
  
`
export const survey = [
  {
    question: "Do your sellers have a single marketing curated source of content?",
    answer: ""
  },
  {
    question: "Can sellers easily find content for every opportunity or step of the buyer journey?",
    answer: ""
  },
  {
    question: "Does your current onboarding and training program prepare your sellers well?",
    answer: ""
  },
  {
    question: "Is it easy to grab your sellers attention for new content and training?",
    answer: ""
  },
  {
    question: "Are your sellers capable to assess the right solution for the buyer?",
    answer: ""
  },
  {
    question: "Are your sellers able to tailor their conversations to each buyer specifically?",
    answer: ""
  },
  {
    question: "Can your sellers share content with their buyers from any device, from wherever sellers prefer to work?",
    answer: ""
  },
  {
    question: "Can your sellers easily collaborate with all buyer stakeholders along the sales cycle?",
    answer: ""
  },
  {
    question: "Is Marketing able to know which content resonates with the buyer?",
    answer: ""
  },
  {
    question: "Do you have analytic insights that help to invest in the content that impacts revenue most?",
    answer: ""
  },
  {
    question: "Does your sales enablement program help to increase win rate and decrease sales cycles?",
    answer: ""
  },
  {
    question: "Do your sellers leverage the best practices of other sellers?",
    answer: ""
  },
]

const QuestionCard = (props) => {
  const { state, dispatch } = useContext(QuestionContext);

  const leftVal = props.left
  const classname = `q-container ${props.num}`
  //get index of question
  let index = 0
  switch (props.num) {
    case 'first':
      index = 0;
      break;
    case 'second':
      index = 1;
      break;
    case 'third':
      index = 2;
      break;
    case 'fourth':
      index = 3;
      break;
    case 'fifth':
      index = 4;
      break;
    case 'sixth':
      index = 5;
      break;
    case 'seventh':
      index = 6;
      break;
    case 'eighth':
      index = 7;
      break;
    case 'ninth':
      index = 8;
      break;
    case 'tenth':
      index = 9;
      break;
    case 'eleventh':
      index = 10;
      break;
    case 'twelfth':
      index = 11;
      break;
    default:
      index = 0
      break;
  }

  const handleAnswer = (num, answer) => {
    //save answer
    survey[num].answer = answer
    console.log('altered survey: ', survey)
    disableScroll.off()

    //hide question
    const question = document.querySelector('.up')
    question.classList.remove('up')
    question.setAttribute('style', 'display: none;')

    // dispatch({type: false})
    // console.log("Question clicked: ", state)
  }


  return (
      <QContainer className={classname} left={leftVal}>
        <QuestionIconSVG className="questionicon"/>
        <QuestionBlock className="questionblock"/>
        <QuestionText className="questiontext">
          <h3>{survey[index].question}</h3>
        </QuestionText>
        <AnswerContainer className="answerContainer">
          <ButtonContainer className="no" onClick={() => handleAnswer(index, 'no')}>
            <NoSVG/>
          </ButtonContainer>
          <ButtonContainer className="yes" onClick={() => handleAnswer(index, 'yes')}>
            <YesSVG/>
          </ButtonContainer>
        </AnswerContainer>
      </QContainer>
  )
}

export default QuestionCard
