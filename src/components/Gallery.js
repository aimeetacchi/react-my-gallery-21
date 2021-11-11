import React, {useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';


const Gallery = ({imageUrls}) => {
    const elementRef = useRef();
    const [loading, setLoading] = useState(true);

    // Mapping over the imageURLs array and calling the renderImage function and passing in each DOM Node img
    const photo = imageUrls.map((imageUrl) =>
        <div key={imageUrl.id}>
            <img src={imageUrl.url} alt='images' />
        </div>
    );

    useEffect(() => {
        //sets state to false;
        setTimeout( () => {
            setLoading(false)
        }, 1000)
        
    }, [loading])

    if (loading) {
        return (
            <>
                <span className="spinner"/>
                <p>Loading...</p>
             </>
        )
    }

    return (
        <div className="gallery" ref={elementRef}>
            <div className="images">
                {photo}
            </div>
        </div>
    )
}

Gallery.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default Gallery;
