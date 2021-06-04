import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';

const User = () => {
	const [users, setUsers] = useState();
	const [r, setR] = useState(0);
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [email, setEmail] = useState('');

	const handleOpen = ({ mailvalue }) => {
		setOpen(true);
		setEmail(mailvalue);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const deletefunc = async () => {
		console.log(email);

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		await setLoading(true);
		const res = await axios({
			method: 'DELETE',
			url: 'https://mighty-bastion-04883.herokuapp.com/api/user/delete',
			data: {
				email: email,
			},
			config,
		});
		await alert(res.data);
		window.location.reload();
	};

	useEffect(() => {
		axios
			.get('https://mighty-bastion-04883.herokuapp.com/api/user/all')
			.then((res) => {
				setUsers(res.data);
				setR(1);
			});
	}, []);
	return (
		<div>
			<table style={{ marginTop: '40px', marginBottom: '40px', width: '70vw' }}>
				<tr style={{ textAlign: 'center' }}>
					<th>UserName</th>
					<th>Email</th>
					<th>Delete</th>
				</tr>
				{r == 1
					? users.map((e, i) => {
							return (
								<tr key={i}>
									<td>{e.name}</td>
									<td>{e.email}</td>
									<td>
										<Button
											onClick={() => handleOpen({ mailvalue: e.email })}
											color='primary'
											variant='contained'
										>
											Delete
										</Button>
									</td>
								</tr>
							);
					  })
					: 'loading...'}
			</table>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				{loading ? (
					'Loading...'
				) : (
					<Fragment>
						<DialogTitle id='alert-dialog-title'>
							{'Are you sure that you want to delete user with email ' + email}
						</DialogTitle>
						<DialogActions>
							<Button
								onClick={() => handleClose()}
								color='primary'
								variant='contained'
							>
								No
							</Button>
							<Button
								onClick={() => deletefunc()}
								color='primary'
								variant='contained'
							>
								Yes
							</Button>
						</DialogActions>
					</Fragment>
				)}
			</Dialog>
		</div>
	);
};

export default User;
