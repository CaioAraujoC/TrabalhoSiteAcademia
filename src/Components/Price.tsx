import React from "react";
const CheckIcon = ({ className }: { className?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		className={className}
		aria-hidden="true"
	>
		<path
			fillRule="evenodd"
			d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
			clipRule="evenodd"
		/>
	</svg>
);

const Price = () => {
	return (
		<section className="bg-slate-900 py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-base font-semibold leading-7 text-amber-400">
						PLANOS E PREÇOS
					</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
						O plano perfeito para seus objetivos
					</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-300">
					Escolha o plano que melhor se adapta à sua rotina e comece a transformar
					seu corpo e sua saúde hoje mesmo.
				</p>

				<div className="isolate mt-16 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:mx-0 lg:max-w-none">
					<div className="relative rounded-3xl bg-slate-800/80 p-8 ring-2 ring-amber-400 transition-transform duration-300 ease-in-out hover:scale-[1.02]">
						<div className="absolute top-0 -translate-y-1/2 transform">
							<span className="rounded-full bg-amber-400 px-4 py-1 text-sm font-semibold tracking-wider text-slate-900">
								MAIS POPULAR
							</span>
						</div>
						<h3 className="text-2xl font-semibold leading-8 text-white text-center">
							Plano Mensal
						</h3>
						<p className="mt-6 flex items-baseline justify-center gap-x-2">
							<span className="text-5xl font-bold tracking-tight text-white">
								R$ 600
							</span>
							<span className="text-base font-semibold leading-7 text-slate-400">
								/mês
							</span>
						</p>
						<ul
							role="list"
							className="mt-8 space-y-3 text-base leading-6 text-slate-300"
						>
							<li className="flex gap-x-3">
								<CheckIcon className="h-6 w-5 flex-none text-amber-400" />
								12 sessões por mês (3x por semana)
							</li>
							<li className="flex gap-x-3">
								<CheckIcon className="h-6 w-5 flex-none text-amber-400" />
								Treinos 100% personalizados
							</li>
							<li className="flex gap-x-3">
								<CheckIcon className="h-6 w-5 flex-none text-amber-400" />
								Acompanhamento nutricional completo
							</li>
							<li className="flex gap-x-3">
								<CheckIcon className="h-6 w-5 flex-none text-amber-400" />
								Suporte prioritário via WhatsApp
							</li>
						</ul>
						<div className="mt-10">
							<button className="w-full rounded-md bg-amber-400 px-4 py-3 text-center text-base font-semibold text-slate-900 shadow-sm transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400">
								Contratar Plano
							</button>
						</div>
					</div>

					<div className="rounded-3xl bg-slate-800/50 p-8 ring-1 ring-white/10 transition-transform duration-300 ease-in-out hover:scale-[1.02]">
						<h3 className="text-2xl font-semibold leading-8 text-white text-center">
							Sessão Avulsa
						</h3>
						<p className="mt-6 flex items-baseline justify-center gap-x-2">
							<span className="text-5xl font-bold tracking-tight text-white">
								R$ 50
							</span>
							<span className="text-base font-semibold leading-7 text-slate-400">
								/sessão
							</span>
						</p>
						<ul
							role="list"
							className="mt-8 space-y-3 text-base leading-6 text-slate-300"
						>
							<li className="flex gap-x-3">
								<CheckIcon className="h-6 w-5 flex-none text-amber-400" />
								Sessão única de 1 hora
							</li>
							<li className="flex gap-x-3">
								<CheckIcon className="h-6 w-5 flex-none text-amber-400" />
								Avaliação física inicial
							</li>
							<li className="flex gap-x-3">
								<CheckIcon className="h-6 w-5 flex-none text-amber-400" />
								Treino personalizado para o dia
							</li>
						</ul>
						<div className="mt-10">
							<button className="w-full rounded-md bg-white/10 px-4 py-3 text-center text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 transition-colors duration-200 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
								Agendar Sessão
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Price;
