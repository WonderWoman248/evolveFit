import Avocado from '../images/avocado.png';
const initialState = [
	{
		item: 'Avocado',
		dp: Avocado,
		protein: '8',
		carbs: '4',
		fats: '3',
		fav: false,
	},
	{
		item: 'Orange',
		dp: 'https://banner2.cleanpng.com/20180411/zqe/kisspng-orange-fruit-cartoon-clip-art-orange-5ace9445ef9159.0903569915234878139813.jpg',
		protein: '7',
		carbs: '8',
		fats: '3',
		fav: true,
	},
	{
		item: 'Apple',
		dp: 'https://www.nicepng.com/png/full/2-25497_png-black-and-white-stock-activities-free-dapper.png',
		protein: '12',
		carbs: '6',
		fats: '3',
		fav: false,
	},
	{
		item: 'Banana',
		dp: 'https://thumbs.dreamstime.com/z/cute-banana-superhero-26273739.jpg',
		protein: '2',
		carbs: '5',
		fats: '3',
		fav: true,
	},
	{
		item: 'Broccoli',
		dp: 'https://cdn.friendlystock.com/wp-content/uploads/2018/05/4-cute-broccoli-mascot-waving-cartoon-clipart-600x724.jpg',
		protein: '5',
		carbs: '9',
		fats: '3',
		fav: true,
	},
	{
		item: 'Noodles',
		dp: 'https://www.vhv.rs/dpng/d/449-4490848_kawaii-bowl-of-noodles-clipart-png-download-cute.png',
		protein: '1',
		carbs: '10',
		fats: '15',
		fav: false,
	},
];

function filterState(s, payload) {
	return s.item === payload;
}

const adminData = (state = initialState, action) => {
	switch (action.type) {
		case 'adminData':
			state.unshift(action.payload);
			return state;

		case 'edit':
			state.map((s) => {
				if (action.payload.item === s.item) {
					s.protein = action.payload.protein;
					s.carbs = action.payload.carbs;
					s.fats = action.payload.fats;
					s.dp = action.payload.dp;
					s.fav = action.payload.fav;
				}
			});
			return state;

		case 'del':
			console.log(action.payload);
			const newState = state.filter((s) => !(s.item == action.payload));
			return newState;
		default:
			return state;
	}
};

export default adminData;
