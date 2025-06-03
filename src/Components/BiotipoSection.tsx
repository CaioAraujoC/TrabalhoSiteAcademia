
import { useState } from "react";

const biotipos = [
  {
    id: "ectomorfo",
    nome: "Ectomorfo",
    descricao:
      "Corpo magro e esguio, ombros estreitos e membros compridos. Metabolismo acelerado, dificuldade para ganhar massa muscular.",
  },
  {
    id: "mesomorfo",
    nome: "Mesomorfo",
    descricao:
      "Corpo naturalmente atlético e musculoso, facilidade para ganhar massa muscular e perder gordura.",
  },
  {
    id: "endomorfo",
    nome: "Endomorfo",
    descricao:
      "Corpo mais largo e arredondado, tendência a acumular gordura, metabolismo mais lento.",
  },
];

const BiotipoSection = () => {
  const [biotipoSelecionado, setBiotipoSelecionado] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [recomendacao, setRecomendacao] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let mensagem = "";

    if (biotipoSelecionado === "ectomorfo") {
      mensagem +=
        "Como ectomorfo, seu foco deve ser em treinos de força com menor volume de cardio. ";
    } else if (biotipoSelecionado === "mesomorfo") {
      mensagem +=
        "Como mesomorfo, você responde bem a diversos tipos de treino. ";
    } else if (biotipoSelecionado === "endomorfo") {
      mensagem +=
        "Como endomorfo, é importante combinar treinos de força com exercícios aeróbicos e manter uma dieta equilibrada. ";
    }

    if (objetivo.toLowerCase().includes("massa")) {
      mensagem += "Priorize treinos de hipertrofia e alimentação rica em proteínas.";
    } else if (objetivo.toLowerCase().includes("emagrecer")) {
      mensagem += "Inclua treinos aeróbicos e mantenha uma dieta com déficit calórico.";
    } else {
      mensagem += "Mantenha uma rotina equilibrada de treinos e alimentação.";
    }

    setRecomendacao(mensagem);
  };

  return (
    <section className="bg-white pb-20 pt-10">
      <div className="mx-45">
        <h2 className="text-4xl font-bold mb-10 text-center">Descubra seu Biotipo</h2>
        <div className="flex justify-between gap-10 mb-10">
          {biotipos.map((biotipo) => (
            <div
              key={biotipo.id}
              className={`w-1/3 p-6 border rounded ${
                biotipoSelecionado === biotipo.id
                  ? "border-amber-300"
                  : "border-gray-300"
              }`}
              onClick={() => setBiotipoSelecionado(biotipo.id)}
              style={{ cursor: "pointer" }}
            >
              <h3 className="text-2xl font-bold mb-2">{biotipo.nome}</h3>
              <p className="text-gray-600">{biotipo.descricao}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="objetivo" className="block mb-2">
              Qual é seu objetivo na academia?
            </label>
            <input
              type="text"
              id="objetivo"
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-amber-300"
              placeholder="Ex: Ganhar massa muscular, emagrecer, etc."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-amber-300 text-white px-6 py-2 rounded hover:bg-amber-400 transition-colors"
          >
            Ver Recomendação
          </button>
        </form>
        {recomendacao && (
          <div className="mt-6 p-4 border border-amber-300 rounded bg-amber-50">
            <h4 className="text-xl font-bold mb-2">Recomendação:</h4>
            <p>{recomendacao}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BiotipoSection;
