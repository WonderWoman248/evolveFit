import React, { useEffect, useState } from 'react';
import Favfalse from '../images/favfalse.svg';
import Favtrue from '../images/favtrue.svg';
import Add from '../images/add.svg';
import { useDispatch } from 'react-redux';
import { addList } from '../Actions/index'
import {edit} from '../Actions/index'

function Content({ data }) {
	const [fav,setFav] = useState(data.fav)
	var calories = (parseInt(data.protein)*4)+(parseInt(data.carbs)*4)+(parseInt(data.fats)*9)
	
	// useEffect(() => { }, [data.fav])
	const dispatch = useDispatch();
	function dispatcher(val) {
		dispatch(edit(val));
	}

	const togglefav = (event) => {
		setFav(!fav)
        dispatcher({...data,fav:!fav});
	};
	return (
		<div className='content'>
			<div className='content-image'>
				<img style={{ width: '2rem' }} src={data.dp}></img>
			</div>
			<div className='content-name'>
				<div>{data.item}</div>
				<div>{calories} Kcal</div>
			</div>
			<div className='content-data'>
				<div>
					{''}
					<div>Protein:</div> <div>{data.protein} gm</div>
				</div>
				<div>
					<div>Carbs:</div>
					<div>{data.carbs} gm</div>
				</div>
				<div>
					<div>Fats:</div>
					<div>{data.fats} gm</div>
				</div>
			</div>
			<div>
				<div>
					<img
						onClick={togglefav}
						style={{ width: '1.2rem' }}
						src={fav ? Favtrue : Favfalse}
					/>
				</div>
			</div>
		</div>
	);
}

export default Content;
