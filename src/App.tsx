// import Accordion from './mini-projects/1 - Accordion/Accordion';

// import HourlyWeather from './mini-projects/17 - WeatherApp/HourlyWeather';
// import WeatherApp from './mini-projects/17 - WeatherApp/WeatherApp';
// import WeeklyWeather from './mini-projects/17 - WeatherApp/WeeklyWeather';
import { Route, Routes } from 'react-router-dom';
import Navbar from './mini-projects/18 - RecipeApp/components/Navbar';
import Details from './mini-projects/18 - RecipeApp/pages/details/Details';
import Favorites from './mini-projects/18 - RecipeApp/pages/favorites/Favorites';
import RecipeApp from './mini-projects/18 - RecipeApp/pages/RecipeApp';
import Home from './mini-projects/6 - RecursiveNavMenu/pages/Home';

// import FetchCustomHook from './mini-projects/16 - CustomHooks/FetchCustomHook';
// import ModalClickOutside from './mini-projects/16 - CustomHooks/ModalClickOutside';
// import ScrollTopBottom from './mini-projects/16 - CustomHooks/ScrollTopBottom';
// import WindowSizeChanged from './mini-projects/16 - CustomHooks/SizeChangeHook';

// import Modal from './mini-projects/11 - Modal/Modal';
// import FeatureFlags from './mini-projects/15 - Features Flags';
// import FeatureFlagGlobalState from './mini-projects/15 - Features Flags/context';
// import RandomColor from './mini-projects/2 - Random Color Generator/RandomColorGenerator';

// import Tictactoe from './mini-projects/14 - TicTacToe/Tictactoe';
// import Demo from './useContext/Demo';

// import SwitchTheme from './mini-projects/8 - Switch Dark and Light/SwtichTheme';

// import RandomColor from './mini-projects/2 - Random Color Generator/RandomColorGenerator';

// import StarRating from './mini-projects/3 - StarRating/StarRating';

// import ImageSliderTwo from './mini-projects/4 - ImageSlider/ImageSliderTwo';

// import LoadMore from './mini-projects/5 - LoadMore/LoadMore';

// import SideMenu from './mini-projects/6 - RecursiveNavMenu/SideMenu';

// import QRCodeGenerator from './mini-projects/7 - QR Generator/QRCodeGenerator';
// import ScrollIndicator from './mini-projects/9  - Custom Scroll Indicator/ScrollIndicator';
// import Tabs from './mini-projects/10 - Tabs/Tabs';

// import Modal from './mini-projects/11 - Modal/Modal';

// import GithubProfile from './mini-projects/12 - GitHub Profile Finder/GithubProfile';

// import SearchAutocomplete from './mini-projects/13 - Search Autocomplete/SearchAutocomplete';

function App() {
	return (
		<>
			{/* <Accordion /> */}

			{/* <RandomColor /> */}

			{/* <StarRating /> */}

			{/* <ImageSliderTwo
				url={'https://picsum.photos/v2/list'}
				page={1}
				limit={10}
			/> */}

			{/* <LoadMore limit={10} /> */}

			{/* <SideMenu /> */}

			{/* <QRCodeGenerator /> */}

			{/* <SwitchTheme /> */}

			{/* <ScrollIndicator /> */}

			{/* <Tabs /> */}

			{/* <Modal /> */}

			{/* <GithubProfile /> */}

			{/* <SearchAutocomplete /> */}

			{/* <Tictactoe /> */}

			{/* <Demo /> */}

			{/* <FeatureFlagGlobalState>
				<FeatureFlags />
			</FeatureFlagGlobalState> */}

			{/* <FetchCustomHook /> */}
			{/* <ScrollTopBottom /> */}
			{/* <ModalClickOutside />
			<WindowSizeChanged /> */}

			{/* <WeeklyWeather /> */}
			<Navbar />
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/recipe-item/:id" element={<Details />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
