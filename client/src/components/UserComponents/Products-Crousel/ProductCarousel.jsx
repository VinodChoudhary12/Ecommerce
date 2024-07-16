// function ProductCarousel() {



//     return (<>
//         <button className="p-2  rounded-full mr-2">
//             <i id="left" className="fa-solid fa-arrow-left p-1"></i>
//         </button>
//         <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 overflow-hidden ">
//             <div className="flex flex-col">
//                 <img className="object-cover" src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" />
//                 <p>This is the time pass beacuse description is writen by the admin</p>
//                 <p>RS299</p>
//             </div>
//             <div className="flex flex-col">
//                 <img className="object-cover" src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" />
//                 <p>This is the time pass beacuse description is writen by the admin</p>
//                 <p>RS299</p>
//             </div>
//             <div className="flex flex-col">
//                 <img className="object-cover" src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" />
//                 <p>This is the time pass beacuse description is writen by the admin</p>
//                 <p>RS299</p>
//             </div>
//             <div className="flex flex-col">
//                 <img className="object-cover" src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" />
//                 <p>This is the time pass beacuse description is writen by the admin</p>
//                 <p>RS299</p>
//             </div>
//             <div className="flex flex-col">
//                 <img className="object-cover" src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" />
//                 <p>This is the time pass beacuse description is writen by the admin</p>
//                 <p>RS299</p>
//             </div>
//             <div className="flex flex-col">
//                 <img className="object-cover" src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" />
//                 <p>This is the time pass beacuse description is writen by the admin</p>
//                 <p>RS299</p>
//             </div>
//         </div>
//         <button className="p-2  rounded-full">
//             <i id="right" className="fa-solid fa-arrow-right p-1"></i>
//         </button>













//         <div className="bg-zinc-900 text-white p-6  max-w-full ">
//             <div className="flex justify-between items-center mb-4 border-b-2 border-slate-800 ">
//                 <h2 className="text-2xl font-bold">LATEST PROJECT</h2>
//                 <div className="border-2 rounded-full  border-purple-500 p-3 flex items-center">
//                     <button className="flex items-center justify-between  ">
//                         <p> More Project</p>
//                         <i className="fa-solid fa-up-long   p-2  "></i>
//                     </button>
//                 </div>

//             </div>
//             <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
//                 <div className="p-4 flex flex-col justify-between  mb-4 border-r-2 border-slate-800">
//                     <p className="p-5" id="text"> my With years of experience in the industry, we provide high-quality and
//                         cost-effective web,
//                         game, and
//                         software development services.
//                     </p>
//                     <div className="flex justify-between mt-2">
//                         <button className="p-2 bg-zinc-700 rounded-full mr-2">
//                             <i id="left" className="fa-solid fa-arrow-left p-1"></i>
//                         </button>
//                         <button className="p-2 bg-zinc-700 rounded-full">
//                             <i id="right" className="fa-solid fa-arrow-right p-1"></i>
//                         </button>
//                     </div>
//                 </div>
//                 <div className="p-4">
//                     <img id="img1" src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" alt="Project Image"
//                         className="mb-4 rounded-lg w-[300px] h-[400px] object-cover" />
//                     <h3 className="text-lg font-semibold">PROJECT TITLE</h3>
//                 </div>
//                 <div className="p-4">
//                     <img id="img2" src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" alt="Project Image"
//                         className="mb-4 rounded-lg w-[300px] h-[400px] object-cover" />
//                     <h3 className="text-lg font-semibold">PROJECT TITLE</h3>
//                 </div>
//                 <div className=" p-4 ">
//                     <img id="img3" src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" alt="Project Image"
//                         className="mb-4 rounded-lg w-[300px] h-[400px] object-cover" />
//                     <h3 className="text-lg font-semibold">PROJECT TITLE</h3>
//                 </div>

//             </div>
//         </div>







//     </>);
// }

// export default ProductCarousel;



import { useState } from "react";

const images = [
    {
        src: "https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false",
        description: "This is the time pass because the description is written by the admin",
        price: "RS299",
    },
    {
        src: "https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false",
        description: "This is the time pass because the description is written by the admin",
        price: "RS299",
    },
    {
        src: "https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false",
        description: "This is the time pass because the description is written by the admin",
        price: "RS299",
    },
    {
        src: "https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false",
        description: "This is the time pass because the description is written by the admin",
        price: "RS299",
    },
    {
        src: "https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false",
        description: "This is the time pass because the description is written by the admin",
        price: "RS299",
    }
    // Add more image objects as needed
];

function Carousel() {
    const [startIndex, setStartIndex] = useState(0);
    const visibleImages = images.slice(startIndex, startIndex + 5);

    const handleLeftClick = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleRightClick = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % images.length);

    };

    return (<>

        <div className="flex items-center">
            <button onClick={handleLeftClick} className="p-2 rounded-full mr-2">
                <i id="left" className="fa-solid fa-arrow-left p-1"></i>
            </button>
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3 overflow-hidden">
                {visibleImages.map((image, index) => (
                    <div key={index} className="flex flex-col">
                        <img className="object-cover" src={image.src} alt={`Image ${index + 1}`} />
                        <p>{image.description}</p>
                        <p>{image.price}</p>
                    </div>
                ))}
            </div>
            <button onClick={handleRightClick} className="p-2 rounded-full">
                <i id="right" className="fa-solid fa-arrow-right p-1"></i>
            </button>
        </div>




        <div id="controls-carousel" className="relative w-full " data-carousel="static">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 2 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 3 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 4 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 5 --> */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="https://rukminim2.flixcart.com/image/1500/1500/xif0q/shirt/l/u/p/xl-rama-formal-youthfirst-original-imahfa39g3hzufyf.jpeg?q=70&crop=false" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>



        <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-md text-center">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl">Our featured Aroma Range</h2>
                    <p className="mt-4 text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
                    <article className="relative">
                        <div className="aspect-square overflow-hidden">
                            <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="/images/b51KL2CYAFVT7VAPpnEMW.png" alt="" />
                        </div>
                        <div className="absolute top-0 m-1 rounded-full bg-white">
                            <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Sale</p>
                        </div>
                        <div className="mt-4 flex items-start justify-between">
                            <div className="">
                                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                    <a href="#" title="" className="cursor-pointer">
                                        Arabian Musk
                                        <span className="absolute" aria-hidden="true"></span>
                                    </a>
                                </h3>
                                <div className="mt-2 flex items-center">
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="text-right">
                                <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm"> $79.00 </del>
                                <p className="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
                            </div>
                        </div>
                    </article>

                    <article className="relative">
                        <div className="aspect-square overflow-hidden">
                            <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="/images/sUgmRNIkRW2SZCLKOOfX2.png" alt="" />
                        </div>
                        <div className="mt-4 flex items-start justify-between">
                            <div className="">
                                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                    <a href="#" title="" className="cursor-pointer">
                                        Albanian Essence
                                        <span className="absolute" aria-hidden="true"></span>
                                    </a>
                                </h3>
                                <div className="mt-2 flex items-center">
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-xs font-normal sm:text-sm md:text-base">$299.00</p>
                            </div>
                        </div>
                    </article>

                    <article className="relative">
                        <div className="aspect-square overflow-hidden">
                            <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="/images/J573dRVtghSynx5yCis80.png" alt="" />
                        </div>
                        <div className="mt-4 flex items-start justify-between">
                            <div className="">
                                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                    <a href="#" title="" className="cursor-pointer">
                                        Siberian Perfum
                                        <span className="absolute" aria-hidden="true"></span>
                                    </a>
                                </h3>
                                <div className="mt-2 flex items-center">
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-xs font-normal sm:text-sm md:text-base">$49.00</p>
                            </div>
                        </div>
                    </article>

                    <article className="relative">
                        <div className="aspect-square overflow-hidden">
                            <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="/images/oZ_djoBAmHk4vgKQh41YT.png" alt="" />
                        </div>
                        <div className="mt-4 flex items-start justify-between">
                            <div className="">
                                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                    <a href="#" title="" className="cursor-pointer">
                                        Danish Levoune
                                        <span className="absolute" aria-hidden="true"></span>
                                    </a>
                                </h3>
                                <div className="mt-2 flex items-center">
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>

                                    <svg className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>

                                    <svg className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-xs font-normal sm:text-sm md:text-base">$79.00</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>


    </>
    );
}

export default Carousel;
