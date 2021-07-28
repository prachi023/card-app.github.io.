import React from 'react';
import { StyledCard, StyledBtn } from './styles';
import CardDataContext from '../../context/card-data.context';

export default function Card({cardName, pos, currentIndex} : any) {
    const {listData, setListData} = React.useContext(CardDataContext);
    const shiftCard = (event: any, pos: number, direction: string) => {
        const value = listData[pos][currentIndex];
        const targetColumn = direction === 'left' ? pos - 1 : pos + 1;
        let newList = {...listData};
        newList[targetColumn].push(value);
        newList[pos].splice(currentIndex, 1);
        window.localStorage.setItem('listData', JSON.stringify(newList));
        setListData(newList);
    };

    return (<StyledCard>
        { !!pos && pos > 0 &&
            <StyledBtn onClick={event => shiftCard(event, pos, 'left')}>{` < `}</StyledBtn>
        }
        <span>{cardName}</span>
        { pos !== 3 &&
            <StyledBtn onClick={event => shiftCard(event, pos, 'right')}>{` > `}</StyledBtn>
        }
    </StyledCard>);
}
