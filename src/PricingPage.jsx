import { CheckIcon } from "@heroicons/react/24/outline";

const pricing = {
	tiers: [
		{
			title: "小學小組",
			price: 200,
			frequency: "/每月 起",
			description: "英、數小組課程，緊貼校內課程，全面打好基礎",
			features: ["課後研習跟進", "全面針對校內評核", "貼題練習"],
			cta: "查詢請致電 2311-6061",
			mostPopular: true,
		},
		{
			title: "中學小組",
			price: 250,
			frequency: "/每月 起",
			description: "英、商、數、理課程，助您升中升大考好成績",
			features: ["課後研習跟進", "全面針對校內評核", "精編筆記", "模擬考試"],
			cta: "查詢請致電 2311-6061",
			mostPopular: true,
		},
		{
			title: "個人課程",
			price: 350,
			frequency: "/每月 起",
			description: "全面針對性課程",
			features: ["完全符合個人進度", "導師全面跟進調節", "協助制定學習進度", "每月評核報告"],
			cta: "查詢請致電 2311-6061",
			mostPopular: false,
		},
	],
};

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function PricingPage() {
	return (
		<div className="mx-auto max-w-7xl bg-white px-4 sm:px-6 lg:px-8">
			<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
				收費慨覽
			</h2>
			<p className="mt-6 max-w-2xl text-xl text-gray-500">
				我們提供比坊間相宜的補習收費，因為我們相信教育是一項育人的事業，不能單單以金錢去衡量。
			</p>

			{/* Tiers */}
			<div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
				{pricing.tiers.map((tier) => (
					<div
						key={tier.title}
						className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
					>
						<div className="flex-1">
							<h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
							{tier.mostPopular ? (
								<p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 py-1.5 px-4 text-sm font-semibold text-white">
									熱門課程
								</p>
							) : null}
							<p className="mt-4 flex items-baseline text-gray-900">
								<span className="text-5xl font-bold tracking-tight">${tier.price}</span>
								<span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
							</p>
							<p className="mt-6 text-gray-500">{tier.description}</p>

							{/* Feature list */}
							<ul role="list" className="mt-6 space-y-6">
								{tier.features.map((feature) => (
									<li key={feature} className="flex">
										<CheckIcon className="h-6 w-6 flex-shrink-0 text-indigo-500" aria-hidden="true" />
										<span className="ml-3 text-gray-500">{feature}</span>
									</li>
								))}
							</ul>
						</div>

						<a
							href="#"
							className={classNames(
								tier.mostPopular
									? "bg-indigo-500 text-white hover:bg-indigo-600"
									: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
								"mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
							)}
						>
							{tier.cta}
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
