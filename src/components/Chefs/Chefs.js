import React from 'react';
// import './Cakes.css';
import './Chefs.css';
import { chefs } from '../../data/Chefs';

const Chefs = ({ id }) => {
	return (
		<div className="chefContainer" id={id}>
			<h1 className="cakeHeading">Our Kitchen Chefs</h1>
			<div className="cakeWrapper">
				{chefs.map((chef, index) => (
					<div>
						<div className="cakeCard">
							<img src={chef.img} className="chefImg" alt={chef.alt} />
							<div className="cakeInfo">
								<div className="protTitle">{chef.name}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Chefs;