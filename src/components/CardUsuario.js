export default function CardUsuario({ usuario, imagem, nome }) {
    return (
      <div class="usuario">
        <img src={`assets/img/${imagem}`} />
        <div class="texto">
          <strong>{usuario}</strong>
          <span>{nome}</span>
        </div>
      </div>
    );
  }