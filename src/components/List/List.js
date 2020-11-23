import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse, Card, CardBody } from 'reactstrap';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './List.css';

const Title = styled.h2`
	padding: 10px 0;
	margin: 0;
`;

const ListWrapper = styled.ul`
	list-style: none;
	text-align: left;
	padding: 0;
`;

const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 30px;
	border: 1px solid rgb(97, 218, 251);
	border-radius: 1rem;
	padding: 7px;
	margin-bottom: 5px;
	color: rgb(97, 218, 251);
`;

const Label = styled.span`
	font-weight: strong;
`;

const List = ({ items, title }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	const listItems = items.map((item) => (
		<ListItem key={item.label}>
			<Label>{item.label}</Label>
			{item.value}
		</ListItem>
	));

	const arrow = isOpen ? 'arrow-up' : 'arrow-down';

	return (
		<>
			<Card
				onClick={toggle}
				style={{
					backgroundColor: '#61dafb',
					color: 'white',
					marginTop: '30px',
					height: '70px',
					borderRadius: '1.5rem',
					border: 'none',
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'row',
					padding: '0 15px',
					alignItems: 'center',
					cursor: 'pointer',
				}}
			>
				<Title>{title}</Title>
				<ArrowForwardIosIcon className={arrow} />
			</Card>
			<Collapse isOpen={isOpen}>
				<Card style={{ border: 'none' }}>
					<CardBody style={{ border: 'none' }}>
						<ListWrapper>{listItems}</ListWrapper>
					</CardBody>
				</Card>
			</Collapse>
		</>
	);
};

export default List;
