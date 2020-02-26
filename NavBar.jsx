import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = ({ user }) => {
	// const user = {
	// 	_id: 'ujh7ue28ebjnbx37s8wsw39sw89c',
	// 	name: 'William Sarfat'
	// };

	const [ expanded, setExpanded ] = useState(false);
	const clicked = () => setExpanded(false);

	const brand = 'Dyno Astra';

	const configNavDropDown = [
		{
			title: 'Dyno',
			item: [ { title: 'EFI', href: 'qqqq' }, { title: 'ESA', href: 'vvvv' }, { title: 'ECU', href: 'fff' } ]
		}

		// {
		// 	title: 'Example 1',
		// 	item: [
		// 		{ title: 'Example 1.1', href: 'example1-1' },
		// 		{ title: 'Example 1.2', href: 'example1-2' },
		// 		{ title: 'Example 1.3', href: 'example1-3' },
		// 		{ title: 'Example 1.4', href: 'example1-4' }
		// 	]
		// },
		// {
		// 	title: 'Example 2',
		// 	item: [
		// 		{ title: 'Example 2.1', href: 'example2-1' },
		// 		{ title: 'Example 2.2', href: 'example2-2' },
		// 		{ title: 'Example 2.3', href: 'example2-3' },
		// 		{ title: 'Example 2.4', href: 'example2-4' }
		// 	]
		// }
	];

	const configNavLink = [
		{ item: { title: 'About', href: 'about' } }
		// { item: { title: 'Example 1', href: 'example1' } },
		// { item: { title: 'Example 2', href: 'example2' } },
		// { item: { title: 'Example 3', href: 'example3' } }
	];

	const navLink = (configData) => {
		return (
			<React.Fragment>
				{configData &&
					configData.map((list) => (
						<Nav.Link key={configData.indexOf(list)} as={Link} to={`/${list.item.href}`} onClick={clicked}>
							{list.item.title}
						</Nav.Link>
					))}
			</React.Fragment>
		);
	};

	const navDropDown = (configData) => {
		return (
			<React.Fragment>
				{configData &&
					configData.map((list) => (
						<NavDropdown key={configData.indexOf(list)} title={configData[configData.indexOf(list)].title}>
							{list.item.map((item) => (
								<React.Fragment key={list.item.indexOf(item)}>
									<NavDropdown.Item as={Link} to={`/${item.href}`} onClick={clicked}>
										{item.title}
									</NavDropdown.Item>
									<NavDropdown.Divider />
								</React.Fragment>
							))}
						</NavDropdown>
					))}
			</React.Fragment>
		);
	};

	const userNavLink = (userData) => {
		return (
			<React.Fragment>
				{userData && (
					<Nav.Link as={Link} to={`/${userData._id}`} onClick={clicked}>
						{userData.name}
					</Nav.Link>
				)}
				{!userData && (
					<React.Fragment>
						<Nav.Link as={Link} to="/login" onClick={clicked}>
							Login
						</Nav.Link>
						<Nav.Link as={Link} to="/register" onClick={clicked}>
							Register
						</Nav.Link>
					</React.Fragment>
				)}
			</React.Fragment>
		);
	};

	return (
		<Navbar expanded={expanded} expand="lg" bg="dark" variant="dark">
			<Navbar.Brand as={Link} to="/" onClick={clicked}>
				{brand}
			</Navbar.Brand>
			<Navbar.Toggle
				onClick={() => setExpanded(expanded ? false : 'expanded')}
				aria-controls="responsive-navbar-nav"
			/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					{userNavLink(user)}
					{navDropDown(configNavDropDown)}
					{navLink(configNavLink)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
