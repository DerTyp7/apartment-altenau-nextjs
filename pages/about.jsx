/* eslint-disable @next/next/no-img-element */
import Map from "../components/Map";
import styles from "../styles/About.module.scss";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

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

export default function About({ localeTexts }) {
	return (
		<div className={styles.about}>
			<h1>{localeTexts?.about?.headline}</h1>
			<div className={styles.aboutContent}>
				<div className={styles.aboutContentText}>
					<img
						src={localeTexts?.about?.image?.url}
						alt={localeTexts?.about?.image?.alt}
					/>

					<div
						dangerouslySetInnerHTML={{
							__html: localeTexts?.about?.content,
						}}
					></div>
				</div>

				<div className={styles.aboutContentInformation}>
					<div
						dangerouslySetInnerHTML={{
							__html: localeTexts?.about?.information,
						}}
					></div>
					<div className={styles.aboutContentInformationText}>
						<Map width={"100%"} height="400px" />
					</div>
				</div>
			</div>
		</div>
	);
}
