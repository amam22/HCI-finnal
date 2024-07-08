"use client"
import React, { useState } from "react";
import { NextPage } from "next";
import StarRating from "../_components/Ratings";
import reviews from "../enum/index";
import Image from "next/image";

interface Review {
    id: number;
    ime: string;
    ocjena: number;
    recenzija: string;
}

const Recenzije: NextPage = () => {
    const [review, setReviews] = useState<Review[]>(reviews);

    const handleRatingChange = (id: number, newRating: number) => {
        setReviews(review.map(review =>
            review.id === id ? { ...review, ocjena: newRating } : review
        ));
    };

    return (
        <section>
            <h1 className="m-8 text-xl text-[#09396d] font-semibold">Recenzije i osvrti</h1>
            <div className="flex flex-row flex-wrap">
                {reviews.map(review => (
                    <div key={review.id} className="w-[400px] rounded-xl bg-gray-200 m-8 px-8 py-4"> {/* Promijenjeno u bg-gray-200 */}
                        <Image width={24} height={24} alt="img" src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png" />
                        <span>{review.ime.split(' ')[0]} </span>
                        <span>{review.ime.split(' ')[1]}</span><br />
                        <StarRating
                            rating={review.ocjena}
                            onRatingChange={(newRating) => handleRatingChange(review.id, newRating)}
                        />
                        <span>{review.recenzija}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Recenzije;
