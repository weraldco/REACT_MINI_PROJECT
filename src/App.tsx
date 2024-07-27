// import Accordion from './mini-projects/1 - Accordion/Accordion';

// import RandomColor from './mini-projects/2 - Random Color Generator/RandomColorGenerator';

// import StarRating from './mini-projects/3 - StarRating/StarRating';

// import ImageSliderTwo from './mini-projects/4 - ImageSlider/ImageSliderTwo';

import LoadMore from './mini-projects/5 - LoadMore/LoadMore';
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

			<LoadMore limit={10} skip={10} />
		</>
	);
}

export default App;
