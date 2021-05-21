import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Content from '../Components/HomeData';
import Search from '../images/searchLogo.svg';

const intialState = {
	name: 'Prashansa',
	protein: '67',
	carbs: '68',
	fats: '69',
	fav: false,
	calories: '12',
	dp: '',
};
function Home() {
	const myList = useSelector((state) =>  state.addList );
	const data = useSelector((state) => state.adminData);
	const [fav, setFav] = useState(false);
	const [search, setSecrch] = useState('');

	function searchChange(e) {
		setSecrch(e.target.value);
	}
	const onClickAll = () => {
		setFav(false);
	};

	const onClickFav = () => {
		setFav(true);
	};

	return (
		<div className='home-div'>
			<div className='dishes'>
				<div>
					<form>
						<div className=' search-bar'>
							<div className='search-bar-2'>
								<input
									className='search'
									type='text'
									name='search'
									placeholder='Search'
									value={search}
									onChange={searchChange}
									autoComplete='off'
								/>
								<button className='search-submit' type='submit'>
									<img style={{ width: '1.6rem' }} src={Search} />
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className='categories'>
					<div>
						<button
							onClick={onClickAll}
							style={fav === false ? { color: '#f93535' } : null}
						>
							All
						</button>
						<button
							className='fav'
							onClick={onClickFav}
							style={fav === true ? { color: '#f93535' } : null}
						>
							Favourites
						</button>
					</div>
					<div>
						{data.map((d) =>
							(fav === false || (fav === true && d.fav === true)) &&
							d.item.toLowerCase().includes(search.toLowerCase()) ? (
								<Content data={d} fav={fav} />
							) : null
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
