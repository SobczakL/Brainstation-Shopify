import { useState } from 'react';
import { HorizontalStack, Box, Text, Image, VerticalStack } from '@shopify/polaris';
import useEmblaCarousel from 'embla-carousel-react';

import retail from '../../assets/images/retail.svg';
import fashion from '../../assets/images/fashion.svg';
import foodBevy from '../../assets/images/food_bev.svg';
import healthWellness from '../../assets/images/health_wellness.svg';
import luxury from '../../assets/images/luxury.svg';
import wholesale from '../../assets/images/wholesale.svg';
import computer from '../../assets/images/computer_software.svg';
import other from '../../assets/images/other.svg';

export const IndustryCard = () => {
	const [emblaRef] = useEmblaCarousel();
	const [active, setActive] = useState('#a2bcb0');

	const handleClick = (e) => {
		e.currentTarget.style.backgroundColor = '#a2bcb0';
		e.currentTarget.style.color = '#fff';
		setActive('#a2bcb0');
	};

	const card = [
		{
			category: 'Retail',
			image: retail,
		},
		{
			category: 'Fashion',
			image: fashion,
		},
		{
			category: 'Food & Beverages',
			image: foodBevy,
		},
		{
			category: 'Health & Wellness',
			image: healthWellness,
		},
		{
			category: 'Luxury Goods & Jewellery',
			image: luxury,
		},
		{
			category: 'Wholesale',
			image: wholesale,
		},
		{
			category: 'Computer Software',
			image: computer,
		},
		{
			category: 'Other',
			image: other,
		},
	];

	return (
		<HorizontalStack columns={4} gap='4'>
			<div ref={emblaRef} style={{ overflow: 'hidden' }}>
				<div style={{ display: 'flex', width: '100%' }}>
					{card.map((everyItem, index) => {
						return (
							<Box
								className='embla__slide'
								key={index}
								onClick={handleClick}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									backgroundColor: active === '#a2bcb0' ? '#F1F8F5' : '#a2bcb0',
									width: 200,
									height: 400,
									textAlign: 'center',
									flex: '0 0 50%',
									minWidth: 0,
									marginRight: 30,
									borderRadius: 10,
									cursor: 'pointer',
								}}
							>
								<VerticalStack gap='10'>
									<Image
										source={everyItem.image}
										style={{
											width: 40,
											height: 40,
											margin: 'auto',
										}}
									/>
									<Text variant='headingLg'>{everyItem.category}</Text>
								</VerticalStack>
							</Box>
						);
					})}
				</div>
			</div>
		</HorizontalStack>
	);
};
