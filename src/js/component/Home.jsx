import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Nabvar } from "./Nabvar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Cards";
import { Footer } from "./Footer";

const Cards = [
	{
		image: "https://picsum.photos/id/9/5000/3269",
		title: "Set up minimalista",
		text: "Vamos a escribir código",
	},
	{
		image: "https://picsum.photos/id/84/1280/848",
		title: "Puente",
		text: "Puente colgante",
	},
	{
		image: "https://picsum.photos/id/23/3887/4899",
		title: "¿Comemos?",
		text: "¿Tienes hambre?",
	},
	{
		image: "https://picsum.photos/id/88/1280/1707",
		title: "Ciudad con tráfico",
		text: "Usa el transporte público",
	}
];

const Home = () => {
	return (
		<div className="text-center">

			<Nabvar />

			<div className="container">
				<Jumbotron />
				<div className="row">
					{Cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card Cards={item} />
						</div>
					))}
				</div>
			</div>

				<Footer />

		</div>
	);
};

export default Home;
