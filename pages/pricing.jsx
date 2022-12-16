import styles from "../styles/Pricing.module.scss";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
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

function Pricing() {
	return (
		<div className={styles.pricing}>
			<h1 className="pageHeadline">Pricing</h1>
		</div>
	);
}

export default Pricing;
