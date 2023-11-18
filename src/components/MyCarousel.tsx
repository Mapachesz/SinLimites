import React from 'react';
import CarouselItem from './CarouselItem';

interface MyCarouselProps {
    items: JSX.Element[];
}

const MyCarousel: React.FC<MyCarouselProps> = ({ items }) => {
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {items.map((item, index) => (
                    <CarouselItem key={index} content={item} isActive={index === 0} />
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default MyCarousel;
