import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Line } from "react-chartjs-2";
import ReactPaginate from "react-paginate";
import "../Pagination/Pagination.css"

const Tab2Data = ({ moods }) => {
	// const [scores, setScores] = useState([]);
	// const [numbers, setNumbers] = useState([]);
	const scores = [];
	const numbers = [];
	const [pageNumber, setPageNumber] = useState(0);
	const usersPerPage = 3;
	const pagesVisited = pageNumber * usersPerPage;
	const pageCount = Math.ceil(moods.length / usersPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	for (let i = 0; i < moods.length; i++) {
		scores.push(moods[i].score);
		numbers.push((i + 1).toString());
	}
	return (
		<div style={{ width: "100%", padding: "10px" }}>
			{moods.length > 0 && (
				<div
					className='lineGraph'
					style={{
						width: "100%",
						height: "70vh",
						paddingTop: "10px",
						paddingBottom: "10px",
						marginLeft: "auto",
						marginRight: "auto",
						display: "block",
					}}
				>
					<Line
						data={{
							labels: numbers,
							datasets: [
								{
									label: "mood score",
									data: scores,
									fill: false,
									borderColor: ["red"],
									tension: 0.2,
								},
							],
						}}
						options={{
							maintainAspectRatio: false,
							responsive: true,
							title: { text: "Mood Scores", display: true },
							scales: {
								yAxes: [
									{
										ticks: {
											beginAtZero: true,
										},
										gridLines: {
											display: false,
										},
									},
								],
								xAxes: [
									{
										gridLines: {
											display: false,
										},
									},
								],
							},
						}}
					/>
				</div>
			)}
			{moods.length > 0 ? (
				<div>
					<table style={{ marginTop: "40px", marginBottom: "40px" }}>
						<tr>
							<th>Mood</th>
							<th>Rating</th>
							<th>Date</th>
						</tr>
						{moods
							.slice(pagesVisited, pagesVisited + usersPerPage)
							.map((e, i) => {
								return (
									<tr>
										<td>{e.mood}</td>
										<td>{e.rating}</td>
										<td>{dayjs(e.date).format("DD/MM/YYYY")}</td>
									</tr>
								);
							})}
					</table>
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
				</div>
			) : (
				"No data to display yet"
			)}
		</div>
	);
};

export default Tab2Data;
