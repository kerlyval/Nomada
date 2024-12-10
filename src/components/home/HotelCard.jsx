import { IoLocationOutline } from 'react-icons/io5';
import { priceFormat } from '../../utils';
import { Link } from 'react-router';
import StarRating from '../StarRating';

function HotelCard({ hotel }) {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
			<div className="aspect-[1.4] ">
				<img
					className="w-full h-full object-cover overflow-hidden"
					src={hotel.images[0].url}
					alt={hotel.name}
				/>
			</div>
			<div className="p-5">
				<h2 className="font-semibold text-lg mb-2">{hotel.name}</h2>
				<div className="flex flex-col gap-2 ">
					<div className="flex items-center gap-2">
						<StarRating rating={hotel.rating} />
						<span className="text-sm">{hotel.rating} </span>
					</div>

					<span className="flex items-center gap-1">
						{' '}
						<IoLocationOutline />
						<span className="text-sm">
							{hotel.city.name}, {hotel.city.country}
						</span>
					</span>

					<span className="font-semibold">
						{priceFormat.format(hotel.price)}
					</span>

					<Link className="btn" to={`/hotel/${hotel.id}`}>
						More Info
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HotelCard;
