import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { edit } from '../Actions/index'

function EditForm({ data, setEdit }) {
    
	const [values, setValues] = useState(data);
	function onChange(e) {
		setValues({ ...values, [e.target.name]: e.target.value });
	}
	const dispatch = useDispatch();
	function dispatcher(val) {
		dispatch(edit(val));
	}

	const onSubmit = (event) => {
		event.preventDefault();
        dispatcher(values);
        setEdit(false);
	};
	return (
		<div className='editForm'>
			<form className='loginForm' onSubmit={onSubmit}>
				<input
					className='label'
					type='text'
					name='dp'
					placeholder='Add pic url'
					required
					onChange={onChange}
					value={values.dp}
				/>
				<input
					className='label'
					type='number'
					name='protein'
					placeholder='Protein'
					required
					onChange={onChange}
					value={values.protein}
				/>
				<input
					className='label'
					type='number'
					name='carbs'
					placeholder='Carbs'
					required
					onChange={onChange}
					value={values.carbs}
				/>
				<input
					className='label'
					type='number'
					name='fats'
					placeholder='Fats'
					required
					onChange={onChange}
					value={values.fats}
				/>
				<div className='BtnDiv'>
					<button className='Btn submit' type='submit'>
						Add
					</button>
				</div>
			</form>
		</div>
	);
}
export default EditForm;
