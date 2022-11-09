import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { capitalize } from "../../utils/StringFunctions"
import { Icon } from "@iconify/react"

export default function Pokemon() {
	const { id } = useParams()
	const navigate = useNavigate()

	const [pokemon, setPokemon] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/" + id)
			.then((response) => response.json())
			.then((data) => {
				setLoading(false)
				setPokemon(data)
			})
			.catch((err) => {
				console.log(err)
				setError(true)
				setLoading(true)
			})
	}, [])

	return (
		<div>
			{loading ? (
				error ? (
					<div>
						<h1>Erro ao carregar o pokemon</h1>
						<button onClick={() => navigate(-1)}>Voltar</button>
					</div>
				) : (
					<p>Carregando...</p>
				)
			) : (
				<main
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: "1rem",
						paddingTop: "20rem",
						position: "relative",
					}}
				>
					<button
						onClick={() => navigate(-1)}
						style={{
							position: "absolute",
							top: "1rem",
							left: "1rem",
						}}
					>
						<Icon icon="eva:arrow-back-outline" />
					</button>
					<div
						style={{
							position: "relative",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							gap: "1rem",
							background: "#fff",
							color: "#232323",
							borderRadius: "3rem",
							width: "100%",
							height: "100%",
						}}
					>
						<img
							src={pokemon.sprites.front_default}
							alt={pokemon.name}
							style={{
								width: "25rem",
								position: "absolute",
								top: "-1em",
							}}
						/>
						<h2>{capitalize(pokemon.name)}</h2>
						<p>Altura: {pokemon.height}</p>
						<p>Peso: {pokemon.weight}</p>
					</div>
				</main>
			)}
		</div>
	)
}
