"use client";

import  { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

// 🖼️ Slider images
const slides = [
	{
		id: 1,
		title: "Professional Laundry Service",
		img: "https://www.dhobilite.com/images-v2/blog/laundry-service-in-pune.webp",
	},
	{
		id: 2,
		title: "Fast & Fresh Washing",
		img: "https://www.thespruce.com/thmb/b5qJZzoFkcW3NWLJ-7__eglDtPk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1395331461-cf9fe45ea50541c08b9c869f50e50093.jpg",
	},
	{
		id: 3,
		title: "Doorstep Pickup & Delivery",
		img: "https://deskmateglobal.com/wp-content/uploads/2025/08/Doorstep-Courier-service-in-Chennai.jpeg",
	},
	{
		id: 4,
		title: "Perfectly Pressed Clothes",
		img: "https://tlc.sndimg.com/content/dam/images/tlc/tlcme/legacy/2016/03/iStock_000046128660_Medium.jpg.rend.hgtvcom.476.317.suffix/1539643824219.jpeg",
	},
];

// 🧺 Service category cards
const cards = [
	{ id: 1, title: "Wash & Fold", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzz9ueq1kihCHa0M4QwAm1TDtoeS1sWUd8Cw&s" },
	{ id: 2, title: "Dry Cleaning", img: "https://images.squarespace-cdn.com/content/v1/611b3a86fb6a226aadffcf79/194316dd-7696-4924-a8d1-c3cb2117e546/Dry+Cleaning+Cost.png" },
	{ id: 3, title: "Steam Ironing", img: "https://akm-img-a-in.tosshub.com/sites/rd/resources/202009/steamiron_250920080413_1199x674.png?size=684:384" },
	{ id: 4, title: "Pickup & Delivery", img: "https://5.imimg.com/data5/SELLER/Default/2021/1/PP/RL/FG/10421459/pick-up-service-500x500.png" },
	{ id: 5, title: "Curtain Cleaning", img: "https://homepluscleaning.com/media/images/How-to-Clean-Curtains-and-Drapes.jpg" },
	{ id: 6, title: "Shoe Laundry", img: "https://media.gq.com/photos/60d21a25ab6b8cc6e9d2c80a/1:1/w_3600,h_3600,c_limit/SNEAKER_GUIDE_OPENER.jpg" },
	{ id: 7, title: "Bag Cleaning", img: "https://img.freepik.com/free-photo/cleaning-bag-product-photography_23-2149173981.jpg" },
	{ id: 8, title: "Carpet Cleaning", img: "https://img.freepik.com/free-photo/man-cleaning-carpet-home_23-2148724031.jpg" },
	{ id: 9, title: "Kids Wear Wash", img: "https://img.freepik.com/free-photo/kids-clothes-basket_23-2149108983.jpg" },
	{ id: 10, title: "Soft Toy Cleaning", img: "https://img.freepik.com/free-photo/woman-cleaning-teddy-bear_23-2148724021.jpg" },
	{ id: 11, title: "Uniform Cleaning", img: "https://img.freepik.com/free-photo/school-uniform-hanging_23-2149108922.jpg" },
	{ id: 12, title: "Blanket Wash", img: "https://img.freepik.com/free-photo/laundry-basket-with-blanket_23-2148724042.jpg" },
];

// 🧼 Dry Clean Rates section
const dryCleanPlans = [
	{
		id: 1,
		title: "Signature Dry Clean",
		price: "₹82",
		priceValue: 82,
		subtitle: "/pc",
		tag: "Best Value",
		img: "https://cdn-icons-png.freepik.com/512/4634/4634843.png",
		icon: "🧼",
		description: "Gentle, professional dry cleaning for your favorite garments — stain-safe and crisp finish.",
		features: ["Wetcleaning Treatment", "Spotting", "Individual Packing"],
		note: "Pack & deliver in eco-friendly covers",
	},
	{
		id: 2,
		title: "Organic Dry Clean",
		price: "₹119",
		priceValue: 119,
		subtitle: "/pc",
		tag: "Eco",
		img: "https://png.pngtree.com/png-vector/20230527/ourmid/pngtree-dry-clean-icon-vector-image-isolated-outline-clothes-folder-vector-png-image_52306816.jpg",
		icon: "🌿",
		description: "Plant-based solvents, gentle on fabric and the planet — premium care with green credentials.",
		features: ["100% Organic", "Wet Cleaning Tech", "Spot & Repair", "Box Packing"],
		note: "Free fabric-safe fragrance on request",
	},
	{
		id: 3,
		title: "Leather & Delicate",
		price: "₹353",
		priceValue: 353,
		subtitle: "/pc",
		tag: "Special Care",
		img: "https://cbx-prod.b-cdn.net/COLOURBOX64539458.jpg?width=800&height=800&quality=70",
		icon: "🧥",
		description: "Custom treatment for leather, suede and heavily embellished items — expert restoration & finishing.",
		features: ["Spot Treatment", "Steam Clean", "Custom Finish", "Drying & Finishing"],
		note: "Optional hand-finishing available",
	},
];

const washRates = [
	{
		id: 1,
		title: "Shirt / T-Shirt",
		price: "₹40",
		priceValue: 40,
		unit: "per piece",
		emoji: "👕",
		image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example4",
		description: "Quick wash + light iron — fresh and wearable same week.",
		turnaround: "24-48 hrs",
		features: ["Light ironing", "Color-safe detergent", "Quick turnaround"],
	},
	{
		id: 2,
		title: "Trousers / Jeans",
		price: "₹50",
		priceValue: 50,
		unit: "per piece",
		emoji: "👖",
		image: "https://images.unsplash.com/photo-1533850595623-2f44e0c4f1b6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example5",
		description: "Sturdy-cleaning that keeps shape & color intact.",
		turnaround: "24-48 hrs",
		features: ["Stain pre-treatment", "Shape care"],
	},
	{
		id: 3,
		title: "Bedsheet (Single)",
		price: "₹80",
		priceValue: 80,
		unit: "per piece",
		emoji: "🛏️",
		image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example6",
		description: "Deep clean, extra rinse for a soft, hygienic finish.",
		turnaround: "48-72 hrs",
		features: ["Sanitizing wash", "Extra rinse"],
	},
	{
		id: 4,
		title: "Curtains (per piece)",
		price: "₹120",
		priceValue: 120,
		unit: "per piece",
		emoji: "🪟",
		image: "https://images.unsplash.com/photo-1598300051001-2f5b5b3f7c9d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example7",
		description: "Delicate handling to prevent shrinkage and preserve texture.",
		turnaround: "3-5 days",
		features: ["Delicate cycle", "Steam finish"],
	},
	{
		id: 5,
		title: "Blanket",
		price: "₹150",
		priceValue: 150,
		unit: "per piece",
		emoji: "🛏️",
		image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example8",
		description: "Deep-clean for heavy items, gentle drying to avoid damage.",
		turnaround: "3-5 days",
		features: ["Deep cleaning", "Careful drying"],
	},
	{
		id: 6,
		title: "Saree",
		price: "₹90",
		priceValue: 90,
		unit: "per piece",
		emoji: "👗",
		image: "https://images.unsplash.com/photo-1520975912802-6f2b5fbd7d8b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example9",
		description: "Handled with special care; hand-finish available for delicate sarees.",
		turnaround: "48-72 hrs",
		features: ["Hand-finish option", "Color protection"],
	},
];

const prepaidPlans = [
	{
		id: 1,
		title: "Silver Boost — ₹500",
		price: "₹500",
		priceValue: 500,
		benefit: "Save ₹50",
		desc: "Prepaid credit + small perks — best for occasional users.",
		image: "https://images.unsplash.com/photo-1556742400-b5b512f50d20?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example10",
		features: ["₹550 credit", "Priority pickup (standard)", "1 free stain treat"],
		validity: "3 months",
		tag: "Starter",
	},
	{
		id: 2,
		title: "Gold Care — ₹1000",
		price: "₹1000",
		priceValue: 1000,
		benefit: "Save ₹150",
		desc: "Popular — best balance of savings + perks for families.",
		image: "https://images.unsplash.com/photo-1545239708-8fdb6c12b5f6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example11",
		features: ["₹1150 credit", "Priority pickup", "Exclusive offers", "2 free stain treats"],
		validity: "6 months",
		tag: "Popular",
	},
	{
		id: 3,
		title: "Platinum Luxe — ₹2000",
		price: "₹2000",
		priceValue: 2000,
		benefit: "Save ₹400",
		desc: "For regular users — max savings, premium pickup & delivery windows.",
		image: "https://images.unsplash.com/photo-1544161515-4ab19145b803?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=example12",
		features: ["₹2400 credit", "Express pickup & delivery", "Priority queue", "Free repairs (1)"],
		validity: "12 months",
		tag: "Luxe",
	},
];

export default function SuperFlowSlider() {
	const [active, setActive] = useState(0);
	const [activeTab, setActiveTab] = useState("dryclean"); // tab active

	const nextSlide = () => setActive((prev) => (prev + 1) % slides.length);
	const prevSlide = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);

	useEffect(() => {
		const auto = setInterval(nextSlide, 4000);
		return () => clearInterval(auto);
	}, []);

	const maleCards = cards.slice(0, 4);
	const femaleCards = cards.slice(4, 8);
	const kidsCards = cards.slice(8, 12);

	return (
		<div className="w-full flex flex-col items-center gap-16 py-10 ">
			{/* 🧺 SLIDER */}
			<div className="relative w-full max-w-8xl mx-auto h-[250px] sm:h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden rounded-2xl shadow-lg">
				{slides.map((slide, i) => {
					const isActive = i === active;
					return (
						<motion.div
							key={slide.id}
							className="absolute inset-0 w-full h-full"
							initial={{ opacity: 0 }}
							animate={{ opacity: isActive ? 1 : 0 }}
							transition={{ duration: 0.8 }}
						>
							<img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
							<motion.div
								className="absolute bottom-6 left-4 sm:bottom-10 sm:left-10 bg-white/70 text-orange-700 px-4 sm:px-6 py-2 sm:py-3 rounded-xl backdrop-blur-sm shadow-md max-w-[80%]"
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }}
								transition={{ delay: 0.3 }}
							>
								<h2 className="text-lg sm:text-2xl md:text-3xl font-semibold">{slide.title}</h2>
							</motion.div>
						</motion.div>
					);
				})}

				{/* Arrows */}
				<div className="absolute inset-y-0 left-2 sm:left-4 flex items-center">
					<Button
						variant="outline"
						size="icon"
						className="rounded-full bg-white/70 hover:bg-orange-100 shadow-sm"
						onClick={prevSlide}
					>
						<ChevronLeft className="text-orange-600 w-5 h-5 sm:w-6 sm:h-6" />
					</Button>
				</div>
				<div className="absolute inset-y-0 right-2 sm:right-4 flex items-center">
					<Button
						variant="outline"
						size="icon"
						className="rounded-full bg-white/70 hover:bg-orange-100 shadow-sm"
						onClick={nextSlide}
					>
						<ChevronRight className="text-orange-600 w-5 h-5 sm:w-6 sm:h-6" />
					</Button>
				</div>

				{/* Dots */}
				<div className="absolute bottom-3 sm:bottom-5 w-full flex justify-center gap-2">
					{slides.map((_, i) => (
						<button
							key={i}
							onClick={() => setActive(i)}
							className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${i === active ? "bg-orange-500 scale-110" : "bg-orange-200"
								}`}
						/>
					))}
				</div>
			</div>

			{/* 🧴 Rates Section with Tab Switching */}
			<div className="w-full max-w-7xl mx-auto mt-10 px-4">
				{/* TAB BUTTONS */}
				<div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 mb-8 border-b border-gray-200 pb-3">
					<button
						onClick={() => setActiveTab("dryclean")}
						className={`pb-2 font-semibold transition ${activeTab === "dryclean"
							? "text-orange-600 border-b-2 border-orange-600"
							: "text-gray-500 hover:text-orange-600"
							}`}
					>
						Dry Clean Rates
					</button>

					<button
						onClick={() => setActiveTab("wash")}
						className={`pb-2 font-semibold transition ${activeTab === "wash"
							? "text-orange-600 border-b-2 border-orange-600"
							: "text-gray-500 hover:text-orange-600"
							}`}
					>
						Wash Rates
					</button>

					<button
						onClick={() => setActiveTab("prepaid")}
						className={`pb-2 font-semibold transition ${activeTab === "prepaid"
							? "text-orange-600 border-b-2 border-orange-600"
							: "text-gray-500 hover:text-orange-600"
							}`}
					>
						Prepaid Plans
					</button>
				</div>

				{/* TAB CONTENT */}
				{activeTab === "dryclean" && (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{dryCleanPlans.map((plan) => (
							<div
								key={plan.id}
								className="relative bg-gradient-to-br from-white via-amber-50 to-amber-100 rounded-3xl border border-amber-200 shadow-2xl p-6 flex flex-col overflow-hidden"
							>
								<div className="absolute -top-5 right-5 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
									Premium
								</div>

								<div className="flex items-start gap-4">
									<img src={plan.img} alt={plan.title} className="w-20 h-20 object-contain rounded-lg" />
									<div className="flex-1">
										<h3 className="text-lg md:text-xl font-bold text-amber-700">{plan.title}</h3>
										<p className="text-sm text-gray-600 mt-1 hidden sm:block">{plan.description}</p>
									</div>

									<div className="text-right ml-2">
										<p className="text-2xl md:text-3xl font-extrabold text-amber-700">
											{plan.price}
											<span className="text-sm font-medium text-gray-500 ml-1">{plan.subtitle}</span>
										</p>
										<p className="text-xs text-gray-500 mt-1">incl. taxes</p>
									</div>
								</div>

								<ul className="mt-4 space-y-2 text-gray-700 text-sm">
									{plan.features.map((feature, idx) => (
										<li key={idx} className="flex items-center gap-3">
											<span className="w-2.5 h-2.5 bg-amber-600 rounded-full inline-block shadow-sm" />
											<span>{feature}</span>
										</li>
									))}
								</ul>

								<div className="mt-4 flex items-center justify-between gap-4">
									<p className="text-xs text-gray-500">Trusted care • Gentle handling</p>
									<Button
										variant="ghost"
										className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-5 py-2 shadow-md"
									>
										View Rate List
									</Button>
								</div>
							</div>
						))}
					</div>
				)}

				{activeTab === "wash" && (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						{washRates.map((plan) => (
							<div
								key={plan.id}
								className="bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-lg p-6 flex flex-col"
							>
								{/* Updated: include image on the left for each wash plan */}
								<div className="flex items-center justify-between gap-4">
									<div className="flex items-center gap-4">
										<img
											src={plan.image}
											alt={plan.title}
											className="w-20 h-20 object-cover rounded-xl shadow-sm flex-shrink-0"
										/>
										<div>
											<h3 className="text-lg font-semibold text-amber-700">{plan.title}</h3>
											<p className="text-sm text-gray-600 mt-1">{plan.description}</p>
										</div>
									</div>

									<div className="text-right">
										<p className="text-2xl font-extrabold text-orange-600">{plan.price}</p>
										<p className="text-xs text-gray-500">quick turn</p>
									</div>
								</div>

								<ul className="mt-4 flex-1 space-y-2 text-sm text-gray-700">
									{plan.features?.map((feature, i) => (
										<li key={i} className="flex items-center gap-3">
											<span className="w-2.5 h-2.5 bg-orange-500 rounded-full inline-block" />
											<span>{feature}</span>
										</li>
									))}
								</ul>

								<div className="mt-4 flex items-center justify-between">
									<span className="text-xs text-gray-500">Turnaround: {plan.turnaround ?? "24-72 hrs"}</span>
									<Button variant="outline" className="rounded-full px-4 py-2">
										Select
									</Button>
								</div>
							</div>
						))}
					</div>
				)}

				{activeTab === "prepaid" && (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{prepaidPlans.map((plan, idx) => (
							<div
								key={idx}
								className="relative rounded-3xl overflow-hidden p-6 shadow-2xl bg-gradient-to-br from-amber-50 via-white to-amber-100 border border-amber-200"
							>
								<div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-300" />

								{/* Updated: show plan image at top (centered) */}
								<img
									src={plan.image}
									alt={plan.title}
									className="w-20 h-20 object-cover rounded-full mx-auto shadow-md mb-4"
								/>

								<h3 className="text-xl font-bold text-amber-700 text-center">{plan.title}</h3>

								<p className="text-sm text-gray-600 text-center mt-2">{plan.desc}</p>

								<div className="text-center mt-4">
									<p className="text-3xl font-extrabold text-amber-700">{plan.benefit}</p>
									<p className="text-xs text-gray-500 mt-1">Instant credit applied</p>
								</div>

								<ul className="mt-4 space-y-2 text-sm text-gray-700">
									<li className="flex items-center justify-between">
										<span>Priority Pickup</span>
										<span className="text-xs text-amber-700 font-semibold">Included</span>
									</li>
									<li className="flex items-center justify-between">
										<span>Exclusive Offers</span>
										<span className="text-xs text-amber-700 font-semibold">Yes</span>
									</li>
									<li className="flex items-center justify-between">
										<span>Extended Validity</span>
										<span className="text-xs text-amber-700 font-semibold">3 months</span>
									</li>
								</ul>

								<div className="mt-6 flex items-center justify-center">
									<Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6 py-2 shadow-lg">
										Buy Plan
									</Button>
								</div>
							</div>
						))}
					</div>
				)}

			</div>




			{/* 🧺 Existing “Choose Your Plan” Section */}
			<div className="w-full max-w-6xl mx-auto mt-16 px-4">
				<h2 className="text-2xl sm:text-3xl font-bold text-center text-orange-700 mb-10 sm:mb-12">
					Choose Your Plan
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
					{/* Normal Plan */}
					<div className="bg-white rounded-3xl shadow-md border border-orange-100 hover:shadow-lg transition p-8 flex flex-col items-center text-center">
						<h3 className="text-2xl font-semibold text-orange-600 mb-3">Normal Plan</h3>
						<p className="text-gray-600 mb-6 text-base">
							Perfect for daily laundry needs with standard cleaning and ironing service.
						</p>
						<div className="text-4xl font-bold text-orange-700 mb-4">
							₹999 <span className="text-base text-gray-500">/month</span>
						</div>
						<ul className="space-y-3 text-gray-700 mb-8 text-base">
							<li>✅ Wash & Fold</li>
							<li>✅ Normal Ironing</li>
							<li>✅ 3-Day Delivery</li>
							<li>✅ Pickup & Drop</li>
							<li>❌ Stain Treatment</li>
						</ul>
						<Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl px-6 py-2">
							Choose Normal Plan
						</Button>
					</div>

					{/* Premium Plan */}
					<div className="bg-gradient-to-b from-orange-100 to-white rounded-3xl shadow-lg border border-orange-200 p-8 flex flex-col items-center relative overflow-hidden text-center">
						<div className="absolute top-0 right-0 bg-orange-600 text-white text-sm px-4 py-1 rounded-bl-xl">
							Popular
						</div>
						<h3 className="text-2xl font-semibold text-orange-700 mb-3">Premium Plan</h3>
						<p className="text-gray-600 mb-6 text-base">
							Best for premium garments with steam ironing and priority service.
						</p>
						<div className="text-4xl font-bold text-orange-700 mb-4">
							₹1599 <span className="text-base text-gray-500">/month</span>
						</div>
						<ul className="space-y-3 text-gray-700 mb-8 text-base">
							<li>✅ Wash & Fold + Dry Cleaning</li>
							<li>✅ Steam Ironing</li>
							<li>✅ Express 1-Day Delivery</li>
							<li>✅ Priority Pickup</li>
							<li>✅ Stain & Spot Treatment</li>
						</ul>
						<Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl px-6 py-2">
							Choose Premium Plan
						</Button>
					</div>
				</div>
			</div>

			{/* 👕 Male / Female / Kids Section */}
			<div className="max-w-7xl w-full space-y-12 px-4 mt-16">
				{[{ title: "👔 Male", data: maleCards },
				{ title: "👗 Female", data: femaleCards },
				{ title: "🧒 Kids", data: kidsCards }].map((section, idx) => (
					<div key={idx}>
						<h2 className="text-2xl font-bold text-orange-700 mb-8">{section.title}</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
							{section.data.map((card) => (
								<motion.div
									key={card.id}
									whileHover={{ y: -8, scale: 1.03 }}
									transition={{ duration: 0.3 }}
									className="bg-white rounded-3xl shadow-md p-6 flex flex-col items-center border border-orange-100"
								>
									<motion.img
										src={card.img}
										alt={card.title}
										className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md -mt-12"
										whileHover={{ scale: 1.05 }}
									/>
									<h3 className="mt-6 text-lg font-semibold text-orange-700">
										{card.title}
									</h3>
									<p className="text-sm text-gray-600 mt-2 text-center">
										Reliable and fast laundry service for your daily needs.
									</p>
								</motion.div>
							))}
						</div>
					</div>
				))}
			</div>
			{/* 🧼 8-Step Formula Section */}
			<div className="w-full max-w-6xl mt-10 sm:mt-16 px-4">
				<h2 className="text-2xl sm:text-3xl font-bold text-center text-orange-700 mb-8 sm:mb-10">
					10-Step Formula for Exceptional Garment Cleaning Services
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
					{[
						"Dirty Clothes",
						"Easy Scheduling",
						"Pickup",
						"Sorting & Inspection",
						"Washing & Drying",
						"Ironing & Finishing",
						"Quality Check",
						"Delivery",
					].map((step, idx) => (
						<div
							key={idx}
							className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-orange-100"
						>
							<div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full mb-4 text-xl font-bold">
								{idx + 1}
							</div>
							<h3 className="text-lg font-semibold text-orange-700">{step}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
