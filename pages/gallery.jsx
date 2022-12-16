import { useEffect, useState } from "react";
import GalleryFullscreen from "../components/GalleryFullscreen";
import GalleryGrid from "../components/GalleryGrid";
import { db } from "../firebase-config";
import styles from "../styles/Gallery.module.scss";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
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

export default function Gallery({ localeTexts }) {
	const router = useRouter();

	const [searchParams, setSearchParams] = useSearchParams();
	const [activeImage, setActiveImage] = useState(null);
	const [images, setImages] = useState([]);
	const imagesCollectionRef = collection(db, "galleryImages");

	useEffect(() => {
		async function getImages() {
			const data = await getDocs(imagesCollectionRef);
			setImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		}

		getImages();

		setActiveImage(
			images.find((image) => {
				return image.id === router.query?.activeImg;
			})
		);
	}, []);

	useEffect(() => {
		setActiveImage(
			images.find((image) => {
				return image.id === router.query?.activeImg;
			})
		);
	}, [searchParams, images, activeImage, router]);

	return (
		<div className={styles.gallery}>
			<h1 className="pageHeadline">{localeTexts?.gallery?.headline}</h1>
			{activeImage ? (
				<GalleryFullscreen activeImage={activeImage} images={images} />
			) : (
				<GalleryGrid images={images} />
			)}
		</div>
	);
}
