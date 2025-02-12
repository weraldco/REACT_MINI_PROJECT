import { FC } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accordion from './mini-projects/1 - Accordion/Accordion';
import Tabs from './mini-projects/10 - Tabs/Tabs';
import Modal from './mini-projects/11 - Modal/Modal';
import GithubProfile from './mini-projects/12 - GitHub Profile Finder/GithubProfile';
import SearchAutocomplete from './mini-projects/13 - Search Autocomplete/SearchAutocomplete';
import Tictactoe from './mini-projects/14 - TicTacToe/Tictactoe';
// import FeatureFlags from './mini-projects/15 - Features Flags';
import Home from './components/Home';
import FetchCustomHook from './mini-projects/16 - CustomHooks/FetchCustomHook';
import ModalClickOutside from './mini-projects/16 - CustomHooks/ModalClickOutside';
import ScrollTopBottom from './mini-projects/16 - CustomHooks/ScrollTopBottom';
import WindowSizeChanged from './mini-projects/16 - CustomHooks/SizeChangeHook';
import WeatherApp from './mini-projects/17 - WeatherApp/WeatherApp';
import RandomColor from './mini-projects/2 - Random Color Generator/RandomColorGenerator';
import StarRating from './mini-projects/3 - StarRating/StarRating';
import LoadMore from './mini-projects/5 - LoadMore/LoadMore';
import SideMenu from './mini-projects/6 - RecursiveNavMenu/SideMenu';
import QRCodeGenerator from './mini-projects/7 - QR Generator/QRCodeGenerator';
import SwitchTheme from './mini-projects/8 - Switch Dark and Light/SwtichTheme';
import ScrollIndicator from './mini-projects/9  - Custom Scroll Indicator/ScrollIndicator';
import Demo from './useContext/Demo';

interface Props {}

const App: FC<Props> = () => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-row">
				<div className="fixed top-0 bottom-0 left-0 bg-gray-800 text-white py-4">
					<NavLink to="/">
						<h1 className="text-2xl font-bold text-teal-600">Test</h1>
					</NavLink>
					<Navbar />
				</div>
				<div className="flex items-center justify-center w-full ml-52">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/accordion" element={<Accordion />} />
						<Route path="/random-color" element={<RandomColor />} />
						<Route path="/star-rating" element={<StarRating />} />
						<Route path="/load-more" element={<LoadMore limit={10} />} />
						<Route path="/recursive-menu" element={<SideMenu />} />
						<Route path="/qr-generator" element={<QRCodeGenerator />} />
						<Route path="/switch-dark-light" element={<SwitchTheme />} />
						<Route
							path="/custom-scroll-indicator"
							element={<ScrollIndicator />}
						/>
						<Route path="/tabs" element={<Tabs />} />
						<Route path="/modal" element={<Modal />} />
						<Route path="/github-profile-finder" element={<GithubProfile />} />
						<Route
							path="/search-autocomplete"
							element={<SearchAutocomplete />}
						/>
						<Route path="/tictactoe" element={<Tictactoe />} />
						{/* <Route path="/feature-flags" element={<FeatureFlags />} /> */}
						<Route
							path="/custom-hooks/fetch-custom-hook"
							element={<FetchCustomHook />}
						/>
						<Route
							path="/custom-hooks/modal-click-outside"
							element={<ModalClickOutside />}
						/>
						<Route
							path="/custom-hooks/scroll-top-bottom"
							element={<ScrollTopBottom />}
						/>
						<Route
							path="/custom-hooks/size-change"
							element={<WindowSizeChanged />}
						/>
						<Route path="/weather-app" element={<WeatherApp />} />
						<Route path="/usecontext-test" element={<Demo />} />

						{/* <Route path="/redux-test" element={</>} /> */}
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default App;
