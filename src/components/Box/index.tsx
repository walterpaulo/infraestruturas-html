import React from 'react';
import { Container, Item, Avatar } from './style';
import { Tecnlogies } from '../../data/Tecnlogies';

function Box() {
    return (
        <Container>
            { Tecnlogies.map((tecnology, key) =>(
                <Item key={key}>
                   <h3>{tecnology.title}</h3>
                   <Avatar>
                   <img alt={tecnology.name} src={tecnology.src} width="100px" height="auto"></img>
                   </Avatar>
                <h3>{tecnology.name}</h3> 
                </Item>
            ))}
        </Container>
    );
}

export default Box;