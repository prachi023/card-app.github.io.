import React, { ChangeEvent, useState } from 'react';
import CardList from '../card/cards-list.component';
import { members } from '../../config/config';
import { StyledList, Wrapper, StyledHeader, StyledButton, StyledFooter, StyledConfirmButton, StyledInput, StyledLabel, StyledHeading } from './styles';
import Modal from 'react-modal';
import CardDataContext from '../../context/card-data.context';
import { ContextState } from '../../context/card-data.context';

const Container = () => {

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			boxShadow: '0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)'
		},
	};


	const [modalIsOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const [newListItem, setListItem] = useState('');

	const savedListData = window.localStorage.getItem("listData");
	const initListData: Array<Array<string>>= typeof savedListData === 'string' ? JSON.parse(savedListData) : new Array(4).fill([]).map(() => new Array(0));
	const [listData, setListData] = useState<string[][]>(initListData);

	const value: ContextState = {listData, setListData};

	const closeModal = () => {
		setListItem("");
		setIsOpen(false);
	}

	const openModal = (index: number) => {
		setIsOpen(true);
		setActiveIndex(index);
	}

	const handleAddList = (index: number) => {
		console.log('list added to', index);
		openModal(index);
	}

	const updateDialogText = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
		setListItem(event.target.value);
	}

	const updateList = () => {
		console.log(newListItem);
		if (newListItem !== '') {
			console.log('newList', listData);
			const newList: Array<Array<string>> = listData;
			newList[activeIndex].push(newListItem);
			setListData(newList);
			window.localStorage.setItem('listData', JSON.stringify(newList));
		}
		setListItem("");
		setIsOpen(false);
	};

	return (<Wrapper>
		<CardDataContext.Provider value={value}>
		{members.map((member, index: number = 0) => {
			return <StyledList>
				<StyledHeader color={member.hexCode}>{member.name}</StyledHeader>
				<CardList cardsInfo={listData[index]} colIndex={index}></CardList>
				<StyledButton onClick={() => handleAddList(index)}>Add a card</StyledButton>
			</StyledList>
		})}
		
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Example Modal"
			style={customStyles}
		>
			<StyledHeading>Add a card in team {members[activeIndex].name}</StyledHeading>
			<StyledLabel htmlFor='cardTxt'>Enter card value:</StyledLabel>
			<StyledInput id='cardTxt' onBlur={(event) => updateDialogText(event)}></StyledInput>
			<StyledFooter>
				<StyledConfirmButton onClick={updateList}>ok</StyledConfirmButton>
				<StyledConfirmButton onClick={closeModal}>close</StyledConfirmButton>
			</StyledFooter>
		</Modal>

		</CardDataContext.Provider>
	</Wrapper>);
}

export default Container;
