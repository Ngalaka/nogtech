"use client";
import React from "react";
import Image from "next/image";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { GiSelfLove } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";
import { BiVideoRecording } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";

export default function Hero() {
  const heroImages = ["/photo.jpg", "/photo1.jpg", "/photo2.jpg", "/photo.jpg"];
  return (
    <>
      <section className="relative min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/photo1.jpg"
            alt="NOGTECH technology background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark Overlay */}

        <div className="absolute inset-0 -z-10 bg-black/70"></div>

        {/* Hero Content */}
        <div className="mx-auto flex min-h-[700px] max-w-7xl items-center px-6 py-20 lg:px-8">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">
            {/* Small Heading */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-orange-400">
              NOGTECH DIGITAL SKILLS TRAINING
            </p>

            {/* Main Heading */}
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Build Your Future With
              <span className="block text-blue-500"> Digital Skills </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-200 sm:text-lg">
              Learn practical technology skills that can help you build
              websites, create digital products, work with artificial
              intelligence, design user experiences, and build a successful
              digital career.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-500">
                {" "}
                Register for Training
              </button>

              <button className="rounded-lg border border-white/50 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-gray-900">
                {" "}
                Explore Courses{" "}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden w-full lg:block lg:w-1/2 lg:pl-12">
            <div className="relative mx-auto max-w-lg">
              {/* Decorative Background */}

              <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 blur-2xl"></div>

              {/* Image Slider */}

              <div className="relative overflow-hidden rounded-2xl border-0 border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
                <Swiper
                  //  modules={[Autoplay, Pagination, EffectFade]}
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  loop={true}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  //  pagination={{ clickable: true, }}
                  className="h-[420px] rounded-xl"
                >
                  {/* Slides MUST be inside Swiper */}
                  {heroImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-full w-full overflow-hidden rounded-xl">
                        <Image
                          src={image}
                          alt={`NOGTECH training ${index + 1}`}
                          fill
                          priority={index === 0}
                          className="object-cover transition duration-700 hover:scale-105"
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification path */}

      <section className="w-full h-auto ">
        <div className="w-[50%] h-auto mx-auto py-8">
          <span className="block text-blue-900 font-extrabold text-4xl text-center py-4">
            Every Skill Has a Starting Point
          </span>
          <p className="text-black/80 text-xl text-center">
            Build the skills to move forward in tech
          </p>
        </div>

        <div className="w-[90%] h-auto flex justify-between items-center gap-8 mx-auto">
          <div className=" w-[350px] border-1 border-blue-300 rounded-lg transition duration-[3000ms] ease-in-out hover:scale-y-80 hover:border-2 border-blue-600 ">
            {/* certification */}
            <div className="flex justify-center items-center gap-4 py-4">
              <span className="block bg-blue-200 text-blue-700 text-2xl">
                <GiSelfLove />
              </span>
              <span className="text-blue-500 font-bold text-sm">
                short, focused learning programme.
              </span>
            </div>

            <div className="py-2">
              <p className="text-sm text-black/70 px-4">
                Explore self-paced programs designed to help you develop
                specialized technology skills at your own pace. Build practical
                knowledge, complete real-world projects, and earn a NOGTECH
                certificate to showcase your skills and strengthen your
                professional profile.
              </p>
            </div>
            <div>
              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className="block text-blue-700 text-2xl font-extrabold">
                  <CiClock2 />
                </span>
                <span className="block font-bold text-sm  text-blue-600">
                  4-8 weeks (flexible, self-paced)
                </span>
              </div>

              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className="block text-blue-700 text-2xl font-extrabold">
                  <BiVideoRecording />
                </span>
                <span className="block font-bold text-sm text-blue-600">
                  Live classes + recorded lecture
                </span>
              </div>

              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className=" block text-blue-700 text-2xl font-extrabold">
                  <TbCertificate />
                </span>
                <span className="block font-bold text-sm  text-blue-600">
                  NOGTECH Nano-Diploma Certificate
                </span>
              </div>
            </div>

            <div className="w-[250px] h-auto mx-auto py-2">
              <button className="w-[250px] h-auto py-2 text-sm text-center cursor-pointer bg-blue-900 rounded-lg text-white font-bold">
                Explore Nano Certification
              </button>
            </div>
          </div>

          <div className=" w-[350px] border-1 border-blue-300 rounded-lg transition duration-[3000ms] ease-in-out hover:scale-y-80 hover:border-2 border-blue-600 ">
            {/* certification */}
            <div className="flex justify-center items-center gap-4 py-4">
              <span className="block bg-blue-200 text-blue-700 text-2xl">
                <GiSelfLove />
              </span>
              <span className="text-blue-500 font-bold text-sm">
                Diploma Certificate.
              </span>
            </div>

            <div className="py-2">
              <p className="text-sm text-black/70 px-4">
                Build the skills you need for a successful career in technology.
                With structured lessons, practical projects, expert mentorship,
                and a supportive learning community, you will develop the
                confidence and experience to pursue opportunities in the digital
                economy.
              </p>
            </div>
            <div>
              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className=" block text-blue-700 text-2xl font-extrabold">
                  <CiClock2 />
                </span>
                <span className="block font-bold text-sm text-blue-600">4-6 months</span>
              </div>

              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className=" blocktext-blue-700 text-2xl font-extrabold text-blue-700">
                  <BiVideoRecording />
                </span>
                <span className="block font-bold text-sm  text-blue-600">
                  Live classes + recorded lecturess
                </span>
              </div>

              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className=" block text-blue-700 text-2xl font-extrabold">
                  <TbCertificate />
                </span>
                <span className="block font-bold text-sm text-blue-600">
                 NOGTECH Diploma certificate
                </span>
              </div>
            </div>

            <div className="w-[250px] h-auto mx-auto py-2">
              <button className="w-[250px] h-auto py-2 text-sm text-center bg-blue-900 rounded-lg cursor-pointer text-white font-bold">
                Start a Diploma Program
              </button>
            </div>
          </div>

          <div className=" w-[350px] border-1 border-blue-300 rounded-lg transition duration-[3000ms] ease-in-out hover:scale-y-90 hover:border-2 border-blue-600 ">
            {/* certification */}
            <div className="flex justify-center items-center gap-4 py-4">
              <span className="block bg-blue-200 text-blue-700 text-2xl">
                <GiSelfLove />
              </span>
              <span className="text-blue-500 font-bold text-sm">
                Masterclass.
              </span>
            </div>

            <div className="py-2">
              <p className="text-sm text-black/70 px-4">
                Learn practical tech skills through concise, focused sessions
                built for real-world application. Perfect for professionals and
                learners who want to upgrade their skills and start applying
                what they learn right away.
              </p>
            </div>

            <div>
              <div className="flex justify-stretch items-center gap-2 px-2 ">
                <span className="text-blue-700 text-2xl font-extrabold">
                  <CiClock2 />
                </span>
                <span className="block font-bold text-sm  text-blue-600">1-6 hours </span>
              </div>

              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className="text-blue-700 text-2xl font-extrabold">
                  <BiVideoRecording />
                </span>
                <span className="block font-bold text-sm  text-blue-600">
                  Physical/Online, Live Sessions
                </span>
              </div>

              <div className="flex justify-stretch items-center gap-2 px-2">
                <span className="text-blue-700 text-2xl font-extrabold">
                  <TbCertificate />
                </span>
                <span className="block font-bold text-sm  text-blue-600 ">
                  No certification
                </span>
              </div>
            </div>
            <div className="w-[250px] h-auto mx-auto py-2">
              <button className="w-[250px] h-auto py-2 text-sm text-center bg-blue-900 rounded-lg text-white font-bold cursor-pointer">
                Browse Masterclasses
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
