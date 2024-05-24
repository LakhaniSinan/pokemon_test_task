import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useGetPokemonQuery } from '../services/api';

const PokemonDetails: React.FC = () => {
    const location = useLocation()
    const { data, error, isLoading } = useGetPokemonQuery(location.state || "");
    console.log(data, "datadatadata");

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading Pokémon details</div>;

    const renderSameRows = (name: string, value: any) => {
        return (
            <div
                style={{ marginBottom: "8px", borderTop: `1px solid #efefef`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", }}>
                <h4 style={{ margin: 0 }}>{name}</h4>
                <p style={{ margin: 0 }}>{value}</p>
            </div>
        )
    }

    const renderTypes = () => {
        let newValueee = ''
        data?.types?.map((valueee) => {
            newValueee += `${valueee.type.name} `
        })
        return newValueee
    }

    return (
        <div>
            <div style={{ background: "#2e7df6", padding: "12px 0", marginLeft: "20px", paddingLeft: "5px", width: "35%" }}>
                <h2 style={{ color: "#fff", margin: 0, textTransform: "capitalize" }}>{data?.name}</h2>
            </div>
            <div style={{ marginLeft: "20px", marginTop: "15px", width: "35%", }}>
                <div style={{ textAlign: "center" }}>
                    <img src={data?.sprites.front_default} alt={data?.name} style={{ width: "100px", height: "100px" }} />
                </div>
                {renderSameRows("Name", data?.name)}
                {renderSameRows("Height", `${data?.height} cm`)}
                {renderSameRows("Weight", `${data?.weight} kg`)}
                {renderSameRows("Best Experience", data?.base_experience)}

                <div
                    style={{ marginBottom: "8px", borderTop: `1px solid #efefef`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", }}>
                    <h4 style={{ margin: 0 }}>Types</h4>
                    <p style={{ margin: 0 }}>{renderTypes()}</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;
