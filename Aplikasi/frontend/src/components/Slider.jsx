import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../css/Slider.css';
import sapi1 from '../images/sapi1.png';
import sapi2 from '../images/sapi2.jpeg';
import sapi3 from '../images/sapi3.jpeg';
import sapi4 from '../images/sapi4.jpeg';

const Slider = () => {
    const imageContainerRef = useRef(null);
    const images = [sapi1, sapi2, sapi3, sapi4];
    const desktopScrollStep = 500;
    const mobileScrollStep = 200; // Nilai untuk layar kecil
    const autoplayInterval = 4000;

    const [scrollPos, setScrollPos] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const scrollStep = window.innerWidth <= 768 ? mobileScrollStep : desktopScrollStep;

    const scrollLeft = () => {
        const container = imageContainerRef.current;
        const newPosition = container.scrollLeft - scrollStep;

        if (newPosition <= 0) {
            container.scrollLeft = container.scrollWidth - container.clientWidth;
        } else {
            container.scrollLeft = newPosition;
        }

        setScrollPos(container.scrollLeft);
    };

    const scrollRight = () => {
        const container = imageContainerRef.current;
        const newPosition = container.scrollLeft + scrollStep;

        if (newPosition >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
        } else {
            container.scrollLeft = newPosition;
        }

        setScrollPos(container.scrollLeft);
    };

    const startAutoplay = () => {
        stopAutoplay();
        const newIntervalId = setInterval(() => {
            scrollRight();
        }, autoplayInterval);
        setIntervalId(newIntervalId);
    };

    const stopAutoplay = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    const [activeIndex, setActiveIndex] = useState(0); // Tambahkan state untuk indeks aktif

    const handleIndicatorClick = (index) => {
        // Fungsi untuk menangani klik pada indikator
        const container = imageContainerRef.current;
        const newPosition = index * scrollStep;

        container.scrollLeft = newPosition;
        setScrollPos(container.scrollLeft);
        setActiveIndex(index);
    };

    useEffect(() => {
        AOS.init();
        setScrollPos(imageContainerRef.current.scrollRight);
    }, []);

    return (
        <div
            className="slide-container"
            onMouseOver={() => { startAutoplay(); }}
            onMouseOut={stopAutoplay}>
            <div
                className="content"
                data-aos="slide-right"
            >
                <div className="prev" onClick={() => { scrollLeft(); }} data-aos="slide-right"></div>
                <div
                    className="slide-container"
                    data-aos="slide-right"
                >
                    <div className="slide-panel" ref={imageContainerRef}>
                        {images.map((image, index) => (
                            <img className="slide-img" key={index} src={image} alt={`sapi-${index}`} data-aos="slide-right" />
                        ))}
                    </div>
                </div>
                <div className="next" onClick={() => { scrollRight(); }} data-aos="slide-right"></div>
            </div>
        </div>
    );
};

export default Slider;
