import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminData } from '../Actions/index';
import Content from '../Components/adminData';
import './admin.css'
import Error from './error'

const initialState = {
	item: '',
	dp: '',
	protein: "",
	carbs: "",
	fats: "",
	calories: "",
};

function Admin() {
	const [values, setValues] = useState(initialState);

	const onChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};
	const dispatch = useDispatch();
	function dispatcher(val) {
		dispatch(adminData(val));
		setValues(initialState)
	}

	const onSubmit = (event) => {
		event.preventDefault();
		dispatcher(values);
	};

	const auth = useSelector((state) => state.login);
	const data = useSelector((state) => state.adminData);
	return (
	 auth.username==="EvolvFit"?
		<div className='admin-div'>
			<div className='admin-dishes'>
				<div className='admin-categories'>
					<div>
						{data.map((d) => (
							<Content data={d} />
						))}
						{/* <Content data={data[0]} /> */}
						{/* <Content data={data[1]} /> */}
						{/* <Content data={data} /> */}
					</div>
				</div>
			</div>
			<div>
				<form className='admin-form' onSubmit={onSubmit}>
					<input
						className='label'
						type='text'
						name='item'
						placeholder='Add item'
						required
						onChange={onChange}
						value={values.item}
					/>
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
					<div className='Admin-BtnDiv'>
						<button className='Admin-Btn' type='submit'>
							Add
						</button>
					</div>
				</form>
			</div>
		</div>

		 :<div><Error/></div>
	);
}

export default Admin;
