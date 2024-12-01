import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Nabvar } from "./Nabvar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Cards";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">

			<Nabvar />

			<div className="container">
				<Jumbotron />
				<Card />
			</div>
				<Footer />

		</div>
	);
};

export default Home;
