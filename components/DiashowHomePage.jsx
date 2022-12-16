import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from "react-slideshow-image"; // https://react-slideshow-image.netlify.app/?path=/story/examples-slide--default
import { db } from "../firebase-config";
import "../styles/DiashowHomePage.module.scss";

function DiashowHomePage(props) {
	const [imageSrc, setImageSrc] = useState([]);
	const [height, setHeight] = useState(500);
	const diashowImagesCollectionRef = collection(db, "diashowImages");

	useEffect(() => {
		async function getImages() {
			const data = await getDocs(diashowImagesCollectionRef);

			const urls = [];
			data.docs.forEach((doc) => {
				urls.push(doc.data().url);
			});

			setImageSrc(urls);
		}
		getImages();
	}, []);

	if (typeof window !== "undefined") {
		window.addEventListener("resize", () => {
			setHeight(window.innerWidth <= 3000 ? 500 : 800);
		});
	}

	return (
		<div className="diashow-div">
			{imageSrc?.length > 0 ? (
				<SimpleImageSlider
					width={"100%"}
					height={height}
					images={imageSrc}
					showBullets={true}
					showNavs={true}
					autoPlay={true}
					autoPlayDelay={15}
					loop={true}
					slideDuration={1}
				/>
			) : (
				""
			)}

			{/* {diashowImages?.length > 0 ? (
        <Slide transitionDuration={1000} autoplay={false}>
          {diashowImages.map((diashowImage, index) => (
            <div className="each-slide" key={index}>
              <div
                style={{
                  backgroundImage: `url(${diashowImage.url})`,
                  height: props.height,
                }}
              >
                {diashowImage.showTitle ? (
                  <span>{renderTitle(diashowImage, props.titleLanguage)}</span>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </Slide>
      ) : (
        ""
      )} */}
		</div>
	);
}

export default DiashowHomePage;
