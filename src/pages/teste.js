import React, { useEffect, useState } from "react";

import api from "../assets/services/api.js";

const Teste = () => {
	const [searchBand, setSearchBand] = useState("");
	const [bands, setBands] = useState([]);
	useEffect(() => {
		const loadBands = async () => {
			const response = await api.get();
			// console.log(response.data);
			setBands(response.data);
		};
		loadBands();
	}, []);
	console.log(bands);
	return (
		<div>
			<h1>Teste Strapi</h1>
			{bands.map(band => {
				return (
					<ul>
						<li key={band.id}>
							<h2>{band.band_name}</h2>
							<img src={band.band_img.name} alt={band.band_name} />
						</li>
						;
					</ul>
				);
			})}
		</div>
	);
};

export default Teste;
