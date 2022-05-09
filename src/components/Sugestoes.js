function Sugestao({ imagem, usuario, razao }) {
    return (
      <div class="sugestao">
        <div class="usuario">
          <img src={`assets/img/${imagem}`} />
          <div class="texto">
            <div class="nome">{usuario}</div>
            <span class="razao">{razao}</span>
          </div>
        </div>
  
        <div class="seguir">Seguir</div>
      </div>
    );
  }
  
  export default function Sugestoes() {
    const sugestoes = [
      { imagem: "bad.vibes.memes.svg", usuario: "bad.vibes.memes", razao: "Segue você" },
      { imagem: "chibirdart.svg", usuario: "chibirdart", razao: "Segue você" },
      { imagem: "razoesparaacreditar.svg", usuario: "razoesparaacreditar", razao: "Novo no Instagram" },
      { imagem: "adorable_animals.svg", usuario: "adorable_animals", razao: "Segue você" },
      { imagem: "smallcutecats.svg", usuario: "smallcutecats", razao: "Segue você" },
    ];
  
    return (
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
  
        {sugestoes.map(sugestao => (
          <Sugestao imagem={sugestao.imagem} usuario={sugestao.usuario} razao={sugestao.razao} />
        ))}
      </div>
    );
  }