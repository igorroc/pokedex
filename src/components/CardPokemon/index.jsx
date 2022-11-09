import React, { useEffect, useState } from "react"
import TypeColor from "../../utils/TypeColor"
import { capitalize } from "../../utils/StringFunctions"
import { Grid } from "react-loader-spinner"
import { Link } from "react-router-dom"

export default function CardPokemon(props) {
	const [pokemon, setPokemon] = useState({})
	const [typeColor, setTypeColor] = useState("")
	const [url, setUrl] = useState("")

	useEffect(() => {
		fetch(props.api)
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setPokemon(data)
				setTypeColor(TypeColor[data.types[0].type.name])
				setUrl(`./pokemon/${data.id}`)
			})
	}, [props.api])

	return (
		<Link
			style={{
				textDecoration: "none",
				color: "inherit",
				display: "flex",
			}}
			to={url}
		>
			<div
				style={{
					backgroundColor: typeColor,
					borderRadius: "10px",
					boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
					display: "flex",
					flexDirection: "column",
					padding: "10px",
					width: "150px",
				}}
			>
				<h2>{pokemon.name ? capitalize(pokemon.name) : props.name}</h2>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "5px",
					}}
				>
					{pokemon.types ? (
						pokemon.types.map((type, index) => (
							<span
								key={index}
								style={{
									backgroundColor: "#fff4",
									border: "1px solid #fff",
									borderRadius: "100px",
									padding: "5px 15px",
								}}
							>
								{capitalize(type.type.name)}
							</span>
						))
					) : (
						<Grid
							height="40"
							width="40"
							color="#ebebeb"
							ariaLabel="grid-loading"
							radius="6"
							wrapperStyle={{}}
							wrapperClass=""
							visible={true}
						/>
					)}
				</div>
				<img
					src={pokemon.sprites ? pokemon.sprites.front_default : ""}
					alt={pokemon.name}
				/>
			</div>
		</Link>
	)
}
