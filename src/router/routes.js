import HomePage from '../pages/HomePage/HomePage';
import OrderHistoryPage from '../pages/OrderHistoryPage/OrderHistoryPage';
import AuthPage from '../pages/AuthPage/AuthPage';


const routes = [
	{
		Component:HomePage,
		key: 'Home',
		path: '/home'
	},
	{
		Component: OrderHistoryPage,
		key: 'OrderHistory',
		path: '/orders'
	},
	
	{
		Component: AuthPage,
		key: 'AuthPage',
		path: '/auth'
	}
];

export default routes;
