import React, { useEffect } from "react"
import CardPokemon from "../CardPokemon"

export default function ListaPokemons() {
	const [pokemons, setPokemons] = React.useState([])
	const [loading, setLoading] = React.useState(true)

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
			.then((response) => response.json())
			.then((data) => {
				setLoading(false)
				setPokemons(data.results)
			})
	}, [])

	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				gap: "5px",
				justifyContent: "center",
			}}
		>
			{loading ? (
				<p>Carregando...</p>
			) : (
				pokemons.map((pokemon, index) => (
					<CardPokemon
						name={pokemon.name}
						api={pokemon.url}
						key={index}
					/>
				))
			)}
		</div>
	)
}
