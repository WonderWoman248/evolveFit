import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Delete from '../images/delete.svg'
import Editform from './editForm'
import {del} from '../Actions/index'

function Content({ data }) {
    const dispatch = useDispatch();
	function dispatcher(val) {
		dispatch(del(val));
	}

    function onClickDelete() {
        dispatcher(data.item);
    }
    const [edit, setEdit] = useState(false);
	function onClickEdit() {

		setEdit(true)
	}

	// useEffect(() => { }, [data.fav])
    return (
        
        <div className='admin-content'>
            <div style={edit ? null : { display: 'none' }}>
                <Editform data={data} setEdit={setEdit}/>
            </div>
            
			<div className='admin-content-image'>
				<img style={{ width: '2rem' }} src={data.dp}></img>
			</div>
			<div className='content-name'>
				<div>{data.item}</div>
				<div>{(parseInt(data.protein)*4)+(parseInt(data.carbs)*4)+(parseInt(data.fats)*9)} Kcal</div>
			</div>
			<div className='admin-content-data'>
				<div>
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
			<div className='admin-delete-button'>
				<div onClick={onClickEdit} style={{cursor:'pointer'}}>Edit</div>
				<div>
					<img
						onClick={onClickDelete} style={{cursor:'pointer'}}
						style={{ width: '1.2rem' }}
						src={Delete}
					/>
				</div>
			</div>
		</div>
	);
}

export default Content;
