import LightGallery from 'lightgallery/react';
import "./styles.css"

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';

import data from "../../../assets/galleryImagesData"

function Gallery() {
    // const data = data2.slice(0,3);
    return (
        <div id="gallery" className="gallery">
            <h3 className='font-bold text-[#002e5b] text-4xl text-center pt-32 -tracking-tight'>
                Our Gallery
            </h3>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen]}
            >

                {data.map((image, index) => {
                    return (
                        <a href={image.imgSrc} key={index}>
                            <img alt={"img-"+image.id} src={image.imgSrc} />
                        </a>
                    )
                })}
            </LightGallery>
        </div>
    );
}

export default Gallery;