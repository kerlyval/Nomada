const Logo = ({ className }) => {
	return (
		<img
			src="https://www.flaticon.com/de/kostenloses-icon/hotel_9922103"
			alt="Logo"
			className={`size-14 ${className} hover:filter hover:brightness-110 hover:hue-rotate-90 hover:animate-rotate-180`}
		/>
	);
};

export default Logo;
