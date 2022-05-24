import React from 'react';
import { Container, Item } from './style';
import { Tecnlogies } from '../../data/Tecnlogies';

function Box() {
    return (
        <Container>
            { Tecnlogies.map((tecnology, key) =>(
                <Item key={key}>
                   <h3>{tecnology.title}</h3>
                   <img alt={tecnology.name} src={tecnology.src} width="100px" height="auto"></img>
                <h3>{tecnology.name}</h3> 
                </Item>
            ))}
        </Container>
    );
}

export default Box;