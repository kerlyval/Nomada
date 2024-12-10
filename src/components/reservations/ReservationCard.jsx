import { IoCalendarClearOutline } from 'react-icons/io5';
import { IoLocationOutline } from 'react-icons/io5';
import { BsCalendarWeek } from 'react-icons/bs';
import { LiaBedSolid } from 'react-icons/lia';
import { BsCurrencyDollar } from 'react-icons/bs';
import { priceFormat } from '../../utils';
import { Link } from 'react-router';

function ReservationCard({ reservation, onDelete, onRate }) {
	const checkInDay = new Date(reservation.checkIn + 'T00:00:00');
	const checkOutDay = new Date(reservation.checkOut + 'T00:00:00');

	//Total de noches
	const millisecondsPerDay = 1000 * 60 * 60 * 24;

	const nigths = Math.ceil((checkOutDay - checkInDay) / millisecondsPerDay);

	//Precio por noche
	const pricePerNight = parseInt(reservation?.hotel?.price);

	const totalPrice = pricePerNight * nigths;

	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ">
			<h2 className="bg-teal-500 text-white text-xl font-semibold p-4">
				<Link to={`/hotel/${reservation?.hotel?.id}`}>
					{reservation?.hotel.name}
				</Link>
			</h2>

			<div className="p-6 flex flex-col gap-5">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2">
						<BsCalendarWeek className="size-8" />
						<div>
							<p className="font-semibold">Arrival</p>
							<p className="text-xs">{reservation.checkIn}</p>
						</div>
					</div>

					<div className="flex items-center gap-2">
						<BsCalendarWeek className="size-8" />
						<div>
							<p className="font-semibold">Departure</p>
							<p className="text-xs">{reservation.checkOut}</p>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-2">
					<IoLocationOutline className="  stroke-red-500 fill-red-500 text text-lg" />
					<p className="text-sm ">
						{reservation?.hotel?.city?.name},{' '}
						{reservation?.hotel?.city?.country}
					</p>
				</div>

				<div className="flex items-center gap-2">
					<LiaBedSolid className='"stroke-cyan-600 fill-cyan-600 text text-lg' />
					<p>
						{nigths} {nigths === 1 ? 'night' : 'nights'}
					</p>
				</div>

				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2">
						<BsCurrencyDollar className="stroke-green-700 fill-green-700 text text-lg" />
						<p>Price per night </p>
					</div>
					<p className="font-semibold">{priceFormat.format(pricePerNight)} </p>
				</div>

				<div className="flex justify-between items-center border-t pt-4">
					<div className="flex items-center gap-2">
						<BsCurrencyDollar className="stroke-green-700 fill-green-700 text text-lg" />
						<p className="font-semibold text-lg">Total </p>
					</div>
					<p className="font-semibold text-xl">
						{priceFormat.format(totalPrice)}{' '}
					</p>
				</div>
			</div>

			{/* botones */}
			<div className=" flex justify-between bg-gray-50 py-4 px-6 ">
				<button
					className="btn bg-red-500"
					onClick={() => onDelete(reservation?.id)}
				>
					Delete
				</button>
				<button
					className="btn bg-blue-500"
					onClick={() => onRate(reservation?.hotel?.id)}
				>
					Rate
				</button>
			</div>
		</div>
	);
}

export default ReservationCard;
