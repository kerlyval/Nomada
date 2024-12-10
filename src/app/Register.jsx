import { Link } from 'react-router';
import RegisterForm from '../components/auth/RegisterForm';

function Register() {
	return (
		<div>
			<h1 className="text-lg font-semibold mb-6">Create an account </h1>

			<RegisterForm />
			<p className="mt-6">
				Already have an Account?{''}{' '}
				<Link to="/login" className="text-blue-500 font-semibold">
					Log in!
				</Link>
			</p>
		</div>
	);
}

export { Register };
