import React from "react";
import window from 'global'

//swiper stuff
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";


class VideoSwiper extends React.Component {
    getSlidersPerView = () => {
        if (isMobile(window)) {
            return 1
        }
        return 2
    }

    render() {
        return (
            <>
                <Swiper
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 30
                            },
                            700: {
                                slidesPerView: 2,
                            }
                        }
                    }
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        type: 'fraction'
                    }}
                    navigation={{
                        hideOnClick: true,
                    }}
                    modules={[Pagination, Navigation]}
                >
                    <div className="mt-5">
                        <SwiperSlide>
                            <div className="my-10">
                                <div className="relative w-100 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center">
                                    <iframe src="https://www.youtube-nocookie.com/embed/Z5chrxMuBoo?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full"></iframe>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">Valuation - Four Lessons to Take Away (Talks @ Google) <br></br>
                                    <a href="https://www.youtube.com/watch?v=Z5chrxMuBoo" target="_blank" className='underline'>Click here</a> to watch on Youtube.
                                </span>
                                <span className="text-xs text-slate-300 mt-1">
                                    Starters' CFO is not associated with Google in any way. No endorsement is given.
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-10">
                                <div className="relative w-100 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center">
                                    <iframe src="https://www.youtube-nocookie.com/embed/znmQ7oMiQrM?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full"></iframe>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">Aswanth Damodaran, Professor of Finance, NYU, talks about the basic concepts around valuation. <br></br>
                                    <a href="https://www.youtube.com/watch?v=znmQ7oMiQrM" target="_blank" className='underline'>Click here</a> to watch on Youtube.
                                </span>
                                <span className="text-xs text-slate-300 mt-1">
                                    Starters' CFO is not associated with Aswanth Damodaran in any way. No endorsement is given.
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-10">
                                <div className="relative w-100 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center">
                                    <iframe src="https://www.youtube-nocookie.com/embed/8vYQpWXQ5hE?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full"></iframe>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">Aswanth Damodaran, Professor of Finance, NYU, talks about the foundational concepts of valuation. <br></br>
                                    <a href="https://www.youtube.com/watch?v=8vYQpWXQ5hE" target="_blank" className='underline'>Click here</a> to watch on Youtube.
                                </span>
                                <span className="text-xs text-slate-300 mt-1">
                                    Starters' CFO is not associated with Google in any way. No endorsement is given.
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-10">
                                <div className="relative w-100 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center">
                                    <iframe src="https://www.youtube-nocookie.com/embed/c20_S-QgvsA?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full"></iframe>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">Laws of Valuation: Revealing the Myths and Misconceptions - Nordic Business Forum. <br></br>
                                    <a href="https://www.youtube.com/watch?v=c20_S-QgvsA" target="_blank" className='underline'>Click here</a> to watch on Youtube.
                                </span>
                                <span className="text-xs text-slate-300 mt-1">
                                    Starters' CFO is not associated with Nordic Business Forum in any way. No endorsement is given.
                                </span>
                            </div>
                        </SwiperSlide>
{/* ########################################################################################################################################  */}
                        {/* <SwiperSlide>
                            <div className="my-10">
                                <div className="relative w-100 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center">
                                    <iframe src="https://www.youtube-nocookie.com/embed/PxaSbo7b-DU?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full"></iframe>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">Laws of Valuation: Revealing the Myths and Misconceptions - Nordic Business Forum. <br></br>
                                    <a href="https://www.youtube.com/watch?v=PxaSbo7b-DU" target="_blank" className='underline'>Click here</a> to watch on Youtube.
                                </span>
                                <span className="text-xs text-slate-300 mt-1">
                                    Starters' CFO is not associated with Nordic Business Forum in any way. No endorsement is given.
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-10">
                                <div className="relative w-100 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center">
                                    <iframe src="https://www.youtube-nocookie.com/embed/w57izRR3LXQ?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full"></iframe>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">Laws of Valuation: Revealing the Myths and Misconceptions - Nordic Business Forum. <br></br>
                                    <a href="https://www.youtube.com/watch?v=w57izRR3LXQ" target="_blank" className='underline'>Click here</a> to watch on Youtube.
                                </span>
                                <span className="text-xs text-slate-300 mt-1">
                                    Starters' CFO is not associated with Nordic Business Forum in any way. No endorsement is given.
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-10">
                                <div className="relative w-100 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center">
                                    <iframe src="https://www.youtube-nocookie.com/embed/1N7xPkbQ0Wc?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full"></iframe>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">Laws of Valuation: Revealing the Myths and Misconceptions - Nordic Business Forum. <br></br>
                                    <a href="https://www.youtube.com/watch?v=1N7xPkbQ0Wc" target="_blank" className='underline'>Click here</a> to watch on Youtube.
                                </span>
                                <span className="text-xs text-slate-300 mt-1">
                                    Starters' CFO is not associated with Nordic Business Forum in any way. No endorsement is given.
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-10">
                                <div className="relative w-100 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center">
                                    <iframe src="https://www.youtube-nocookie.com/embed/apXVjqNOCK4?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full"></iframe>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">Laws of Valuation: Revealing the Myths and Misconceptions - Nordic Business Forum. <br></br>
                                    <a href="https://www.youtube.com/watch?v=apXVjqNOCK4" target="_blank" className='underline'>Click here</a> to watch on Youtube.
                                </span>
                                <span className="text-xs text-slate-300 mt-1">
                                    Starters' CFO is not associated with Nordic Business Forum in any way. No endorsement is given.
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-10">
                                <div className="relative w-100 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center">
                                    <iframe src="https://www.youtube-nocookie.com/embed/yZx9r0olv6U?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full"></iframe>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">Laws of Valuation: Revealing the Myths and Misconceptions - Nordic Business Forum. <br></br>
                                    <a href="https://www.youtube.com/watch?v=yZx9r0olv6U" target="_blank" className='underline'>Click here</a> to watch on Youtube.
                                </span>
                                <span className="text-xs text-slate-300 mt-1">
                                    Starters' CFO is not associated with Nordic Business Forum in any way. No endorsement is given.
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-10">
                                <div className="relative w-100 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center">
                                    <iframe src="https://www.youtube-nocookie.com/embed/lo0fAhQQt3A?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full"></iframe>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">Laws of Valuation: Revealing the Myths and Misconceptions - Nordic Business Forum. <br></br>
                                    <a href="https://www.youtube.com/watch?v=lo0fAhQQt3A" target="_blank" className='underline'>Click here</a> to watch on Youtube.
                                </span>
                                <span className="text-xs text-slate-300 mt-1">
                                    Starters' CFO is not associated with Nordic Business Forum in any way. No endorsement is given.
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-10">
                                <div className="relative w-100 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center">
                                    <iframe src="https://www.youtube-nocookie.com/embed/ZtMmDQ9h-xY?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full"></iframe>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">Laws of Valuation: Revealing the Myths and Misconceptions - Nordic Business Forum. <br></br>
                                    <a href="https://www.youtube.com/watch?v=ZtMmDQ9h-xY" target="_blank" className='underline'>Click here</a> to watch on Youtube.
                                </span>
                                <span className="text-xs text-slate-300 mt-1">
                                    Starters' CFO is not associated with Nordic Business Forum in any way. No endorsement is given.
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-10">
                                <div className="relative w-100 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center">
                                    <iframe src="https://www.youtube-nocookie.com/embed/3OHScaW6-ac?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full"></iframe>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">Laws of Valuation: Revealing the Myths and Misconceptions - Nordic Business Forum. <br></br>
                                    <a href="https://www.youtube.com/watch?v=3OHScaW6-ac" target="_blank" className='underline'>Click here</a> to watch on Youtube.
                                </span>
                                <span className="text-xs text-slate-300 mt-1">
                                    Starters' CFO is not associated with Nordic Business Forum in any way. No endorsement is given.
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="my-10">
                                <div className="relative w-100 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center">
                                    <iframe src="https://www.youtube-nocookie.com/embed/Q_W-bTGT3ZQ?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="h-full w-full"></iframe>
                                </div>
                                <span className="text-xs text-slate-500 mt-2">Laws of Valuation: Revealing the Myths and Misconceptions - Nordic Business Forum. <br></br>
                                    <a href="https://www.youtube.com/watch?v=Q_W-bTGT3ZQ" target="_blank" className='underline'>Click here</a> to watch on Youtube.
                                </span>
                                <span className="text-xs text-slate-300 mt-1">
                                    Starters' CFO is not associated with Nordic Business Forum in any way. No endorsement is given.
                                </span>
                            </div>
                        </SwiperSlide> */}
                        



                    </div>
                </Swiper>
            </>
        )
    }
}

export default VideoSwiper;