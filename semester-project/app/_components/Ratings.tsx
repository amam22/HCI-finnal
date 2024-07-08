"use client"
import React, { useState, FC } from 'react';

interface StarRatingProps {
    rating: number;
    onRatingChange: (rating: number) => void;
}

const StarRating: FC<StarRatingProps> = ({ rating, onRatingChange }) => {
    const [hoverRating, setHoverRating] = useState<number>(0);

    const handleMouseEnter = (index: number) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = (index: number) => {
        onRatingChange(index);
    };

    const stars = [];

    for (let i = 1; i <= 5; i++) {
        const fillColor = i <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-400';
        stars.push(
            <span
                key={i}
                className={`${fillColor} cursor-pointer`}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(i)}
            >
                ★
            </span>
        );
    }

    return <div className="flex">{stars}</div>;
};

export default StarRating;
