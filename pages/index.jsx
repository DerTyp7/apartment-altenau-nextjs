import Head from "next/head";
import Nav from "../components/Nav";
import Image from "next/image";
import Link from "next/link";
import {
	faBeer,
	faBreadSlice,
	faCity,
	faHiking,
	faHillRockslide,
	faHouseChimney,
	faMountain,
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
						<FontAwesomeIcon icon={faMountain} />
						{localeTexts?.home?.surroundings?.brocken}
					</Link>

					<Link href={"/surroundings"}>
						<FontAwesomeIcon icon={faUtensils} />
						{localeTexts?.home?.surroundings?.amenities}
					</Link>
					<Link href={"/surroundings"}>
						<FontAwesomeIcon icon={faHouseChimney} />
						{localeTexts?.home?.surroundings?.torfhaus}
					</Link>
					<Link href={"/surroundings"}>
						<FontAwesomeIcon icon={faCity} />
						{localeTexts?.home?.surroundings?.goslar}
					</Link>

					<Link href={"/surroundings"}>
						<FontAwesomeIcon icon={faHiking} />
						{localeTexts?.home?.surroundings?.hiking}
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
				<div className={styles.homeSideContainer}>
					<Map showAddressText />
					<Image
						src={"/images/grundriss.jpg"}
						width={300}
						height={500}
						alt="Grundriss"
					/>
				</div>
			</div>
		</div>
	);
}
