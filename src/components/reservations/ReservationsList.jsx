import ReservationCard from './ReservationCard';

function ReservationsList({ reservations, onDelete, onRate }) {
	return (
		<div className="grid grid-cold-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
			{reservations.map((reservation) => (
				<ReservationCard
					key={reservation.id}
					reservation={reservation}
					onDelete={onDelete}
					onRate={onRate}
				/>
			))}

			{reservations.length === 0 && <p>No reservations found</p>}
		</div>
	);
}

export default ReservationsList;
