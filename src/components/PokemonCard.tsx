interface pokemon {
  name: string;
  imgSrc?: string;
}

interface PokemonCardProps {
  pokemon: pokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return pokemon.imgSrc ? (
    <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  ) : (
    <figure>
      <p>???</p>
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
