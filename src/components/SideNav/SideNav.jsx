import {
	HomeMinor,
	OrdersMinor,
	ProductsMinor,
	OnlineStoreMinor,
	CustomersMajor,
	FinancesMinor,
	AnalyticsMajor,
	MarketingMajor,
	DiscountsMajor,
	PointOfSaleMajor,
	ChevronRightMinor
} from '@shopify/polaris-icons';
import { Navigation } from '@shopify/polaris';
import './SideNav.scss';
import { useLocation } from 'react-router-dom';

export const SideNav = () => {

	const location = useLocation();
  	const pathname = location.pathname;
  	const pageRefConfirmation = pathname === '/themes';

	return (
			<Navigation location='/'>
				<Navigation.Section
					items={[
						{
							label: 'Home',
							icon: HomeMinor,
							selected: !pageRefConfirmation,
						},
						{
							label: 'Orders',
							icon: OrdersMinor,
						},
						{
							label: 'Products',
							icon: ProductsMinor,
						},
						{
							label: 'Customers',
							icon: CustomersMajor,
						},
						{
							label: 'Finances',
							icon: FinancesMinor,
						},
						{
							label: 'Analytics',
							icon: AnalyticsMajor,
						},
						{
							label: 'Marketing',
							icon: MarketingMajor,
						},
						{
							label: 'Discounts',
							icon: DiscountsMajor,
						},
					]}
				/>
				<Navigation.Section
					title='Sales channels'
					items={[
						{
							label: 'Online Store',
							icon: OnlineStoreMinor,
							selected: pageRefConfirmation
						},
						{
							label: 'Point of Sale',
							icon: PointOfSaleMajor,
						},
					]}
					action={{
						accessibilityLabel: 'Add sales channel',
						icon: ChevronRightMinor,
						onClick: () => {},
					}}
				/>
				<Navigation.Section
					title='Apps'
					items={[
						{}
					]}
					action={{
						accessibilityLabel: 'Add sales channel',
						icon: ChevronRightMinor,
						onClick: () => {},
					}}
				/>
			</Navigation>
	);
};
