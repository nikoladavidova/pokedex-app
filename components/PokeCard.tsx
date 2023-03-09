export interface PokemonPropsTypes {

    name: string;
    image: string;
    onClick?: () => void;
}

export default function PokeCard({ name, image, onClick }: PokemonPropsTypes) {

    return (

        <div className="p-3 m-5 w-1/8 rounded-[5px] border-solid border-4 border-amber-200 hover:border-amber-100" onClick={onClick}>
            <div>
                <img src={image} />
            </div>
            <div>
                <div>{name}</div>
            </div>
        </div>
    );
}