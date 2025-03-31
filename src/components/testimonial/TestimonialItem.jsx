// src\components\testimonial\TestimonialItem.jsx
import React from 'react'
import LazyImg from "../LazyImg";

function TestimonialItem({ avatar, authorName, label, description }) {
    return (
        <div className="testimonial-item">
            <p className='mb-25'>{description}</p>

            <div className="author-box">
                {avatar && (
                    <span className="avatar">
                        <LazyImg className='cover-bg-img' src={avatar} alt={authorName} />
                    </span>
                )}
                <div className="auth-info">
                    <h5>{authorName}</h5>
                    {label && <span>{label}</span>}
                </div>
            </div>
        </div>
    )
}

export default TestimonialItem;
