import "../styles/Map.module.scss";

function Map({ width = "100%", height = "100%", showAddressText }) {
	return (
		<div
			className="map"
			style={
				typeof window !== "undefined"
					? {
							width: width > window.innerWidth ?? "100%",
							height: height > window.innerHeight ?? "100%",
					  }
					: {
							width: "100%",
							height: "100%",
					  }
			}
		>
			<iframe
				id="googleMap"
				title="Google Maps"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2074.752438061636!2d10.442157776201181!3d51.80048944135434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b37fa3d7cd9a35%3A0xf42c1941b19fcd8d!2sFerienwohnung%20Glockenberg!5e0!3m2!1sde!2sde!4v1664554395680!5m2!1sde!2sde"
				style={{ border: "0" }}
				width={width}
				height={height}
				allowfullscreen="true"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
			{showAddressText ? (
				<a
					className="textMuted"
					href="https://www.google.com/maps/place/Ferienwohnung+Glockenberg/@51.8004894,10.4421578,17.25z/data=!4m13!1m7!3m6!1s0x47a5160eb8d1cf11:0x425ac6d94ac3f50!2sAltenau!3b1!8m2!3d51.8023804!4d10.4457294!3m4!1s0x47b37fa3d7cd9a35:0xf42c1941b19fcd8d!8m2!3d51.8004498!4d10.440787"
				>
					Auf dem Glockenberg 26, C1 5-6, 38707 Altenau
				</a>
			) : (
				""
			)}
		</div>
	);
}

export default Map;
