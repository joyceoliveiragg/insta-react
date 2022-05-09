import CardUsuario from "./CardUsuario";
import Sugestoes from "./Sugestoes";

export default function Sidebar() {
  const usuario = {
    imagem: "catanacomics.svg",
    usuario: "catanacomics",
    nome: "Catana"
  }

  return (
    <div class="sidebar">
      <CardUsuario imagem={usuario.imagem} usuario={usuario.usuario} nome={usuario.nome} />

      <Sugestoes />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  );
}