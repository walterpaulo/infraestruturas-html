import React from 'react';
import { Container, Item } from './style';
import { Tecnlogies } from '../../data/Tecnlogies';

function Box() {
    return (
        <Container>
            { Tecnlogies.map((tecnology, key) =>(
                <Item key={key}>
                   <h3>{tecnology.title}</h3>
                <image>{tecnology.src}</image>
                <h3>{tecnology.name}</h3> 
                </Item>
            ))}
        </Container>
    );
}

export default Box;