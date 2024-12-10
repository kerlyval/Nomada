import { useEffect, useState } from 'react';
import { useHotels } from '../context/hotels';
import HotelsList from '../components/home/HotelsList';
import Search from '../components/home/Search';
import Filter from '../components/home/Filter';
import Menu from '../components/Menu';
import { FiFilter } from 'react-icons/fi';

function Home() {
	const { hotels, getAll } = useHotels();
	const [result, setResult] = useState('');
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		if (hotels.length === 0) {
			getAll();
		}
	}, []);

	useEffect(() => {
		console.log(result);
	}, [result]);

	const filtered = hotels?.filter((hotel) =>
		hotel?.name.toLowerCase().includes(result),
	);

	const handleToggle = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<div>
			<section className="max-w-5xl mx-auto px-5 py-10">
				<div className="mb-8 flex items-center justify-center gap-4	">
					<Search setResult={setResult} />
					<button className="md:hidden" onClick={handleToggle}>
						<FiFilter className="size-6" />
					</button>
					<Menu openMenu={openMenu} closeMenu={handleToggle}>
						<Filter setResult={setResult} />
					</Menu>
				</div>
				<HotelsList hotels={filtered} />
			</section>
		</div>
	);
}

export { Home };
