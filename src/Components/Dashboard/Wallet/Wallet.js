import React, { useState } from 'react';
import './Wallet.css'; // Import the CSS file for styling
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import chevron icons
import images from '../../images'; // Import images

const Wallet = () => {
    const cardNumbers = ["**** **** **** 1234", "**** **** **** 5678", "**** **** **** 9101"];
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [slideDirection, setSlideDirection] = useState('slide-in');

    const handleNextCard = () => {
        if (!isSliding) {
            setSlideDirection('slide-in');
            setIsSliding(true);
            setTimeout(() => {
                setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardNumbers.length);
                setIsSliding(false);
            }, 500); // Match the duration of the slide animation
        }
    };

    const handlePrevCard = () => {
        if (!isSliding) {
            setSlideDirection('slide-in-reverse');
            setIsSliding(true);
            setTimeout(() => {
                setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cardNumbers.length) % cardNumbers.length);
                setIsSliding(false);
            }, 500); // Match the duration of the slide animation
        }
    };

    return (
        <div className="wallet-container">
            <div className="wallet-text-container">
                <div className="left-wallet-text">
                    <h2>My Wallet</h2>
                    <p>Card | {currentCardIndex + 1} out of {cardNumbers.length}</p>
                </div>
                <div className="right-wallet-text">
                    <div className="icon-container" onClick={handlePrevCard}>
                        <FiChevronLeft className="arrow-icon" />
                    </div>
                    <div className="icon-container" onClick={handleNextCard}>
                        <FiChevronRight className="arrow-icon" />
                    </div>
                </div>
            </div>
            <div className="wallet-card-container">
                <div className={`wallet-card ${isSliding ? slideDirection : ''}`} style={{ backgroundImage: `url(${images.card})` }}>
                    <div className={`card-number ${isSliding ? slideDirection : ''}`}>{cardNumbers[currentCardIndex]}</div>
                    <div className={`card-number-text ${isSliding ? slideDirection : ''}`}>Card Number</div>
                </div>
                <div className="vertical-line"></div>
                <div className="wallet-card-content">
                    
                </div>
            </div>
        </div>
    );
};

export default Wallet;
