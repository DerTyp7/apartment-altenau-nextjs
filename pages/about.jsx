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

export default function About() {
	return (
		<div className={styles.about}>
			<h1>About</h1>
			<div className={styles.aboutContent}>
				<div className={styles.aboutContentText}>
					<img src="/images/test.jpg" alt="" />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
					quos ea pariatur at qui amet? Repellat recusandae illum sequi, rem,
					deleniti delectus culpa dolorem nostrum odit excepturi provident iste?
					Illum temporibus saepe esse reiciendis delectus veniam voluptas vero
					voluptates earum, ea porro quos numquam ex, modi corrupti nam, iusto
					minima deserunt non accusantium quibusdam eaque quod! Quaerat, quam
					sunt. Assumenda vitae dconssectetur reprehenderit, cum quaerat tempore
					nisi quod ex amet modi delectus porro! Ipsam, numquam excepturi qui ut
					ipsa ipsum error consequatur magni alias molestiae labore explicabo
					laboriosam repellendus. Assumenda vitae consectetur reprehenderit, cum
					quaerat tempore nisi quod ex amet modi delectus porro! Ipsam, numquam
					excepturi qui ut ipsa ipsum error consequatur magni alias molestiae
					labore explicabo laboriosam repellendus.
				</div>

				<div className={styles.aboutContentInformation}>
					<div>
						<h3>Information</h3>
						<b>Email:</b> test-test@test.com <br />
						<b>Address:</b> Auf dem Glockenberg 26 38707 Altenau <br />
					</div>
					<div className={styles.aboutContentInformationText}>
						<Map width={"100%"} height="400px" />
					</div>
				</div>
			</div>
		</div>
	);
}
