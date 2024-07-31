/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { menus } from './data';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

export default function SideMenu() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/profile/:id" element={<Profile />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
			<MenuList menus={menus} />
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
};
type MenuItemsProps = {
	menu: MenuProps;
};

function MenuList({ menus }: MenuListProps) {
	return (
		<>
			<ul>
				{menus && menus.length > 0
					? menus.map((menu) => <MenuItem key={menu.label} menu={menu} />)
					: null}
			</ul>
		</>
	);
}

function MenuItem({ menu }: MenuItemsProps) {
	type myObject = {
		[label: string]: boolean;
	};

	const [displayCurrentChildren, setDisplayCurrentChildren] =
		useState<myObject>({});

	function handleToggleClick(label: string) {
		setDisplayCurrentChildren({
			...displayCurrentChildren,
			[label]: !displayCurrentChildren[label],
		});
	}

	return (
		<>
			<li key={menu.label}>
				<div className="flex gap-10">
					<Link to={`/${menu.label}`}>{menu.label}</Link>

					{menu && menu.children && menu.children.length > 0 ? (
						<span onClick={() => handleToggleClick(menu.label)}>+</span>
					) : null}
				</div>

				{menu.children &&
				menu.children.length > 0 &&
				displayCurrentChildren[menu.label] ? (
					<MenuList menus={menu.children} />
				) : null}
			</li>
		</>
	);
}
