"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Loader2, MapPin, X } from "lucide-react";

import type {
  eventFormData,
  EventRegistrationModalProps,
} from "@/types/eventType";

const initialState: eventFormData = {
  parentName: "",
  childName: "",
  phone: "",
  email: "",
  attendees: "",
  message: "",
};

export default function EventRegistrationModal({
  open,
  onClose,
  eventTitle,
}: EventRegistrationModalProps) {
  const [formData, setFormData] = useState<eventFormData>(initialState);

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      await axios.post("/api/event-registration", {
        ...formData,
        eventTitle,
      });
      */

      console.log({
        ...formData,
        eventTitle,
      });

      setSuccess(true);

      setFormData(initialState);
    } catch (error) {
      console.error(error);

      setError(
        "An error occurred while submitting the form. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-999 overflow-y-auto bg-linear-to-br from-pink-200/20 via-purple-200/20 to-pink-300/20 backdrop-blur-xl"
        >
          {/* Decorative Blobs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>

          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl"></div>

          {/* Center Wrapper */}
          <div className="min-h-screen flex items-center justify-center px-4 py-16">
            {/* Modal */}
            <motion.div
              initial={{
                y: 40,
                scale: 0.95,
                opacity: 0,
              }}
              animate={{
                y: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                y: 40,
                scale: 0.95,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="relative w-full max-w-2xl rounded-[40px] overflow-hidden border border-white/30 bg-white/70 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.15)]"
            >
              {/* Top Gradient */}
              <div className="relative overflow-hidden bg-linear-to-r from-pink-500 via-pink-500 to-purple-500 px-10 py-12">
                {/* Top Decorative Circle */}
                <div className="absolute -top-10 -right-10 w-56 h-56 bg-white/10 rounded-full"></div>

                {/* Close */}
                <button
                  onClick={onClose}
                  className="cursor-pointer absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <div className="relative z-10">
                  <span className="bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
                    EVENT REGISTRATION
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 leading-tight">
                    Register for
                    <br />
                    {eventTitle}
                  </h2>

                  <div className="flex flex-wrap items-center gap-6 mt-6 text-white/90">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>Upcoming Event</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>BrightSky Academy</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="parentName"
                      placeholder="Parent Name *"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      className="h-16 rounded-2xl border border-gray-300 px-6 outline-none focus:ring-2 focus:ring-pink-300 transition"
                    />

                    <input
                      type="text"
                      name="childName"
                      placeholder="Child Name *"
                      required
                      value={formData.childName}
                      onChange={handleChange}
                      className="h-16 rounded-2xl border border-gray-300 px-6 outline-none focus:ring-2 focus:ring-pink-300 transition"
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
                      className="h-16 rounded-2xl border border-gray-300 px-6 outline-none focus:ring-2 focus:ring-pink-300 transition"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-16 rounded-2xl border border-gray-300 px-6 outline-none focus:ring-2 focus:ring-pink-300 transition"
                    />
                  </div>

                  <input
                    type="number"
                    name="attendees"
                    placeholder="Number of Attendees"
                    value={formData.attendees}
                    onChange={handleChange}
                    className="w-full h-16 rounded-2xl border border-gray-300 px-6 outline-none focus:ring-2 focus:ring-pink-300 transition"
                  />

                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Additional message or requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-300 px-6 py-5 outline-none focus:ring-2 focus:ring-pink-300 transition resize-none"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="cursor-pointer w-full h-16 bg-linear-to-r from-pink-500 to-purple-500 hover:opacity-90 text-white rounded-full text-lg font-semibold shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Registering...
                      </>
                    ) : (
                      <>Complete Registration →</>
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
                      Registration successful!
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
