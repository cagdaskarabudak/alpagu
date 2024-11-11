import { useEffect, useState, useRef } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function LightBox({images, defaultStorage='/storage/images/project_images/'}){
    const [imageDoms, setImageDoms] = useState([]);
    const [activeImage, setActiveImage] = useState(null);
    const lightBoxDom = useRef(null);
    const [lightBoxViewImage, setLightBoxViewImage] = useState([]);
    useEffect(() => {
        const imageElements = images.map((image, index) => (
            <div className="image" key={index} onClick={() => {
                setActiveImage({
                    src: defaultStorage+image.src,
                    index: index});
            }}>
                <LazyLoadImage src={defaultStorage+image.src} alt={image.alt} effect="blur"/>
            </div>
        ));

        setImageDoms(imageElements);
    }, []);

    useEffect(()=>{
        if(activeImage != null) {
            OpenLightBoxView();
        }
        else{
            closeLightBoxViewSecond();
        }
    }, [activeImage]);

    const OpenLightBoxView = ()=>{
        lightBoxDom.current.style.display = 'flex';
        setLightBoxViewImage(
            <LazyLoadImage src={activeImage.src} effect="blur" />
        );
    }

    const closeLightBoxViewSecond = () => {
        setLightBoxViewImage('');
        setActiveImage(null);
        lightBoxDom.current.style.display = 'none';
    }

    const closeLightBoxView = (event) => {
        if(event.target.classList.contains('lightbox-view')){
            setLightBoxViewImage('');
            setActiveImage(null);
            lightBoxDom.current.style.display = 'none';
        }
    }

    const prevLightBoxView = () => {
        let newActiveImage = images[activeImage.index-1];
        if(newActiveImage){
            setActiveImage({
                src: defaultStorage+newActiveImage.src,
                index: activeImage.index-1,
            });
        }
    }
    const nextLightBoxView = () => {
        let newActiveImage = images[activeImage.index+1];
        if(newActiveImage){
            setActiveImage({
                src: defaultStorage+newActiveImage.src,
                index: activeImage.index+1,
            });
        }
    }

    return (
        <div>
            <div className={"lightbox-gallery"}>
                {imageDoms}
            </div>
            <div className="lightbox-view" onClick={closeLightBoxView} ref={lightBoxDom}>
                <div className="image">
                    <button className={'btn btn-danger rounded-circle close-btn'} onClick={closeLightBoxViewSecond}><i className="fa-solid fa-x"></i></button>
                    <button className={'btn btn-dark rounded-circle prev-btn'} disabled={activeImage != null && activeImage.index == 0} onClick={prevLightBoxView}><i className="fa-solid fa-chevron-left"></i></button>
                    <button className={'btn btn-dark rounded-circle next-btn'} disabled={activeImage != null && activeImage.index == images.length-1} onClick={nextLightBoxView}><i className="fa-solid fa-chevron-right"></i></button>
                    {lightBoxViewImage}
                </div>
            </div>
        </div>
    )
}