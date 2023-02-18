import React from "react";
// Import Swiper React components
import { Pagination, EffectCoverflow, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ARROW_LEFT } from "../svgs";
export default function Projects() {
  return (
    <div className="my-6" id="projects">
      <div className="text-center text-5xl mt-12">Projects</div>
      <div className="text-center mt-2 mb-4">
        Some personal creations of mine helping lots of people + Most of these
        are open Source🚀
      </div>
      <Swiper
        modules={[Pagination, EffectCoverflow, Autoplay, A11y]}
        spaceBetween={50}
        autoplay={{
          delay: 1250,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-[90%] md:w-1/2 cursor-pointer bg-white rounded-xl"
      >
        {[
          [
            "Anomm",
            "https://anomm.pushkaryadav.in/banner.png",
            "https://anomm.pushkaryadav.in",
            "Anomm is a free service to deliver anonymous messages directly to your telegram via bot. this can be integrated anywhere community reviews, confession pages, personal thoughts and a lot more.",
          ],
          [
            "Tweeco",
            "https://tweeco.pushkaryadav.in/images/tweeco_banner.png",
            "https://tweeco.pushkaryadav.in",
            "Tweets✒️ shouldn't be limited to twitter🐧 : Let's integrate them anywhere fully rendered✨ with this simple API.",
          ],
          [
            "Markdown Badges",
            "https://mdb.pushkaryadav.in/banner.png",
            "https://mdb.pushkaryadav.in",
            "Super Cool SVG based Badges for your Projects - Socials/ Languages/ Frameworks/ Libraries and more. Get generated markdown code, preview and a change badge style within single click",
          ],
          [
            "IBOX",
            "https://ibox.pushkaryadav.in/banner.png",
            "https://ibox.pushkaryadav.in",
            "All in one solution for your all needs of insta. Download Posts, Reels, IGTV videos and analyze any public profile for its followers, following, rand and a whole lot of data.",
          ],
          [
            "NextOS",
            "https://nextos.pushkaryadav.in/banner.png",
            "https://nextos.pushkaryadav.in",
            "A Modern Operating System design built into a Website using Next JS and Tailwind CSS.",
          ],
          [
            "Payon",
            "https://payon.pushkaryadav.in/banner.png",
            "https://payon.pushkaryadav.in",
            "Payon is a template website to show you a better approach of making payments having a simple and interactive interface.This is a prototype website",
          ],
          [
            "SummerX",
            "https://summerx.itsvg.in/webimg.png",
            "https://summerx.itsvg.in",
            "Through SummerX we are on a mission 🚀 to save lives of people who suffer from heat waves 🍃, excessive heat 🥵, illness and more. This is a prototype website.",
          ],
          [
            "APIX",
            "https://apix.pushkaryadav.in/banner.png",
            "https://apix.pushkaryadav.in",
            "APIX - a collection of 1400+ apis and 50+ categories of api's",
          ],
          [
            "COLPIC",
            "https://colpic.pushkaryadav.in/banner.jpg",
            "https://colpic.pushkaryadav.in",
            "Find Perfect colors, gradients and more for your Amazing Projects, Posters or Designs, Just copy and paste in single click.",
          ],
          [
            "Web Games",
            "https://wg.pushkaryadav.in/banner.png",
            "https://wg.pushkaryadav.in/",
            "Play some of the on the go games in a minimal way",
          ],
          [
            "PRM",
            "https://prm.pushkaryadav.in/banner.png",
            "https://prm.pushkaryadav.in/",
            "Create amazing readme for your projects, profile from amazing templates and custom too without writing markdown. Explaining everything Screenshots, URL , About, Insights, Local System Guides and a lot more.",
          ],
          [
            "Web Searcher",
            "https://websearcher.pushkaryadav.in/banner.png",
            "https://websearcher.pushkaryadav.in/",
            "Generate meta tags in some clicks and Rank top in search engines.You can generate Open graph, twitter and basic meta tags just in one click and a lot of adjustments in them.",
          ],
        ].map(([name, image, url, description]) => (
          <SwiperSlide key={name} className="bg-white p-4 rounded-2xl">
            <img src={image} className=" w-full rounded-2xl" alt="/product" />
            <div className="text-4xl">
              {name.toUpperCase()}{" "}
              <div className="text-2xl font-normal text-left">
                {description}
              </div>
              <a
                href={url}
                className="transition-all block w-fit text-lg bg-tellow-100 outline outline-offset-4 outline-2 outline-yellow-400 text-slate-900 font-semibold rounded-xl no-underline mt-12 py-2 px-4  mx-auto hover:bg-yellow-200 hover:scale-110 hover:outline-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {name}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center my-8">
        <span className="block my-4">*See my Github for more projects</span>
        <a
          href="http://github.com/pushkarydv"
          rel="noopener noreferrer"
          target="_blank"
          className="transition-all text-2xl w-fit py-1 px-4 lg:px-6 lg:py-2 rounded-full text-emerald-50 ring-2 ring-emerald-600 bg-emerald-600 active:scale-90 mx-auto flex flex-row items-center mb-4"
        >
          View Github <ARROW_LEFT className="w-6 stroke-[2] rotate-[135deg]" />
        </a>
      </div>
    </div>
  );
}
