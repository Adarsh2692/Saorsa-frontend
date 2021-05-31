import React, { useEffect, useState } from "react";
import "./Animated.css";
import AnimatedCard from "./AnimatedCard";
import AppBar from './../AppBar/AppBar';

const Animated = () => {
	const [loader1, setLoader1] = useState(false);
	const [loader2, setLoader2] = useState(false);
	const [loader3, setLoader3] = useState(false);
	const [loader4, setLoader4] = useState(false);
	const [loader5, setLoader5] = useState(false);
	const [loader6, setLoader6] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setLoader1(true);
		}, 1000);
		setTimeout(() => {
			setLoader2(true);
		}, 1500);
		setTimeout(() => {
			setLoader3(true);
		}, 2000);
		setTimeout(() => {
			setLoader4(true);
		}, 2500);
		setTimeout(() => {
			setLoader5(true);
		}, 3000);
		setTimeout(() => {
			setLoader6(true);
		}, 500);
	}, []);
	return (
		<div style={{ width: "100vw", background: "#09386F", height: "100vh" }}>
			<AppBar bg="#09386F" />
			<div class="circle-container">
				<a href="#" class="center deg">
					<img src="https://cdn3.iconfinder.com/data/icons/happy-shapes-colored/640/triangle-face-emoji-shapes-happy-emoticons-smiley-512.png" />
				</a>
				{loader1 ? (
					<a href="#" class="deg0">
						<AnimatedCard />
					</a>
				) : (
					""
				)}
				{loader2 ? (
					<a href="#" class="deg45">
						<AnimatedCard />
					</a>
				) : (
					""
				)}
				{loader3 ? (
					<a href="#" class="deg135">
						<AnimatedCard />
					</a>
				) : (
					""
				)}
				{loader4 ? (
					<a href="#" class="deg180">
						<AnimatedCard />
					</a>
				) : (
					""
				)}
				{loader5 ? (
					<a href="#" class="deg225">
						<AnimatedCard />
					</a>
				) : (
					""
				)}
				{loader6 ? (
					<a href="#" class="deg315">
						<AnimatedCard />
					</a>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Animated;
