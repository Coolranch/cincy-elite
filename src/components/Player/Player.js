import React from 'react';
import BasketballPlayer from '../../assets/basketball-player.svg';
import { Avatar, Container, First, Jersey, Last, Name, NamePlate, PlayerContainer } from './Player.styles';

const Player = ({ player }) => {
    const { firstname, jersey, lastname } = player;

    return (
        <Container>
            <PlayerContainer>
                <Avatar src={BasketballPlayer} />
                <NamePlate>
                    <Name>
                        <First>{firstname}</First>
                        <Last>{lastname}</Last>
                    </Name>
                    <Jersey>{jersey}</Jersey>
                </NamePlate>
            </PlayerContainer>
        </Container>
    );
};

export default Player;