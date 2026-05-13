"use client";

import { useState } from "react";
import {
  Clock3,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import type { ContactFormData } from "@/types/contactType";

const initialState: ContactFormData = {
  parentName: "",
  childName: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialState);

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      // FUTURE API IMPLEMENTATION

      /*
      await axios.post("/api/contact", formData);
      */

      console.log("CONTACT FORM =>", formData);

      setSuccess(true);

      setFormData(initialState);
    } catch (error) {
      console.error(error);
      setError(
        "An error occured while sending your message. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden py-28 bg-linear-to-br from-pink-100 via-white to-purple-100"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="bg-white/90 backdrop-blur-xl rounded-[40px] p-10 shadow-xl border border-white/30">
            <span className="bg-pink-100 text-pink-500 px-5 py-2 rounded-full text-sm font-semibold tracking-wider">
              CONTACT US
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-6">
              Visit BrightSky Academy 💛
            </h2>

            <p className="text-gray-600 mt-5 text-lg leading-8">
              We&apos;d love to welcome you to our campus and answer all your
              admission or program-related questions.
            </p>

            {/* Contact Items */}
            <div className="mt-12 space-y-8">
              {/* Address */}
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-pink-500" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
                    Campus Address
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mt-2 leading-8">
                    BrightSky Academy,
                    <br />
                    Main Road, Your City,
                    <br />
                    India
                  </h3>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-purple-500" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
                    Admission Helpline
                  </p>

                  <h3 className="text-lg font-semibold text-pink-500 mt-2 leading-8">
                    +91 7468343210
                    <br />
                    +91 6876543211
                  </h3>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-pink-500" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
                    Email
                  </p>

                  <h3 className="text-lg font-semibold text-blue-500 mt-2">
                    info@brightskyacademy.com
                  </h3>
                </div>
              </div>

              {/* Timing */}
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
                  <Clock3 className="w-7 h-7 text-purple-500" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
                    School Hours
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mt-2 leading-8">
                    Monday - Saturday
                    <br />
                    8:00 AM - 2:00 PM
                  </h3>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-lg gap-1.5 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white h-14 rounded-2xl font-semibold transition cursor-pointer"
              >
                <FaFacebookF className="w-4 h-4" />
                Facebook
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-lg gap-1.5 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white h-14 rounded-2xl font-semibold transition cursor-pointer"
              >
                <FaInstagram className="w-4 h-4" />
                Instagram
              </a>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-lg gap-1.5 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white h-14 rounded-2xl font-semibold transition cursor-pointer"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-lg gap-1.5 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white h-14 rounded-2xl font-semibold transition cursor-pointer"
              >
                <FaLinkedinIn className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/90 backdrop-blur-xl rounded-[40px] p-10 shadow-xl border border-white/30">
            <span className="bg-purple-100 text-purple-500 px-5 py-2 rounded-full text-sm font-semibold tracking-wider">
              SEND ENQUIRY
            </span>

            <h2 className="text-3xl font-bold text-gray-900 mt-6">
              Send us a message ✨
            </h2>

            <p className="text-gray-600 mt-5 text-lg leading-8">
              Fill out the form and our team will contact you shortly.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6 mt-10">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="parentName"
                  placeholder="Parent Name *"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  className="h-16 rounded-2xl border border-gray-200 px-6 outline-none focus:ring-2 focus:ring-pink-300 transition"
                />

                <input
                  type="text"
                  name="childName"
                  placeholder="Child Name *"
                  required
                  value={formData.childName}
                  onChange={handleChange}
                  className="h-16 rounded-2xl border border-gray-200 px-6 outline-none focus:ring-2 focus:ring-pink-300 transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-16 rounded-2xl border border-gray-200 px-6 outline-none focus:ring-2 focus:ring-pink-300 transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="h-16 rounded-2xl border border-gray-200 px-6 outline-none focus:ring-2 focus:ring-pink-300 transition"
                />
              </div>

              <textarea
                rows={6}
                name="message"
                placeholder="Your message or questions..."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 px-6 py-5 outline-none focus:ring-2 focus:ring-pink-300 transition resize-none"
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-16 bg-linear-to-r from-pink-500 to-pink-400 hover:opacity-90 text-white rounded-full text-lg font-semibold shadow-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>Send Message →</>
                )}
              </button>

              {/* Error */}
              {error && (
                <div className="bg-red-100 text-red-700 px-6 py-4 rounded-2xl text-center font-medium">
                  {error}
                </div>
              )}

              {/* Success */}
              {success && (
                <div className="bg-green-100 text-green-700 px-6 py-4 rounded-2xl text-center font-medium">
                  Message sent successfully!
                </div>
              )}
            </form>

            {/* WhatsApp CTA */}
            <div className="text-center mt-10">
              <p className="text-gray-500">Or reach us directly on WhatsApp</p>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
