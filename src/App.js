import React, {useState} from 'react'
import { QuestionProvider} from "./components/QuestionsContext";

import styled from 'styled-components'
import Hank from './components/Hank'
import Scene1 from './components/scene1'
import Scene4 from "./components/scene4";
import Scene2 from "./components/scene2"
import Scene3 from './components/scene3'
import Scene5 from './components/scene5'
import Controls from './components/controls'

const Page = styled.div`
  height: 100000px;
`

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
`

const Blackout = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 20;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;

  &.blackoutToggle {
  opacity: 1; 
  }
`

function App() {
  console.log('loaded App');

  const [sceneObject, setSceneObject] = useState({
    current: 0,
    previous: 0
  })
  
  let scene
  let i = sceneObject.current;
  switch (i) {
    case 0:
      scene = <Scene1 currentScene={sceneObject.current} prevScene={sceneObject.previous} changeNumber={(x) => setSceneObject(x)}/>
      break;
    case 1:
      scene = <Scene2 currentScene={sceneObject.current} prevScene={sceneObject.previous} changeNumber={(x) => setSceneObject(x)}/>
      break;
    case 2:
      scene = <Scene3 currentScene={sceneObject.current} prevScene={sceneObject.previous} changeNumber={(x) => setSceneObject(x)}/>
      break;
    case 3:
      scene = <Scene4 currentScene={sceneObject.current} prevScene={sceneObject.previous} changeNumber={(x) => setSceneObject(x)}/>
      break;
    case 4:
        scene = <Scene5 currentScene={sceneObject.current} prevScene={sceneObject.previous} changeNumber={(x) => setSceneObject(x)}/>
        break;
    default:
      scene = <Scene1 currentScene={sceneObject.current} prevScene={sceneObject.previous} changeNumber={(x) => setSceneObject(x)}/>
  }
  if (scene === undefined) {
    scene = <Scene1 currentScene={sceneObject.current} prevScene={sceneObject.previous} changeNumber={(x) => setSceneObject(x)}/>
  }

  return (
      <div className="App">
        <QuestionProvider>
          <Page>
            <MainContainer>
              <Blackout className="blackout"/>
              {scene}
              <Hank/>
              <Controls />
            </MainContainer>
          </Page>
        </QuestionProvider>
      </div>
  );
}

export default App;