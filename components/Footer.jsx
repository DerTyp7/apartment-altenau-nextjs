import Link from "next/link";
import styles from "../styles/Footer.module.scss";

export default function Footer({ localeTexts }) {
	return (
		<div className={styles.footer}>
			<ul className={styles.footerLinks}>
				<Link href="/legal">{localeTexts?.footer?.legal}</Link>
				<Link href="/privacy">{localeTexts?.footer?.privacy}</Link>
			</ul>
			<p className={styles.copyrightText}>&#169; altenau-meister.de</p>
		</div>
	);
}
