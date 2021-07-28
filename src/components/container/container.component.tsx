import React, { ChangeEvent, useState } from 'react';
import CardList from '../card/cards-list.component';
import { members } from '../../config/config';
import { StyledList, Wrapper, StyledHeader, StyledButton, StyledFooter, StyledConfirmButton, StyledInput, StyledLabel, StyledHeading } from './styles';
import Modal from 'react-modal';
import CardDataContext from '../../context/card-data.context';
import { ContextState } from '../../context/card-data.context';

const Container = () => {

	// custom style for react-modal
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


	// initialize state for dialog box
	const [modalIsOpen, setIsOpen] = useState(false);

	//initialize state for setting active index
	const [activeIndex, setActiveIndex] = useState(0);

	//initialize state for listItem data
	const [newListItem, setListItem] = useState('');

	// initialze with listData already present in localstorage
	const savedListData = window.localStorage.getItem("listData");
	const initListData: Array<Array<string>>= typeof savedListData === 'string' ? JSON.parse(savedListData) : new Array(4).fill([]).map(() => new Array(0));
	const [listData, setListData] = useState<string[][]>(initListData);

	// use context for retrieving data
	const value: ContextState = {listData, setListData};

	// close dialog box prompt
	const closeModal = () => {
		setListItem("");
		setIsOpen(false);
	}

	// open dialog box prompt for user
	const openModal = (index: number) => {
		setIsOpen(true);
		setActiveIndex(index);
	}

	// HandleAddList callback function on click of OK button
	const handleAddList = (index: number) => {
		openModal(index);
	}

	// Save the text from the input box
	const updateDialogText = (event: ChangeEvent<HTMLInputElement>) => {
		setListItem(event.target.value);
	}

	// Update List on adding a card
	const updateList = () => {
		if (newListItem !== '') {
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
			return <StyledList key={`${member.name}_id_${index}`}>
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
