import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	TextField,
} from '@material-ui/core';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import EditBlog from './EditBlog';
import CreateBlog from '../../Blogs/CreateBlog';

const DeleteBlog = () => {
	const [formData, setFormData] = useState({
		title: '',
	});
	const [blogArray, setBlogArray] = useState([]);
	const [loading, setLoading] = useState(true);
	const [r, setR] = useState(0);
	const [open, setOpen] = useState(false);

	const { title } = formData;

	const [blog, setBlog] = useState({});

	//pagination
	const [pageNumber, setPageNumber] = useState(0);
	const usersPerPage = 3;
	const pagesVisited = pageNumber * usersPerPage;
	const [pageCount, setPageCount] = useState(0);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const handleOpen = ({ val }) => {
		setOpen(true);
		setFormData({ ...formData, title: val });
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleEdit = ({ val }) => {
		blogArray.forEach((e, i) => {
			if (e.title == val) {
				console.log(e);
				// setBlog(e);
			}
		});
	};

	const handleSubmit = async () => {
		const body = JSON.stringify(formData);
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const res = await axios({
			method: 'DELETE',
			url: 'https://mighty-bastion-04883.herokuapp.com/api/blog/delete',
			data: {
				title,
			},
			config,
		});
		await alert(res.data);
		window.location.reload();
	};

	useEffect(async () => {
		let res = await axios.get(
			'https://mighty-bastion-04883.herokuapp.com/api/blog/all'
		);
		await setBlogArray(res.data);
		await setPageCount(Math.ceil(res.data.length / usersPerPage));
		await setLoading(false);
		if (!loading) console.log(blogArray);
		console.log(blog);
	}, []);

	return (
		<Fragment>
			{loading ? (
				'loading...'
			) : (
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
						scrollBehavior: 'smooth',
					}}
				>
					<h5>
						<dt>Here are all the Blogs</dt>
					</h5>
					<table className='userTable'>
						<tr style={{ textAlign: 'center' }}>
							<th className='th'>Title</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
						{!loading
							? blogArray
									.slice(pagesVisited, pagesVisited + usersPerPage)
									.map((e, i) => {
										return (
											<tr key={i}>
												<td>{e.title}</td>
												<td>
													<a
														href='#editblog'
														style={{ textDecoration: 'none', color: 'white' }}
													>
														<Button
															className='delButton'
															// onClick={() => handleEdit({ val: e.title })}
															color='primary'
															variant='contained'
														>
															Edit
														</Button>
													</a>
												</td>
												<td>
													<Button
														className='delButton'
														onClick={() => handleOpen({ val: e.title })}
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
					{!loading ? (
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

					<div id='editblog'>Hello everyone</div>
					{/* <EditBlog /> */}
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
									{'Are you sure that you want to delete blog with name ' +
										title}
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
										onClick={() => handleSubmit()}
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
			)}
		</Fragment>
	);
};

export default DeleteBlog;
