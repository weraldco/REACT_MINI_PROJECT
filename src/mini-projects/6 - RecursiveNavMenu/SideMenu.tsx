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
				<Route path="/settings" element={<Settings />} />
			</Routes>
			<MenuItem menus={menus} />
		</>
	);
}

type MenuProps = {
	to: string;
	label: string;
};
type MenuItemsProps = {
	menus: MenuProps[];
};

function MenuItem({ menus }: MenuItemsProps) {
	function recursionMenu(menu: MenuProps) {
		return (
			<>
				<div key={menu.label}>{menu.label}a</div>
			</>
		);
	}
	return <>{menus.map((menu) => recursionMenu(menu))}</>;
}
