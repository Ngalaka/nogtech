import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdWhatsapp } from "react-icons/md";
export default function page() {
  const phoneNumber = "2349159533474";

  // // The message that appears automatically
  const message =
    "Hello NOGTECH, I would like to know more about your digital skills training programs.";

  // Generate the WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

// Your NOGTECH email address

const emailAddress = "nogtech.traininginstitute@gmail.com";

// Default email subject
  const subject = "Enquiry About NOGTECH Training";

  // Default email message
  const body =
    "Hello NOGTECH, I would like to know more about your digital skills training programs.";

  // Create the Gmail compose URL
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    emailAddress
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <div className="w-full h-auto bg-blue-950 py-8">
        {/* contact section */}
        <div className="w-[80%] h-auto flex justify-between items-center gap-4 m-auto ">
          <div className="w-[50%] h-auto px-4 ">
            <div className="border-l-4 border-red-800 bg-transparent">
              <h1 className="text-xl font-extrabold text-white px-4">
                Contact Nogtect
              </h1>
            </div>

            <div className="w-full h-auto py-8 ">
              <h1 className="font-normal text-5xl text-white">
                We are Here to Help You Move Forward.
              </h1>
            </div>

            <div className="py-4">
              <p className="text-white/50 text-xl ">
                Speak with admissions about programmes, fees, schedules, campus
                visits, or your application.
              </p>
            </div>
          </div>
          {/* contact details */}
          <div className="w-[30%] h-auto">
            {/* call */}
            <div className="flex justify-stretch items-center gap-8 border-y border-white/50 py-4">
              <span className="block font-extrabold text-blue-800 text-2xl">
                <IoCallOutline />
              </span>
              <div>
                <span className="block font-bold text-white text-xl">
                  Call Enrollment
                </span>
                <span className="block text-white/40 text-xl font-normal">
                  07039306184
                </span>
              </div>
            </div>

            {/* email */}
            <div className="flex justify-stretch items-center gap-8 border-y border-white/50 py-4">
              <span className="block font-extrabold text-blue-800 text-2xl">
                <MdOutlineEmail />
              </span>
              <div>

                 <Link
          href={gmailURL}
          target="_blank"
          rel="noopener noreferrer"
        >
         <span className="block font-bold text-white text-xl">
                  Email us
                </span>
                <span className="block text-white/40 text-xl font-normal">
                  nogtech.traininginstitute@gmail.com
                </span>
        </Link>   
              </div>
            </div>

            {/* whatsapp */}
            <div className="flex justify-stretch items-center gap-8 border-y border-white/50 py-4">
              <span className="block font-extrabold text-blue-800 text-2xl">
                <MdWhatsapp />
              </span>
              <div>
                <Link
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="block font-bold text-white text-xl">
                    WhatsApp
                  </span>
                  <span className="block text-white/40 text-xl font-normal">
                    Start a conversation
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
