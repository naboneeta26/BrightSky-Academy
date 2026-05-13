"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import type { AdmissionFormType } from "@/types/admissionType";

const initialState: AdmissionFormType = {
  parentName: "",
  childName: "",
  phone: "",
  email: "",
  dob: "",
  program: "",
  message: "",
};

export default function AdmissionEnquiryForm() {
  const [formData, setFormData] = useState<AdmissionFormType>(initialState);

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

      // FUTURE API INTEGRATION

      /*
      await axios.post("/api/admission-enquiry", formData);
      */

      console.log("FORM DATA =>", formData);
      setSuccess(true);
      setFormData(initialState);
    } catch (error) {
      console.error(error);
      setError("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="enquiry-form"
      className="relative overflow-hidden bg-linear-to-br from-pink-100 to-purple-100 py-28"
    >
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="bg-white/90 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/30 p-8 md:p-14">
          {/* Heading */}
          <div className="text-center mb-12">
            <span className="bg-pink-100 text-pink-500 px-5 py-2 rounded-full text-sm font-semibold tracking-wider">
              ADMISSION ENQUIRY
            </span>

            <p className="text-gray-600 text-lg mt-5 leading-8">
              Fill out the enquiry form and our admissions team will contact you
              shortly.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-6">
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

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-6">
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

            {/* DOB */}
            <input
              type="date"
              name="dob"
              required
              value={formData.dob}
              onChange={handleChange}
              className="w-full h-16 rounded-2xl border border-gray-200 px-6 outline-none focus:ring-2 focus:ring-pink-300 transition"
            />

            {/* Program */}
            <select
              name="program"
              required
              value={formData.program}
              onChange={handleChange}
              className="w-full h-16 rounded-2xl border border-gray-200 px-6 outline-none focus:ring-2 focus:ring-pink-300 transition bg-white"
            >
              <option value="">Select Program *</option>

              <option value="Preschool">Preschool</option>

              <option value="Kindergarten">Kindergarten</option>

              <option value="Primary School">Primary School</option>

              <option value="After School">After School</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Any questions or special requirements?"
              rows={5}
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
                  Submitting...
                </>
              ) : (
                <>Submit Enquiry →</>
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
                Enquiry submitted successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
