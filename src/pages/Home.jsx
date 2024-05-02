import "./Home.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
	const [slidePerView, setSlidePerView] = useState(2);
	const data = [
		{
			id: "1",
			image: "https://res.cloudinary.com/liaison-inc/image/upload/c_fill,f_auto,q_auto/services/fash/backgrounds/barber-shop.jpg",
		},
		{
			id: "2",
			image: "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/to3pHsmq9xGEvp9F2thJiOq221c=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/UKX5C3AHQ4I6TEW3FHT2VWB2IU.jpg",
		},
		{
			id: "3",
			image: "https://images.squarespace-cdn.com/content/v1/6499eadde1c0a02a7d1be4ac/66036202-71d4-465f-b189-75fd80017d66/110A2577.jpg",
		},
		{
			id: "4",
			image: "https://heygoldie.com/blog/wp-content/uploads/2021/12/barber-shop-decor-ideas.jpg",
		},
		{
			id: "5",
			image: "https://images.squarespace-cdn.com/content/v1/5fd787d32a8a4a2604b22b5d/a1a982a2-8886-4017-a735-3fde5aeab145/msbs-barbershop-perspective-22000.jpg",
		},
	];

	useEffect(() => {
		function handleResize() {
            window.innerWidth < 720 ? setSlidePerView(1) : setSlidePerView(2)
		}
		handleResize();

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }


	}, []);

	return (
		<div>
			<Swiper
				slidesPerView={slidePerView}
				navigation
				autoplay={true}
			>
				{data.map((item) => (
					<SwiperSlide key={item.id}>
						<img
							src={item.image}
							alt="Slider"
							className="slide-item"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
