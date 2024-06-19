import React from 'react'

const Gallery = () => {
    const images = [
        { id: 1, src: 'https://drive.google.com/file/d/17GUlILHK548Nh4dpRNUivfhsGvZXP10l/view?usp=drive_link', alt: 'image 1' },
        { id: 2, src: 'https://drive.google.com/file/d/17GUlILHK548Nh4dpRNUivfhsGvZXP10l/view?usp=sharing', alt: 'Kitten 2' },
        { id: 3, src: 'https://placekitten.com/300/202', alt: 'Kitten 3' },
        { id: 4, src: 'https://placekitten.com/300/203', alt: 'Kitten 4' },
        { id: 5, src: 'https://placekitten.com/300/204', alt: 'Kitten 5' },
        { id: 6, src: 'https://placekitten.com/300/205', alt: 'Kitten 6' },
    ];
    return (
        <>
            <div className="overflow-hidden px-6">
                <div className="mx-auto mt-7 w-full max-w-6xl lg:mt-14">


                    <section className="text-gray-600 body-font ">
                        <div className="container mx-auto py-8">
                            <h1 className="text-4xl font-semibold underline underline-offset-2  mb-4 text-blue-500 text-center" >GALLERY</h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {images.map((image) => (
                                <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        className="scale-100  hover:scale-105 transition-all duration-1000 aspect-square  w-full h-full object-cover object-center rounded-md cursor-zoom-in ease-linear"
                                        src={image.src} alt={image.alt} />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Gallery