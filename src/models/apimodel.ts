export interface Pokemon {
    url: string,
    name: string
}

export interface PokemonApiResponse {
    results: Pokemon[]
}

export interface PokemonDetailResponse {
    name: string;
    height: number;
    weight: number;
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
    base_experience: number;
    sprites: {
        front_default: string;
    };
}

export interface PokemonNestedDetailResponse {
    type: object;
}

interface TypeDetail {
    name: string;
    url: string;
}

export interface PokemonType {
    slot: number;
    type: TypeDetail;
}
