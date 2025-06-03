"use client";
import { useState } from "react";

export default function CalculadoraIMC() {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [imc, setImc] = useState<number | null>(null);
    const [classificacao, setClassificacao] = useState("");
    const [resultadoCor, setResultadoCor] = useState("text-white");

    const calcularIMC = () => {
        const alturaMetros = parseFloat(altura) / 100;
        const pesoKg = parseFloat(peso);
        if (!alturaMetros || !pesoKg || alturaMetros <= 0 || pesoKg <= 0) {
            setImc(null);
            setClassificacao("");
            return;
        }

        const imcCalculado = pesoKg / (alturaMetros * alturaMetros);
        setImc(parseFloat(imcCalculado.toFixed(1)));

        if (imcCalculado < 18.5) {
            setClassificacao("Abaixo do peso");
            setResultadoCor("text-blue-400");
        } else if (imcCalculado < 25) {
            setClassificacao("Peso saudável");
            setResultadoCor("text-green-400");
        } else if (imcCalculado < 30) {
            setClassificacao("Sobrepeso");
            setResultadoCor("text-yellow-400");
        } else {
            setClassificacao("Obesidade");
            setResultadoCor("text-red-400");
        }
    };

    return (
        <section className="bg-slate-900 text-white py-16 sm:py-24">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8 flex flex-wrap md:flex-nowrap justify-between items-start gap-12 lg:gap-16">
                
                {/* Lado Esquerdo: Calculadora */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-base font-semibold leading-7 text-amber-400">AVALIAÇÃO RÁPIDA</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Calculadora de IMC
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Use nossa calculadora para descobrir seu Índice de Massa Corporal (IMC) e ter uma noção inicial sobre a sua faixa de peso ideal.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <input
                            type="number"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)}
                            placeholder="Altura (cm)"
                            className="w-full sm:w-1/2 rounded-md border-0 bg-white/5 px-4 py-3 text-white ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400"
                        />
                        <input
                            type="number"
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
                            placeholder="Peso (kg)"
                            className="w-full sm:w-1/2 rounded-md border-0 bg-white/5 px-4 py-3 text-white ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400"
                        />
                    </div>
                    
                    <button
                        onClick={calcularIMC}
                        className="mt-8 w-full sm:w-auto rounded-md bg-amber-400 px-6 py-3 text-center text-base font-semibold text-slate-900 shadow-sm transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                    >
                        Calcular Meu IMC
                    </button>

                    {imc !== null && (
                         <div className="mt-10 rounded-lg bg-slate-800/50 p-6 ring-1 ring-white/10">
                            <h3 className="text-xl font-semibold text-white">Seu Resultado:</h3>
                            <div className="mt-4 flex justify-between items-baseline">
                                <span className="text-slate-300">Seu IMC é:</span>
                                <span className="text-2xl font-bold text-white">{imc}</span>
                            </div>
                            <div className="mt-2 flex justify-between items-baseline">
                                <span className="text-slate-300">Classificação:</span>
                                <span className={`text-xl font-bold ${resultadoCor}`}>{classificacao}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Lado Direito: Tabela */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="rounded-lg bg-slate-800/50 p-6 ring-1 ring-white/10">
                         <h3 className="text-xl font-semibold leading-7 text-amber-400">Tabela de Referência</h3>
                        <p className="mt-1 text-sm text-slate-400">Valores de referência da OMS.</p>
                        <table className="w-full text-left mt-4">
                            <tbody className="text-slate-300">
                                <tr className="border-b border-slate-700">
                                    <td className="py-3 pr-2 font-medium text-white">Menor que 18.5</td>
                                    <td>Abaixo do peso</td>
                                </tr>
                                <tr className="border-b border-slate-700">
                                    <td className="py-3 pr-2 font-medium text-white">18.5 - 24.9</td>
                                    <td>Peso saudável</td>
                                </tr>
                                <tr className="border-b border-slate-700">
                                    <td className="py-3 pr-2 font-medium text-white">25.0 - 29.9</td>
                                    <td>Sobrepeso</td>
                                </tr>
                                <tr className="border-b border-slate-700">
                                    <td className="py-3 pr-2 font-medium text-white">30.0 - 34.9</td>
                                    <td>Obesidade Grau I</td>
                                </tr>
                                <tr className="border-b border-slate-700">
                                    <td className="py-3 pr-2 font-medium text-white">35.0 - 39.9</td>
                                    <td>Obesidade Grau II</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-2 font-medium text-white">40.0 ou mais</td>
                                    <td>Obesidade Grau III</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}