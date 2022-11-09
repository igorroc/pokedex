import React, { useEffect } from "react"
import CardPokemon from "../CardPokemon"

export default function ListaPokemons() {
	const [pokemons, setPokemons] = React.useState([])
	const [loading, setLoading] = React.useState(true)

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setLoading(false)
				setPokemons(data.results)
			})
	}, [])

	return (
		<>
			{loading ? (
				<p>Carregando...</p>
			) : (
				pokemons.map((pokemon) => (
					<CardPokemon name={pokemon.name} api={pokemon.url} />
				))
			)}
		</>
	)
}
