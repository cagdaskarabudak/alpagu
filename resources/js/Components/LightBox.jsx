import { useEffect, useState, useRef } from "react";

export default function LightBox({images, defaultStorage='/storage/images/project_images/'}){
    const [imageDoms, setImageDoms] = useState([]);
    const [activeImage, setActiveImage] = useState(null);
    const lightBoxDom = useRef(null);
    const lightBoxViewImage = useRef(null);
    useEffect(() => {
        const imageElements = images.map((image, index) => (
            <div className="image" key={index} onClick={() => {
                setActiveImage({
                    image: image, 
                    index: index});
            }}>
                <img src={defaultStorage+image.src} alt={image.alt}/>
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
        lightBoxViewImage.current.src = defaultStorage+activeImage.image.src;
        lightBoxDom.current.style.display = 'flex';
    }

    const closeLightBoxViewSecond = () => {
        lightBoxViewImage.current.src = '';
        setActiveImage(null);
        lightBoxDom.current.style.display = 'none';
    }

    const closeLightBoxView = (event) => {
        if(event.target.classList.contains('lightbox-view')){
            lightBoxViewImage.current.src = '';
            setActiveImage(null);
            lightBoxDom.current.style.display = 'none';
        }
    }

    const prevLightBoxView = () => {
        let newActiveImage = images[activeImage.index-1];
        if(newActiveImage){
            setActiveImage({
                image: newActiveImage,
                index: activeImage.index-1,
            });
        }
    }
    const nextLightBoxView = () => {
        let newActiveImage = images[activeImage.index+1];
        if(newActiveImage){
            setActiveImage({
                image: newActiveImage,
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
                    <button className={'btn btn-dark rounded-circle prev-btn'} onClick={prevLightBoxView}><i className="fa-solid fa-chevron-left"></i></button>
                    <button className={'btn btn-dark rounded-circle next-btn'} onClick={nextLightBoxView}><i className="fa-solid fa-chevron-right"></i></button>
                    <img src="" alt="" ref={lightBoxViewImage}/>
                </div>
            </div>
        </div>
    )
}