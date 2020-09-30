import React, { useState } from "react";
import Header from "./Header";

const Unsplash = () => {
	const [keyword, setKeyWord] = useState("");
	const [imgs, setImgs] = useState([]);
	const viewImgs = () => {
		const API_KEY = "199uMSNmn2t4j66K9_0feK8S8U0iuD_e6URjuA_fsn4";
		const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${keyword}&orientation=squarish`;
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				setImgs(data.results);
				setKeyWord("");
				console.log(data);
			});
	};

	return (
		<div>
			<Header />
			<input
				value={keyword}
				onChange={(e) => setKeyWord(e.target.value)}
				className="searchBar"
				type="text"
				placeholder="Type any wallpaper name..."
			/>
			<button onClick={viewImgs} className="searchBtn">
				SEARCH HERE
			</button>
			<div className="galleries">
				{imgs.map((img) => (
					<img
						key={img.id}
						src={img.urls.regular}
						alt={img.alt_description}
						title={img.alt_description}
					/>
				))}
			</div>
		</div>
	);
};

export default Unsplash;
