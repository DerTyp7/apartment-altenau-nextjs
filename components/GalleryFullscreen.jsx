/* eslint-disable @next/next/no-img-element */
import {
	faAngleLeft,
	faAngleRight,
	faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "../styles/GalleryFullscreen.module.scss";
import { useRouter } from "next/navigation";
function GalleryFullscreen({ images, activeImage }) {
	const router = useRouter();
	const locale = router.locale;
	const [currentImgIndex, setCurrentImgIndex] = useState();

	useEffect(() => {
		images.forEach((image, i) => {
			if (image.id === activeImage.id) {
				setCurrentImgIndex(i);
			}
		});
	}, [activeImage, images]);

	return (
		<div className={styles.galleryFullscreen}>
			<style>
				{`* {
                overflow: hidden !important;
            }`}
			</style>
			<div className={styles.galleryFullscreenTitle}>
				<h2>{locale === "en" ? activeImage.title.en : activeImage.title.de}</h2>
				<div>
					{currentImgIndex + 1} / {images.length}
				</div>
			</div>

			<div className={styles.galleryFullscreenImgContainer}>
				<img
					src={activeImage.url}
					alt={locale === "en" ? activeImage.title.en : activeImage.title.de}
				/>
			</div>

			<FontAwesomeIcon
				icon={faAngleLeft}
				className={`${styles.galleryFullscreenBtn} ${styles.galleryFullscreenBtnCycle} ${styles.galleryFullscreenPrev}`}
				onClick={() =>
					currentImgIndex > 0
						? router.push({
								search: "activeImg=" + images[currentImgIndex - 1].id,
						  })
						: router.push({
								search: "activeImg=" + images[images.length - 1].id,
						  })
				}
			/>
			<FontAwesomeIcon
				icon={faAngleRight}
				className={`${styles.galleryFullscreenBtn} ${styles.galleryFullscreenBtnCycle} ${styles.galleryFullscreenNext}`}
				onClick={() =>
					currentImgIndex < images.length - 1
						? router.push({
								search: "activeImg=" + images[currentImgIndex + 1].id,
						  })
						: router.push({
								search: "activeImg=" + images[0].id,
						  })
				}
			/>

			<FontAwesomeIcon
				icon={faClose}
				className={`${styles.galleryFullscreenBtn} ${styles.galleryFullscreenClose}`}
				onClick={() => router.push("/gallery")}
			/>
		</div>
	);
}

export default GalleryFullscreen;
