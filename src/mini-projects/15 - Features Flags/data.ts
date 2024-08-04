type BooleanMap = {
	[key: string]: boolean;
};
const dummyApiResponse: BooleanMap = {
	showSwitchDarkAndLight: true,
	showTicTacToe: true,
	showRandomColor: true,
	showModal: true,
	showSearchAutoComplete: false,
};

function FlagFeatureServiceCall() {
	return new Promise<BooleanMap>((resolve, reject) => {
		if (dummyApiResponse)
			setTimeout(() => {
				return resolve(dummyApiResponse);
			}, 500);
		else reject('Some error occured! Please try again');
	});
}

export default FlagFeatureServiceCall;
