import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Actions';

function Login(props) {
    const user = {
        username: 'Bob',
		password: 'shahja',
    }
    const admin = {
        username: 'EvolvFit',
		password: '123@123',
    }
	const initialState = {
		username: '',
		password: '',
	};

	const dispatch = useDispatch()
	
	function dispatcher(val) {
		dispatch(login(val))
	}

	const [values, setValues] = useState(initialState);

	const onChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const onSubmit = (event) => {
        event.preventDefault();
        if (values.username === admin.username && values.password === admin.password)
            props.history.push('/admin')
        if (values.username === user.username && values.password === user.password)
			props.history.push('/')
		dispatcher(values)
	};

	return (
		<div className='loginFormDiv'>
			<form className='loginForm' onSubmit={onSubmit}>
				<input
					className='label'
					type='text'
					name='username'
					onChange={onChange}
					placeholder='Username'
					value={values.name}
					required
				></input>
				<br></br>
				<input
					className='label'
					onChange={onChange}
					type='password'
					value={values.resource}
					name='password'
                    placeholder='Password'
					required
				></input>
				<br></br>

				<div className='BtnDiv'>
					<button type='submit' className='submit Btn'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
