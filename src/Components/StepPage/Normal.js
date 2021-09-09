import React, { Fragment } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Normal = ({ val }) => {
	return (
		<Fragment>
			<p className='chtext'>{val.title}</p>
			{val.audio ? (
				<Fragment>
					<AudioPlayer
						src={val.audio}
						onPlay={(e) => console.log("onPlay")}
					/>
				</Fragment>
			) : (
				""
			)}
			{val.description ? (
				<Fragment>
					<div style={{ height: "15px" }} />
					<div className='cntext'>{val.description}</div>
				</Fragment>
			) : (
				""
			)}
			{val.img ? (
				<Fragment>
					<div style={{ height: "15px" }} />
					<img src={val.img} className='courseimg' />
				</Fragment>
			) : (
				""
			)}
			{val.video ? (
				<Fragment>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<video poster={val.thumbnail} className='coursevideo' controls>
							<source src={val.video} />
						</video>
					</div>
				</Fragment>
			) : (
				""
			)}
			<br />
		</Fragment>
	);
};

export default Normal;
