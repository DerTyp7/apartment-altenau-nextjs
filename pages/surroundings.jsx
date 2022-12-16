/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Surroundings.module.scss";
import { db } from "../firebase-config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";

export async function getInitialProps({ router }) {
	let pageProps = {};
	const { locale } = router;

	return { pageProps, locale };
}

export async function getServerSideProps({ locale }) {
	const dataLocale = await getDoc(doc(db, "localeTexts", locale));
	const dataSurroundings = await getDocs(collection(db, "surroundings"));

	return {
		props: {
			localeTexts: dataLocale.data() ?? {},
			surroundings:
				dataSurroundings.docs.map((doc) => ({ ...doc.data(), id: doc.id })) ??
				{},
		},
	};
}

export default function Surroundings({ surroundings, localeTexts }) {
	const { locale } = useRouter();
	return (
		<div className={styles.surroundings}>
			<h1 className="pageHeadline">{localeTexts?.surroundings?.headline}</h1>

			{surroundings.map((s, i) => {
				{
					console.log(locale);
				}
				return (
					<div className={styles.surroundingsItem} key={i}>
						<h4>{locale === "en" ? s.title.en : s.title.de}</h4>
						<div className={styles.surroundingsItemImgContainer}>
							<img
								src={s.image.url}
								alt={locale === "en" ? s.title.en : s.title.de}
							/>
							<div>
								{s.links.map((l, i2) => {
									return (
										<a key={i2} href={l.url}>
											{locale === "en" ? l.text.en : l.text.de}
										</a>
									);
								})}
							</div>
						</div>
						<div
							dangerouslySetInnerHTML={{
								__html: locale === "en" ? s.text.en : s.text.de,
							}}
						/>
					</div>
				);
			})}
		</div>
	);
}
