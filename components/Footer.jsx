import Link from "next/link";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<ul className={styles.footerLinks}>
				<Link href="/legal">Legal Notice | Impressum</Link>
				<Link href="/privacy">Privacy | Datenschutz</Link>
			</ul>
			<p className={styles.copyrightText}>&#169; domain.de</p>
		</div>
	);
}
