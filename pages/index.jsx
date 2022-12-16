import Head from "next/head";
import Nav from "../components/Nav";
import Image from "next/image";
import Link from "next/link";
import {
	faBeer,
	faBreadSlice,
	faSeedling,
	faSpa,
	faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import "react-slideshow-image/dist/styles.css";
//import { LocaleTextsContext } from "../App";
import DiashowHomePage from "../components/DiashowHomePage";
import Map from "../components/Map";
import styles from "../styles/Home.module.scss";
import { db } from "../firebase-config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export async function getInitialProps({ router }) {
	let pageProps = {};
	const { locale } = router;

	return { pageProps, locale };
}

export async function getServerSideProps({ locale }) {
	const data = await getDoc(doc(db, "localeTexts", locale));

	return {
		props: { localeTexts: data.data() ?? {} },
	};
}

export default function Home({ localeTexts }) {
	return (
		<div className={styles.home}>
			<DiashowHomePage titleLanguage={"eng"} height={"600px"} />

			<div className={styles.homeSurroundings}>
				<ul>
					<Link href={"/surroundings"}>
						<FontAwesomeIcon icon={faBreadSlice} />
						Backeries
					</Link>

					<Link href={"/surroundings"}>
						<FontAwesomeIcon icon={faUtensils} />
						Amenities
					</Link>
					<Link href={"/surroundings"}>
						<FontAwesomeIcon icon={faBeer} />
						Brewery
					</Link>

					<Link href={"/surroundings"}>
						<FontAwesomeIcon icon={faSeedling} />
						Kräuterpark
					</Link>
					<Link href={"/surroundings"}>
						<FontAwesomeIcon icon={faSpa} />
						Spa park
					</Link>
				</ul>
			</div>

			<div className={styles.homeGrid}>
				<div className={styles.homeIntroduction}>
					<h2>{localeTexts?.home?.introduction?.headline ?? ""}</h2>
					<p
						dangerouslySetInnerHTML={{
							__html: localeTexts?.home?.introduction?.text ?? "",
						}}
					></p>
				</div>
				<div className={styles.homeMapContainer}>
					<Map showAddressText />
				</div>
			</div>
		</div>
	);
}
