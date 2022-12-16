import "../styles/Map.module.scss";

function Map({ width = "100%", height = "100%", showAddressText }) {
	return (
		<div className="map" style={{ width: "100%", height: "100%" }}>
			<iframe
				id="googleMap"
				title="Google Maps"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.389121459009!2d10.44007971592097!3d51.79905019715754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a53de8d1f2036b%3A0xa3576fefcd67d4db!2sAuf%20dem%20Glockenberg%208%2C%2038707%20Altenau!5e0!3m2!1sen!2sde!4v1671228340863!5m2!1sen!2sde"
				style={{ border: "0" }}
				width={width}
				height={height}
				loading="lazy"
			></iframe>
			{showAddressText ? (
				<a
					className="textMuted"
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.google.com/maps/place/Auf+dem+Glockenberg+8,+38707+Altenau/@51.7990502,10.4400797,17z/data=!3m1!4b1!4m5!3m4!1s0x47a53de8d1f2036b:0xa3576fefcd67d4db!8m2!3d51.7990469!4d10.4422684?hl=en"
				>
					Auf dem Glockenberg 8, 38707 Altenau
				</a>
			) : (
				""
			)}
		</div>
	);
}

export default Map;
