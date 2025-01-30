import React, { useState } from 'react';
import './Wallet.css'; // Import the CSS file for styling
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import chevron icons
import images from '../../images'; // Import images

const Wallet = () => {
    const cardNumbers = ["**** **** **** 1234", "**** **** **** 5678", "**** **** **** 9101"];
    const balances = ["$1000", "$2000", "$3000"]; // Example balances
    const currencies = ["USD", "EUR", "GBP"]; // Example currencies
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [slideDirection, setSlideDirection] = useState('slide-in');
    const [isCardDeactivated, setIsCardDeactivated] = useState(false);

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

    const handleToggleChange = () => {
        setIsCardDeactivated(!isCardDeactivated);
    };

    return (
        <div className="wallet-container outer-container margin-space">
            <div className="wallet-text-container">
                <div className="left-wallet-text">
                    <h2>Wallet</h2>
                    <p>Card | {currentCardIndex + 1} out of {cardNumbers.length}</p>
                </div>
                <div className="right-wallet-text">
                    <div className={`wallet-icon-container ${isCardDeactivated ? 'disabled' : ''}`} onClick={handlePrevCard}>
                        <FiChevronLeft className="arrow-icon" />
                    </div>
                    <div className={`wallet-icon-container ${isCardDeactivated ? 'disabled' : ''}`} onClick={handleNextCard}>
                        <FiChevronRight className="arrow-icon" />
                    </div>
                </div>
            </div>
            <div className="wallet-card-container">
                <div className={`wallet-card ${isSliding ? slideDirection : ''} ${isCardDeactivated ? 'deactivated' : ''}`} style={{ backgroundImage: `url(${images.card})`, filter: isCardDeactivated ? 'grayscale(100%)' : 'none' }}>
                    <div className={`card-number ${isSliding ? slideDirection : ''}`}>{cardNumbers[currentCardIndex]}</div>
                    <div className={`card-number-text ${isSliding ? slideDirection : ''}`}>Card Number</div>
                </div>
                <div className="vertical-line"></div>
                <div className="wallet-card-content">
                    <div className="balance-container">
                        <div className="balance-text">
                            <p>Balance</p>
                            <h2>{balances[currentCardIndex]}</h2>
                        </div>
                        <div className="currency-text">
                            <p>Currency</p>
                            <h2>{currencies[currentCardIndex]}</h2>
                        </div>
                    </div>
                    <div className="deactivate-container">
                        <div className="deactivate-text">Deactivate Card</div>
                        <input type="checkbox" className="toggle-switch" onChange={handleToggleChange} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
