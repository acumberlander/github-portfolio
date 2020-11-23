import React from 'react';
import logo from '../../images/github-logo.png';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
	background-color: #282c34;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const Logo = styled.img`
	height: 64px;
	pointer-events: none;
`;

const Header = () => {
	return (
		<HeaderWrapper className="App-header">
			<Logo src={logo} className="App-logo" alt="logo" />
			<h1>My Github Portfolio</h1>
		</HeaderWrapper>
	);
};

export default Header;
