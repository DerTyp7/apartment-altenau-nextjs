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
	const dataFurnishings = await getDocs(collection(db, "furnishings"));

	return {
		props: {
			localeTexts: dataLocale.data() ?? {},
			furnishings:
				dataFurnishings.docs.map((doc) => ({ ...doc.data(), id: doc.id })) ??
				{},
		},
	};
}

export default function Furnishing({ furnishings, localeTexts }) {
	const { locale } = useRouter();
	return (
		<div className={styles.surroundings}>
			<h1 className="pageHeadline">{localeTexts?.furnishings?.headline}</h1>

			{furnishings.map((s, i) => {
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
