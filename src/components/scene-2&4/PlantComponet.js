import React from 'react';
import styled from 'styled-components'

import PlantOne from '../../assets/scene-2/Plant4.png';

const PlantLayer = styled.div`
  position: absolute;
  bottom: 9.3em;

.plant{
 position: absolute;
    width: 11.2em;
 }
`

const Plant = (props) => {

    return(
        <PlantLayer className={props.passClass} >
            <img src={PlantOne} className="plant" alt=""/>
        </PlantLayer>
        )
};

export default Plant;