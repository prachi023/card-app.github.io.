import React from 'react';
import Card from './card.component';

export default function CardList({cardsInfo, colIndex}: any) {
    return (
        <div>
            {cardsInfo.map((card: string, index: number) => (
                <Card key={`${card}_id_${index}`} cardName={card} pos={colIndex} currentIndex={index}></Card>
            ))}
        </div>
    );
}
