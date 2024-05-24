import { useNavigate } from 'react-router-dom';
import { useGetPokemonsQuery } from '../services/api';

const PokemonList = () => {
    const navigate = useNavigate()
    const { data, error, isLoading } = useGetPokemonsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading Pokémons</div>;

    return (
        <div >
            <div style={{ background: "#2e7df6", padding: "12px 0", marginLeft: "20px", paddingLeft: "5px", width: "35%" }}>
                <h2 style={{ color: "#fff", margin: 0 }}>PokeReact</h2>
            </div>
            <div style={{ marginLeft: "20px", marginTop: "15px", width: "35%" }}>
                {data?.results.map((item, inddddd) => {
                    console.log(item, "itemitemitemitemitemitem")
                    return (
                        <div
                            style={{ marginBottom: "8px", borderTop: `1px solid ${data?.results?.length - 1 !== inddddd ? '#efefef' : 'none'}`, display: "flex", alignItems: "center", padding: "10px 0", cursor: "pointer" }}
                            onClick={() => navigate(`/pokemon/${item.name}`, {
                                state: item.url
                            })}
                            key={item.name}>
                            <p style={{ margin: 0, textTransform: "capitalize" }}>
                                {item.name}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PokemonList