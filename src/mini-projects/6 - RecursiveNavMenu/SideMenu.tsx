/* eslint-disable no-mixed-spaces-and-tabs */
import { spreadElement } from '@babel/types';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { menus } from './data';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

export default function SideMenu() {
	// const [displayChildrenMenu, setDisplayChildrenMenu] = useState({});
	function handleOnClick() {}
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
			<MenuList menus={menus} handleClick={handleOnClick} />
		</>
	);
}

type ChildrenT = {
	to: string;
	label: string;
};
type MenuProps = {
	to: string;
	label: string;
	children?: ChildrenT[];
};
type MenuListProps = {
	menus: MenuProps[];
	handleClick(): void;
};
type MenuItemsProps = {
	menu: MenuProps;
	handleClick(): void;
};

function MenuList({ menus, handleClick }: MenuListProps) {
	return (
		<>
			<ul>
				{menus && menus.length > 0
					? menus.map((menu) => (
							<MenuItem
								key={menu.label}
								menu={menu}
								handleClick={handleClick}
							/>
					  ))
					: null}
			</ul>
		</>
	);
}

function MenuItem({ menu, handleClick }: MenuItemsProps) {
	return (
		<>
			<li key={menu.label} onClick={handleClick}>
				<div className="flex">
					<Link to="/">{menu.label}</Link>

					{menu && menu.children && menu.children.length > 0 ? (
						<span>+</span>
					) : null}
				</div>

				{menu.children && menu.children.length > 0 ? (
					<MenuList menus={menu.children} handleClick={handleClick} />
				) : null}
			</li>
		</>
	);
}
