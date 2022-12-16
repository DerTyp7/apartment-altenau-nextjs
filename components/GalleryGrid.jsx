/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "../styles/GalleryGrid.module.scss";
import { useRouter } from "next/router";

function GalleryGrid({ images, baseURL }) {
	const router = useRouter();
	const locale = router.locale;

	return (
		<div className={styles.galleryGrid}>
			<div className={styles.galleryGridGrid}>
				{images.length > 0
					? images.map((image, i) => (
							<div
								key={i}
								onClick={() => router.push({ search: "activeImg=" + image.id })}
								className="noSelect"
							>
								<img
									src={image.url}
									alt={locale === "en" ? image.title.en : image.title.de}
								/>
								<div className={styles.galleryImageTitle}>
									<p>{locale === "en" ? image.title.en : image.title.de}</p>
								</div>
							</div>
					  ))
					: ""}
			</div>
		</div>
	);
}

export default GalleryGrid;
