import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	TextField,
} from "@material-ui/core";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SunEditor, { buttonList } from "suneditor-react";
import CreateBlog from "../../Blogs/CreateBlog";

const DeleteBlog = () => {
	const [formData, setFormData] = useState({
		title: "",
	});
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const [blogArray, setBlogArray] = useState([]);
	const [loading, setLoading] = useState(true);
	const [r, setR] = useState(0);
	const [open, setOpen] = useState(false);
	const [currentTitle, setCurrentTitle] = useState("");
	const [currentDescription, setCurrentDescription] = useState("");
	let [content, setContent] = useState("");

	const { title } = formData;

	console.log("title  + " + title);

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

	const contentChange = (e) => {
		setContent(e);
		console.log(content, "content");
		// console.log(data, ' hello everyone ');
	};

	const handleEdit = ({ val }) => {
		blogArray.forEach((e, i) => {
			if (e.title == val) {
				console.log("test", e);
				setBlog(e);
				setCurrentTitle(e.title);
				setCurrentDescription(e.description);
				setContent(e.content);
			}
		});
	};

	const editSubmit = async () => {
		let body = {
			title: currentTitle,
			description: currentDescription,
			content: content,
		};
		body = JSON.stringify(body);
		const res = await axios.post(
			"https://mighty-bastion-04883.herokuapp.com/api/blog/edit",
			body,
			config
		);
		await alert(res.data);
	};

	const handleSubmit = async () => {
		const body = JSON.stringify(formData);
		const res = await axios({
			method: "DELETE",
			url: "https://mighty-bastion-04883.herokuapp.com/api/blog/delete",
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
			"https://mighty-bastion-04883.herokuapp.com/api/blog/all"
		);
		await setBlogArray(res.data);
		await setPageCount(Math.ceil(res.data.length / usersPerPage));
		await setLoading(false);
		await setCurrentTitle(res.data[0].title);
		await setCurrentDescription(res.data[0].description);
		await setContent(res.data[0].content);
		if (!loading) console.log("wassup", blogArray);
	}, []);

	return (
		<Fragment>
			{loading ? (
				"loading..."
			) : (
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						alignItems: "center",
						scrollBehavior: "smooth",
					}}
				>
					<h5>
						<dt>Here are all the Blogs</dt>
					</h5>
					<table className='userTable'>
						<tr style={{ textAlign: "center" }}>
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
													<Button
														className='delButton'
														onClick={() => handleEdit({ val: e.title })}
														color='primary'
														variant='contained'
													>
														Edit
													</Button>
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
							: "loading..."}
					</table>
					{!loading ? (
						<ReactPaginate
							previousLabel='Previous'
							nextLabel='Next'
							pageCount={pageCount}
							onPageChange={changePage}
							containerClassName={"paginationBttns"}
							previousLinkClassName={"previousButton"}
							nextLinkClassName={"nextButton"}
							disabledClassName={"paginationDisabled"}
							activeClassName={"paginationActive"}
						/>
					) : (
						"Loading..."
					)}
					<Dialog
						open={open}
						onClose={handleClose}
						aria-labelledby='alert-dialog-title'
						aria-describedby='alert-dialog-description'
					>
						{loading ? (
							"Loading..."
						) : (
							<Fragment>
								<DialogTitle id='alert-dialog-title'>
									{"Are you sure that you want to delete blog with name " +
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
					<div style={{ marginTop: "30px" }}>
						{!loading ? (
							<Fragment>
								<h3>
									<dt>{currentTitle}</dt>
								</h3>
								<h4>
									<dt>{currentDescription}</dt>
								</h4>
								<SunEditor
									setContents={content}
									height='80vh'
									width='80vw'
									setOptions={{ buttonList: buttonList.complex }}
									onChange={contentChange}
									style={{
										display: "block",
										marginLeft: "auto",
										marginRight: "auto",
										textAlign: "center",
									}}
								/>

								<Button
									onClick={() => editSubmit()}
									color='primary'
									variant='contained'
									style={{
										display: "block",
										marginLeft: "auto",
										marginRight: "auto",
										marginTop:"20px"
									}}
								>
									Submit
								</Button>
							</Fragment>
						) : (
							"Loading..."
						)}
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default DeleteBlog;
