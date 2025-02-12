import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {}

const Navbar: FC<Props> = () => {
	const style = `hover:bg-blue-400 px-4 py-1 duration-200`;
	const [isSubMenu, setIsSubMenu] = useState(false);
	const handleShowSubMenu = () => {
		setIsSubMenu((prev) => !prev);
	};
	return (
		<div className="flex flex-col z-50 ">
			<NavLink className={style} to="/accordion">
				Accordion
			</NavLink>
			<NavLink className={style} to="/random-color">
				Random Color
			</NavLink>
			<NavLink className={style} to="/star-rating">
				Star Rating
			</NavLink>
			<NavLink className={style} to="/load-more">
				Load More
			</NavLink>
			<NavLink className={style} to="/recursive-menu">
				Recursive Menu
			</NavLink>
			<NavLink className={style} to="/qr-generator">
				QR Generator
			</NavLink>
			<NavLink className={style} to="/switch-dark-light">
				Switch Dark Light
			</NavLink>
			<NavLink className={style} to="/custom-scroll-indicator">
				Custom Scroll Indicator
			</NavLink>
			<NavLink className={style} to="/tabs">
				Tabs
			</NavLink>
			<NavLink className={style} to="/modal">
				Modal
			</NavLink>
			<NavLink className={style} to="/github-profile-finder">
				Github Profile Finder
			</NavLink>
			<NavLink className={style} to="/search-autocomplete">
				Search Autocomplete
			</NavLink>
			<NavLink className={style} to="/tictactoe">
				Tic Tac Toe
			</NavLink>
			{/* <NavLink className={style} to="/feature-flags">Feature Flags</NavLink> */}

			<div
				onClick={handleShowSubMenu}
				className="text-green-300 px-4 py-1 hover:bg-blue-400"
			>
				Custom Hooks
			</div>
			{isSubMenu && (
				<div className="flex flex-col pl-5">
					<NavLink className={style} to="/custom-hooks/fetch-custom-hook">
						Data Fetcher
					</NavLink>
					<NavLink className={style} to="/custom-hooks/modal-click-outside">
						Modal Click Outside
					</NavLink>
					<NavLink className={style} to="/custom-hooks/scroll-top-bottom">
						Scroll Top Bottom
					</NavLink>
					<NavLink className={style} to="/custom-hooks/size-change">
						Size Changed
					</NavLink>
				</div>
			)}

			<NavLink className={style} to="/weather-app">
				Weather App
			</NavLink>
			<NavLink className={style} to="/usecontext-test">
				Use Context Test
			</NavLink>
		</div>
	);
};

export default Navbar;
