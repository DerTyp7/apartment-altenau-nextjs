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
export default function Privacy({ localeTexts }) {
	return (
		<div className="legalAndPrivayContainer">
			<h1>{localeTexts?.privacy?.headline}</h1>
			<div
				className="content"
				dangerouslySetInnerHTML={{
					__html: localeTexts?.privacy?.content,
				}}
			></div>
		</div>
	);
}
