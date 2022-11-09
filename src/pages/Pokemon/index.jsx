import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { capitalize } from "../../utils/StringFunctions"
import { Icon } from "@iconify/react"

export default function Pokemon() {
	const { id } = useParams()
	const navigate = useNavigate()

	const [pokemon, setPokemon] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/" + id)
			.then((response) => response.json())
			.then((data) => {
				setLoading(false)
				setPokemon(data)
			})
	}, [])

	return (
		<div>
			{loading ? (
				<p>Carregando...</p>
			) : (
				<>
					<button onClick={() => navigate(-1)}>
						<Icon icon="eva:arrow-back-outline" />
					</button>
					<h1>{capitalize(pokemon.name)}</h1>
					<img
						src={pokemon.sprites.front_default}
						alt={pokemon.name}
					/>
					<p>Altura: {pokemon.height}</p>
					<p>Peso: {pokemon.weight}</p>
				</>
			)}
		</div>
	)
}
