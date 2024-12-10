import { IoLocationOutline } from 'react-icons/io5';
import StarRating from '../StarRating';

function Description({ rating, address, description }) {
	return (
		<div>
			<div className="flex items-center gap-2">
				<StarRating rating={rating} />
				<span className="text-sm">{rating} </span>
			</div>

			<p className="flex items-center gap-1 mb-4">
				{' '}
				<IoLocationOutline /> <span className="text-xs">{address}</span>
			</p>
			<p>{description}</p>
		</div>
	);
}

export default Description;
