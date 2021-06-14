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
import ReactPaginate from 'react-paginate';
import '../../Pagination/Pagination.css';
import './User.css';

const User = () => {
	const [users, setUsers] = useState();
	const [r, setR] = useState(0);
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [email, setEmail] = useState('');

	//pagination
	const [pageNumber, setPageNumber] = useState(0);
	const usersPerPage = 3;
	const pagesVisited = pageNumber * usersPerPage;
	const [pageCount, setPageCount] = useState(0);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

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
	};

	useEffect(() => {
		const getRes = async () => {
			const res = await axios.get(
				'https://mighty-bastion-04883.herokuapp.com/api/user/all'
			);
			await setUsers(res.data);
			await setR(1);
			await setPageCount(Math.ceil(res.data.length / usersPerPage));
		};
		// axios
		// 	.get('https://mighty-bastion-04883.herokuapp.com/api/user/all')
		// 	.then((res) => {
		// 		setUsers(res.data);
		// 	})
		// 	.then(() => {
		// 		setPageCount(Math.ceil(users.length / usersPerPage));
		// 		setR(1);
		// 	});
		getRes();
	}, []);

	return (
		<div>
			<table className='userTable'>
				<tr style={{ textAlign: 'center' }}>
					<th className='th'>UserName</th>
					<th>Email</th>
					<th>Delete</th>
				</tr>
				{r == 1
					? users
							.slice(pagesVisited, pagesVisited + usersPerPage)
							.map((e, i) => {
								return (
									<tr key={i}>
										<td>{e.name}</td>
										<td>{e.email}</td>
										<td>
											<Button
												className='delButton'
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
			{r == 1 ? (
				<ReactPaginate
					previousLabel='Previous'
					nextLabel='Next'
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={'paginationBttns'}
					previousLinkClassName={'previousButton'}
					nextLinkClassName={'nextButton'}
					disabledClassName={'paginationDisabled'}
					activeClassName={'paginationActive'}
				/>
			) : (
				'Loading...'
			)}
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
