import { IoMdClose } from 'react-icons/io';
import { cn } from '../utils';

function Menu({ children, openMenu, closeMenu }) {
	return (
		<div className={cn('menu -top-full', openMenu && 'top-0')}>
			<button
				className="absolute top-2 right-5 p-1 md:hidden "
				onClick={closeMenu}
			>
				<IoMdClose className="size-5 hover:text-orange-500" />
			</button>
			{children}
		</div>
	);
}

export default Menu;
