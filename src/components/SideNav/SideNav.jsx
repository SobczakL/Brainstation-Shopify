import {
	HomeMinor,
	OrdersMinor,
	ProductsMinor,
	OnlineStoreMinor,
	CirclePlusOutlineMinor,
} from '@shopify/polaris-icons';
import { Frame, Navigation } from '@shopify/polaris';

import './SideNav.scss';

export const SideNav = () => {
	return (
			<Navigation location='/'>
				<Navigation.Section
					items={[
						{
							url: '#',
							excludePaths: ['#'],
							label: 'Home',
							icon: HomeMinor,
						},
						{
							url: '#',
							excludePaths: ['#'],
							label: 'Orders',
							icon: OrdersMinor,
						},
						{
							url: '#',
							excludePaths: ['#'],
							label: 'Products',
							icon: ProductsMinor,
						},
					]}
				/>
				<Navigation.Section
					title='Sales channels'
					items={[
						{
							url: '#',
							excludePaths: ['#'],
							label: 'Online Store',
							icon: OnlineStoreMinor,
						},
					]}
					action={{
						accessibilityLabel: 'Add sales channel',
						icon: CirclePlusOutlineMinor,
						onClick: () => {},
					}}
				/>
			</Navigation>
	);
};
