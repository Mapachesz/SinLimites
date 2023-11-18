import React from 'react';

interface CarouselItemProps {
    content: JSX.Element;
    isActive?: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ content, isActive }) => {
    const activeClass = isActive ? 'active' : '';
    return (
        <div className={`carousel-item ${activeClass}`}>
            {content}
        </div>
    );
};

export default CarouselItem;
