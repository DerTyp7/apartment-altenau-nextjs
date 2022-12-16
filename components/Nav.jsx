import Link from "next/link";
import styles from "../styles/Nav.module.scss";
import LocaleSwitch from "./LocaleSwitch";
import { useRouter } from "next/router";

export default function Nav({ localeTexts }) {
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<nav className={styles.nav}>
			<h2
				className={styles.brandName}
				onClick={(e) => {
					window.location = "/";
				}}
			>
				{localeTexts?.nav?.brandName ?? ""}
				{router.locale}
			</h2>

			<ul className={styles.navNavigationLeft}>
				<Link
					href="/"
					className={currentRoute === "/" ? `${styles.active}` : ""}
				>
					{localeTexts?.nav?.home ?? ""}
				</Link>
				<Link
					href="/surroundings"
					className={currentRoute === "/surroundings" ? `${styles.active}` : ""}
				>
					{localeTexts?.nav?.surroundings ?? ""}
				</Link>
				<Link
					href="/gallery"
					className={currentRoute === "/gallery" ? `${styles.active}` : ""}
				>
					{localeTexts?.nav?.gallery ?? ""}
				</Link>

				<Link
					href="/pricing"
					className={currentRoute === "/pricing" ? `${styles.active}` : ""}
				>
					{localeTexts?.nav?.pricing ?? ""}
				</Link>
				<Link
					href="/about"
					className={currentRoute === "/about" ? `${styles.active}` : ""}
				>
					{localeTexts?.nav?.about ?? ""}
				</Link>
			</ul>
			<div className={styles.navNavigationRight}>
				<button
					className={styles.btnContact}
					id="navigationLinkBooking"
					onClick={(e) => {
						window.location = "/booking";
					}}
				>
					{localeTexts?.nav?.booking ?? ""}
				</button>
				<LocaleSwitch styles={styles} />
			</div>
		</nav>
	);
}
