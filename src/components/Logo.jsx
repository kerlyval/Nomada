const Logo = ({ className }) => {
	return (
		<img
			src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fde%2Fkostenloses-icon%2Fhotel_9922103&psig=AOvVaw3MCeYCFuuxw96eH-RPiz6f&ust=1733944131573000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDVn5n4nYoDFQAAAAAdAAAAABAS"
			alt="Logo"
			className={`size-14 ${className} hover:filter hover:brightness-110 hover:hue-rotate-90 hover:animate-rotate-180`}
		/>
	);
};

export default Logo;
