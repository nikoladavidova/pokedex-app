interface PokemonDetailsPropsTypes {


    name: string;
    image: string;
    height:number;
    weight:number;
    types: string[];
    abilities: string[];
}

export default function PokemonDetails(props: PokemonDetailsPropsTypes) {
    const { pokemon } = props;
    return (

        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center p-3 m-5 w-80 rounded-5 border-solid border-4 border-amber-200 hover:border-amber-100">
                <h2>{pokemon.name}</h2>
                <img src={pokemon.image} />
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Types: {pokemon.types.join(' ')}</p>
                <p>Abilities: {pokemon.abilities.join(' ')}</p>
            </div>
        </div>



    );
}

