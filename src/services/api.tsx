import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon, PokemonApiResponse, PokemonDetailResponse } from '../models/apimodel';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getPokemons: builder.query<PokemonApiResponse, void>({
            query: () => 'pokemon',
        }),
        getPokemon: builder.query<PokemonDetailResponse, string>({
            query: (id) => `${id}`
        })
    }),
});

export const { useGetPokemonsQuery, useGetPokemonQuery } = api; 
