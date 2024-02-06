import {content} from "../Content";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {Pagination} from "swiper/modules";
import {useContext, useState} from "react";
import {context} from "../App";

const Testimonials = () => {
    const lang = useContext(context);
    const {Testimonials} = content[lang];
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section>
            <div className="md:container px-5 pt-14">
                <h2 className="title" data-aos="fade-down">
                    {Testimonials.title}
                </h2>
                <h4 className="subtitle" data-aos="fade-down">
                    {Testimonials.subtitle}
                </h4>
                <br/>
                <Swiper
                    direction={"vertical"}
                    pagination={{
                        clickable: true,
                    }}
                    data-aos="fade-up"
                    loop={true}
                    spaceBetween={40}
                    slidesPerView={1.7}
                    onSlideChange={(e) => {
                        setActiveIndex(e.realIndex);
                    }}
                    modules={[Pagination]}
                    className="md:h-96 h-[40rem] max-w-3xl"
                >
                    {Testimonials.testimonials_content.map((content, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className={` duration-500 bg-bg_light_primary mx-8 border-2 
              p-8  rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
                            >
                                <img src={content.img} loading="lazy" height={50} width={50} alt={content.name}/>
                                <div>
                                    <p className="sm:text-base text-sm">{content.review}</p>
                                    <br/>
                                    <div className={"flex gap-4"}>
                                        <h6>{content.name}</h6>
                                        {content.rating &&
                                            <div className="flex items-center space-x-1">
                                                {
                                                    [...Array(content.rating)].map((_, i) => (
                                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true"
                                                             key={i}
                                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                             viewBox="0 0 22 20">
                                                            <path
                                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                        </svg>
                                                    ))

                                                } {
                                                [...Array(5 - content.rating)].map((_, i) => (
                                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500"
                                                         key={i}
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="currentColor" viewBox="0 0 22 20">
                                                        <path
                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                ))

                                            }
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
