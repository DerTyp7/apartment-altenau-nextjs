import "../styles/variables.scss";
import "../styles/globals.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Nav {...pageProps} />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer {...pageProps} />
		</>
	);
}
