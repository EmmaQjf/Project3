import HomePage from '../pages/HomePage/HomePage';
import OrderHistoryPage from '../pages/OrderHistoryPage/OrderHistoryPage';
import AuthPage from '../pages/AuthPage/AuthPage';
import ClotheListPage from '../pages/ClotheListPage/ClotheListPage'
import ClotheItemPage from '../pages/ClotheItemPage/ClotheItemPage'


const routes = [
	{
		Component:HomePage,
		key: 'Home',
		path: '/home'
	},
	{
		Component:ClotheListPage,
		key: 'ClotheList',
		path: '/clothelists/:name'
	},
	{
		Component:ClotheItemPage,
		key: 'ClotheItem',
		path: '/ClotheItem/:id'
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
