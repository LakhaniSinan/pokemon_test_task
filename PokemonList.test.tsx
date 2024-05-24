import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './src/App';
import { act } from 'react-dom/test-utils';
import PokemonList from './src/containers/PokemonList';

test('renders learn react link', () => {
    render(<PokemonList />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});