import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";
import './scrollToTop.scss'

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        })
    }, [])

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <div >
            {showTopBtn && (
                <FaArrowUp className='scroll' onClick={goToTop} />
            )}
        </div>
    );
};

export default ScrollToTop;