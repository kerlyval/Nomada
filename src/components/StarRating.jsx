import { FaRegStar, FaStarHalfStroke, FaStar } from 'react-icons/fa6';

function StarRating({ rating }) {
	console.log(rating);

	const renderStart = (index) => {
		if (index < Math.floor(rating)) {
			return <FaStar />;
		} else if (index < rating) {
			return <FaStarHalfStroke />;
		} else {
			return <FaRegStar />;
		}
	};

	return (
		<div className=" flex items-center gap-2">
			<span className=" flex items-center">
				{[...Array(5)].map((_, index) => {
					return (
						<span key={index} className=" text-amber-400">
							{renderStart(index)}
						</span>
					);
				})}
			</span>
		</div>
	);
}

export default StarRating;
