import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

// Ícones para as informações de contato (alternativa aos emojis)
const BuildingOfficeIcon = (props: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		{...props}
	>
		<path
			fillRule="evenodd"
			d="M4.5 2.25a.75.75 0 000 1.5v16.5a.75.75 0 00.75.75h13.5a.75.75 0 00.75-.75V3.75a.75.75 0 000-1.5H4.5zM6 4.5v.75A.75.75 0 015.25 6h-.75a.75.75 0 01-.75-.75V4.5A.75.75 0 014.5 3.75h.75A.75.75 0 016 4.5zm5.25 0a.75.75 0 00-.75.75v.75a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V4.5a.75.75 0 00-.75-.75h-.75zM6 8.25v.75A.75.75 0 015.25 9.75h-.75A.75.75 0 013.75 9V8.25A.75.75 0 014.5 7.5h.75A.75.75 0 016 8.25zm5.25 0a.75.75 0 00-.75.75v.75a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V8.25a.75.75 0 00-.75-.75h-.75zM6 12v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75V12A.75.75 0 014.5 11.25h.75A.75.75 0 016 12zm5.25 0a.75.75 0 00-.75.75v.75a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75h-.75zM6 15.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75A.75.75 0 014.5 15h.75A.75.75 0 016 15.75zm5.25 0a.75.75 0 00-.75.75v.75a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75v-.75a.75.75 0 00-.75-.75h-.75zM18 4.5v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75V4.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75zm-5.25 3.75a.75.75 0 00-.75.75v.75a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V8.25a.75.75 0 00-.75-.75h-.75zM18 8.25v.75A.75.75 0 0117.25 9.75h-.75a.75.75 0 01-.75-.75V8.25A.75.75 0 0116.5 7.5h.75A.75.75 0 0118 8.25zm-5.25 3.75a.75.75 0 00-.75.75v.75a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75h-.75zM18 12v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75V12a.75.75 0 01.75-11.25h.75a.75.75 0 01.75.75zm-5.25 3.75a.75.75 0 00-.75.75v.75a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75v-.75a.75.75 0 00-.75-.75h-.75zM18 15.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75a.75.75 0 01.75-15h.75a.75.75 0 01.75.75z"
			clipRule="evenodd"
		/>
	</svg>
);

const PhoneIcon = (props: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		{...props}
	>
		<path
			fillRule="evenodd"
			d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.279-.087.431l4.108 7.552a.75.75 0 00.676.326h3.45a.75.75 0 00.75-.75l-2.732-5.001a.75.75 0 00-.676-.426h-1.928a1.875 1.875 0 01-1.819-1.422l-1.105-4.423A3 3 0 018.628 1.5H19.5a3 3 0 013 3v1.5a.75.75 0 01-1.5 0V6a1.5 1.5 0 00-1.5-1.5h-10.5a.75.75 0 00-.75.75v12a.75.75 0 00.75.75h.001c.314 0 .622-.136.837-.38l2.731-5.001a.75.75 0 01.676-.426h1.928a3.375 3.375 0 013.264 2.53l1.206 4.823A3 3 0 0119.5 22.5h-1.372c-.86 0-1.61-.586-1.819-1.42l-1.105-4.423a1.875 1.875 0 00-1.955-.694l-1.293.97c-.135.101-.279.164-.431.087l-7.552-4.108a.75.75 0 01-.326-.676V4.5z"
			clipRule="evenodd"
		/>
	</svg>
);

const EnvelopeIcon = (props: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		{...props}
	>
		<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
		<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
	</svg>
);

const Contact = () => {
	return (
		<div className="bg-slate-900">
			{/* Seção do Formulário e Informações */}
			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
				{/* Cabeçalho */}
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-base font-semibold leading-7 text-amber-400">
						FALE CONOSCO
					</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
						Estamos aqui para ajudar
					</p>
					<p className="mt-6 text-lg leading-8 text-slate-300">
						Tem alguma dúvida ou quer agendar uma visita? Preencha o formulário ou
						entre em contato pelos nossos canais.
					</p>
				</div>

				{/* Grid principal: Informações | Formulário */}
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
					{/* Coluna de Informações */}
					<div className="flex flex-col gap-y-10 lg:order-last">
						<div className="rounded-2xl bg-slate-800/50 p-8 ring-1 ring-white/10">
							<h3 className="text-2xl font-semibold leading-7 text-white">
								Informações de Contato
							</h3>
							<dl className="mt-6 space-y-4 text-base leading-7 text-slate-300">
								<div className="flex gap-x-4">
									<dt className="flex-none">
										<span className="sr-only">Endereço</span>
										<BuildingOfficeIcon className="h-7 w-6 text-amber-400" />
									</dt>
									<dd>Centro Universitário - UNIESP, João Pessoa</dd>
								</div>
								<div className="flex gap-x-4">
									<dt className="flex-none">
										<span className="sr-only">Telefone</span>
										<PhoneIcon className="h-7 w-6 text-amber-400" />
									</dt>
									<dd>
										<a href="tel:+55 (83) 99999-9999">(83) 99999-9999</a>
									</dd>
								</div>
								<div className="flex gap-x-4">
									<dt className="flex-none">
										<span className="sr-only">Email</span>
										<EnvelopeIcon className="h-7 w-6 text-amber-400" />
									</dt>
									<dd>
										<a href="mailto:contato@elitetraining.com">
											contato@elitetraining.com
										</a>
									</dd>
								</div>
							</dl>
						</div>
						<div className="rounded-2xl bg-slate-800/50 p-8 ring-1 ring-white/10">
							<h3 className="text-2xl font-semibold leading-7 text-white">
								Horário de Funcionamento
							</h3>
							<ul className="mt-4 space-y-2 text-base leading-7 text-slate-300">
								<li>
									Segunda a Sexta:{" "}
									<span className="font-semibold text-white">6h às 22h</span>
								</li>
								<li>
									Sábado: <span className="font-semibold text-white">8h às 18h</span>
								</li>
								<li>
									Domingo: <span className="font-semibold text-white">Fechado</span>
								</li>
							</ul>
						</div>
					</div>

					{/* Coluna do Formulário */}
					<form className="lg:order-first">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
								<label
									htmlFor="first-name"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Nome
								</label>
								<div className="mt-2.5">
									<input
										type="text"
										id="first-name"
										autoComplete="given-name"
										placeholder="Seu nome"
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="last-name"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Sobrenome
								</label>
								<div className="mt-2.5">
									<input
										type="text"
										id="last-name"
										autoComplete="family-name"
										placeholder="Seu sobrenome"
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="email"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Email
								</label>
								<div className="mt-2.5">
									<input
										type="email"
										id="email"
										autoComplete="email"
										placeholder="seu@email.com"
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="message"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Mensagem
								</label>
								<div className="mt-2.5">
									<textarea
										id="message"
										rows={4}
										placeholder="Sua mensagem..."
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
									></textarea>
								</div>
							</div>
						</div>
						<div className="mt-8">
							<button
								type="submit"
								className="w-full rounded-md bg-amber-400 px-6 py-3 text-center text-base font-semibold text-slate-900 shadow-sm transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
							>
								Enviar Mensagem
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
