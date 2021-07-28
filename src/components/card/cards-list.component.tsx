import React from 'react';
import Card from './card.component';
import { ListWrapper } from './styles';

export default function CardList({cardsInfo, colIndex}: any) {
    return (
        <ListWrapper>
            {cardsInfo.map((card: string, index: number) => (
                <Card cardName={card} pos={colIndex} currentIndex={index}></Card>
            ))}
        </ListWrapper>
    );
}
