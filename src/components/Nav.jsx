import { Link } from 'react-router';
import { useAuth } from '../context/auth';
import { TbLogout } from 'react-icons/tb';
import { IoBookmarks } from 'react-icons/io5';

function Nav() {
	const { isAuth, logout } = useAuth();

	return (
		<div className="grid place-content-center py-5">
			<div className="flex flex-col md:flex-row items-center gap-6">
				{isAuth ? (
					<>
						<Link
							to="/reservations"
							className="nav-link flex items-center space-x-2 gap-1 "
						>
							<IoBookmarks className="text-xl block md:hidden" />
							Reservations
						</Link>

						<button
							className="font-semibold text-lg flex items-center space-x-2 hover:text-blue-500 gap-1"
							onClick={logout}
						>
							<TbLogout className="text-xl block md:hidden" />
							Logout
						</button>
					</>
				) : (
					<>
						<Link to="/login" className="nav-link ">
							Log in
						</Link>

						<Link to="/register" className="nav-link ">
							Sign up
						</Link>
					</>
				)}
			</div>
		</div>
	);
}

export default Nav;
