import BiotipoSection from "@/Components/BiotipoSection";
import Contact from "@/Components/Contact";
import IMCCalculator from "@/Components/IMCCalculator";
import Price from "@/Components/Price";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

export default function Home() {
	return (
		<div className={roboto.className}>
			<div className="bg-[#FAFAFA]">
				{/* <Header /> */}
				<section>
					<div className="flex mx-45 h-[600px] items-center justify-between">
						<div className="text-6xl flex flex-col">
							<span className="tracking-wider">Treinamento</span>
							<span className="tracking-wider">Personalizado de Elite</span>
							<span className="pb-5 tracking-wider">
								Em <span className="text-amber-300">J. Pessoa</span>
							</span>
							<p className="text-base opacity-50 ">
								Transforme seu corpo, eleve sua confiança — nós te guiamos em cada
								passo.
							</p>
							<p className="text-base opacity-50 ">
								Planos personalizados. Resultados reais. Foco nos seus objetivos.
							</p>
						</div>
						<div>
							<Image
								src="/b005bc26-9908-4e6a-902b-9f079d22c0f7.jpeg"
								alt="Imagem de treino personalizado"
								width={500}
								height={300}
							/>
						</div>
					</div>
				</section>
				<section className="bg-[#F8F8F8] flex items-center mx-45 justify-between py-10">
					<div className="flex flex-col w-[45%]">
						<span className="text-4xl tracking-wider">Força em cada repetição.</span>
						<span className="text-4xl text-amber-300 tracking-wider">
							Disciplina em cada sessão.
						</span>
						<div className="py-10 flex flex-col gap-5">
							<p className="opacity-50 ">
								Bem-vindo à Elite Training — seu acompanhamento fitness personalizado
								em João Pessoa.
							</p>
							<p className="opacity-50 ">
								Unimos experiência e método — entregando treinos ajustados ao seu
								corpo, objetivos e rotina. Venha com a gente, comprometa-se e
								desbloqueie sua melhor versão.
							</p>
						</div>
					</div>
					<div className="flex justify-between w-[40%]">
						<div className="flex flex-col gap-7">
							<div>
								<span className="text-6xl text-amber-300">10+</span>
								<p className="opacity-50 ">anos de experiência</p>
							</div>
							<div>
								<span className="text-6xl text-amber-300">1.5k+</span>
								<p className="opacity-50 ">alunos transformados</p>
							</div>
						</div>
						<div className="flex flex-col gap-7">
							<div>
								<span className="text-6xl text-amber-300">20+</span>
								<p className="opacity-50">certificações profissionais</p>
							</div>
							<div>
								<span className="text-6xl text-amber-300">9,9/10</span>
								<p className="opacity-50 ">avaliação no Google Reviews</p>
							</div>
						</div>
					</div>
				</section>
				<Price />
				<BiotipoSection />
				<IMCCalculator />
				<section className="flex justify-center py-10">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15836.99337614424!2d-34.85374617946734!3d-7.097187982263564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd0e422da873%3A0x252e780cac7ff41c!2sCentro%20Universit%C3%A1rio%20-%20UNIESP!5e0!3m2!1spt-BR!2sbr!4v1748888259347!5m2!1spt-BR!2sbr"
						width="80%"
						height="450"
					></iframe>
				</section>
				<Contact />
			</div>
		</div>
	);
}
