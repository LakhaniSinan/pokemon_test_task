
import { useGetPokemonsQuery } from './services/api';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './containers/PokemonList';
import PokemonDetails from './containers/PokemonDetails';

function App() {
  const { data, error, isLoading, isFetching } = useGetPokemonsQuery();

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
