import React from 'react';
import { Page, Document, BlobProvider, Font, PDFViewer } from '@react-pdf/renderer';
import styled from '@react-pdf/styled-components';
import { survey } from '../scene-3/QuestionCard'
import light from '../../fonts/ATCShowpad-Light.ttf'
import regular from '../../fonts/ATCShowpad-Regular.ttf'
import logo from '../../assets/scene-5/full-logo.png'

//add showpad fonts
Font.register({
  family: 'Showpad-light',
  src: light,
})
Font.register({
  family: 'Showpad-regular',
  src: regular,
})


//styling document
const Header = styled.View`
  width: 80%;
  margin: 20px auto;
`
const Logo = styled.Image`
  width: 100px;
  margin: 0 auto;
`
const Title = styled.Text`
  font-family: 'Showpad-regular';
  color: #2D2E83;
  text-align: center;
  font-size: 20px;
`
const Section = styled.View`
  width: 80%;
  border: 1px solid #2D2E83;
  padding: 15px 20px;
  margin: 10px auto;
  opacity: 0.3;
`
const Question = styled.Text`
  font-family: 'Showpad-light';
  font-size: 14px;
  margin-bottom: 10px;
  opacity: 1;
`
const Answer = styled.Text`
  font-family: 'Showpad-regular';
  font-size: 14px;
  color: #2D2E83;
  opacity: 1;
`

//pdf document
const MyDocument = () => (
    <Document>
      <Page>
        <Header>
          <Logo src={logo} />
          <Title>Results Sales Survey</Title>
        </Header>
        <Section>
          <Question>{survey[0].question}</Question>
          <Answer>{survey[0].answer}</Answer>
        </Section>
        <Section>
          <Question>{survey[1].question}</Question>
          <Answer>{survey[1].answer}</Answer>
        </Section>
        <Section>
          <Question>{survey[2].question}</Question>
          <Answer>{survey[2].answer}</Answer>
        </Section>
        <Section>
          <Question>{survey[3].question}</Question>
          <Answer>{survey[3].answer}</Answer>
        </Section>
        <Section>
          <Question>{survey[4].question}</Question>
          <Answer>{survey[4].answer}</Answer>
        </Section>
        <Section>
          <Question>{survey[5].question}</Question>
          <Answer>{survey[5].answer}</Answer>
        </Section>
      </Page>
      <Page style={{ paddingTop: '50px;' }}>
        <Section>
          <Question>{survey[6].question}</Question>
          <Answer>{survey[6].answer}</Answer>
        </Section>
        <Section>
          <Question>{survey[7].question}</Question>
          <Answer>{survey[7].answer}</Answer>
        </Section>
        <Section>
          <Question>{survey[8].question}</Question>
          <Answer>{survey[8].answer}</Answer>
        </Section>
        <Section>
          <Question>{survey[9].question}</Question>
          <Answer>{survey[9].answer}</Answer>
        </Section>
        <Section>
          <Question>{survey[10].question}</Question>
          <Answer>{survey[10].answer}</Answer>
        </Section>
        <Section>
          <Question>{survey[11].question}</Question>
          <Answer>{survey[11].answer}</Answer>
        </Section>
      </Page>
    </Document>
);

const handleClick = (blob) =>{
  const upload = { file: blob, filename: 'hank_results.pdf'}
  const statusEmitter = window.ShowpadLib.upload(upload);

  console.log(upload);

  statusEmitter.on('queued', () => {
    window.ShowpadLib.displayToast({
      type: 'info',
      text: 'Queued'
    })
  })
  statusEmitter.on('processing', () => {
    window.ShowpadLib.displayToast({
      type: 'info',
      text: 'Processing'
    })
  })
  statusEmitter.on('success', () => {
    window.ShowpadLib.displayToast({
      type: 'info',
      text: 'Success'
    })
  })
}

function PDFLink() {
  return (
      <div>
          <BlobProvider document={<MyDocument />}>
            {({ blob }) => {
              return <div className="results" onClick={() => handleClick(blob)} >download results</div>
            }}
          </BlobProvider>
      </div>
  );
}

export default PDFLink;
