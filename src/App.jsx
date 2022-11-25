import PricingPage from "./PricingPage";
import Course from "./Course";
import logo from "./logo.png";

const courses = [
	{
		courseName: "常規中英數成功見証",
		courseDescription: "不一樣的課程，相同的卓越",
		courseImgUrl: "05.jpg",
	},
	{
		courseName: "鉅智皇牌英語專科",
		courseDescription: "四階段鞏固英語能力，考試得心應手",
		courseImgUrl: "06.jpg",
	},
	{
		courseName: "鉅智中數專科",
		courseDescription: "針對思維模式發展，擺脫死記硬背",
		courseImgUrl: "07.jpg",
	},
	{
		courseName: "小學英文文法班 I",
		courseDescription: "英文時式往往令學生感到困擾，一個課程解決整個小學英文課程的難題",
		courseImgUrl: "01.jpg",
	},
	{
		courseName: "英文寫作飛躍班",
		courseDescription: "由入門到進階，掌握英文寫作的必學要訣",
		courseImgUrl: "02.jpg",
	},
	{
		courseName: "升學英文預備班",
		courseDescription: "提早預備升學英美澳加必需的英文評核試",
		courseImgUrl: "03.jpg",
	},
	{
		courseName: "暑期額外課程",
		courseDescription: "善用假期，全面課程提早預備來年學習需要",
		courseImgUrl: "04.png",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function App() {
	return (
		<div className="bg-white">
			{/* Hero section */}
			<div className="relative bg-gray-900">
				{/* Decorative image and overlay */}
				<div aria-hidden="true" className="absolute inset-0 overflow-hidden">
					<img
						src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
						alt=""
						className="h-full w-full object-cover object-center"
					/>
				</div>
				<div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

				{/* Navigation */}
				<header className="relative z-10">
					<nav aria-label="Top">
						{/* Secondary navigation */}
						<div className="bg-white bg-opacity-100 backdrop-blur-md backdrop-filter">
							<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
								<div>
									<div className="flex h-16 items-center justify-between">
										{/* Logo (lg+) */}
										<div className="hidden lg:flex lg:flex-1 lg:items-center">
											<a href="#">
												<span className="sr-only">Academy of Scholars</span>
												<img className="h-16 w-auto" src={logo} alt="" />
											</a>
										</div>

										{/* Logo (lg-) */}
										<a href="#" className="lg:hidden">
											<span className="sr-only">Academy of Scholars</span>
											<img src={logo} alt="" className="h-8 w-auto" />
										</a>

										<div className="flex flex-1 items-center justify-end">
											<a href="#" className="hidden text-sm font-semibold text-indigo-600 lg:block">
												電話：2311-6061
											</a>

											<div className="flex items-center lg:ml-8">
												{/* Help */}
												<a
													href="mailto:as.notes@gmail.com"
													className="hidden text-sm font-medium text-indigo-600 lg:block"
												>
													聯絡我們: as.notes@gmail.com
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</header>

				<div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
					<h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">網上補習新體驗</h1>
					<p className="mt-4 text-xl text-white">疫情不單改變大眾的生活模式，亦改變了學生的學習方式</p>
					<p className="mt-4 text-md text-white">網上學習不單減低學生染疫的風險，同時亦能節省來回的交通時間及費用</p>
					<a
						href="#courses"
						className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
					>
						了解更多中小學的補習課程
					</a>
				</div>
			</div>

			<main>
				{/* Category section */}
				<section aria-labelledby="category-heading" className="pt-12 sm:pt-24 xl:px-8 mx-12" id="courses">
					<div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
						<h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
							特色課程
						</h2>
						<a href="#" className="hidden text-sm font-semibold text-slate-500 hover:text-indigo-500 sm:block">
							查詢報名：2311-6061 (陳先生)
						</a>
					</div>

					<div className="mt-8 flex gap-12">
						{courses.map((course, idx) => (
							<Course
								courseName={course.courseName}
								courseDescription={course.courseDescription}
								courseImgUrl={course.courseImgUrl}
								key={idx}
							/>
						))}
					</div>

					<div className="mt-6 px-4 sm:hidden">
						<a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
							查詢報名：2311-6061 (陳先生)
						</a>
					</div>
				</section>

				{/* Featured section */}
				<section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
					<PricingPage />
				</section>
			</main>

			<footer aria-labelledby="footer-heading" className="bg-gray-900">
				<div className="border-t border-gray-800 py-10">
					<p className="text-sm text-gray-400 text-center">Copyright &copy; 2022 Academy of Scholars</p>
				</div>
			</footer>
		</div>
	);
}
