import AdmissionBanner from "@/components/section/Admission/AdmissionBanner";
import AdmissionEnquiryForm from "@/components/section/Admission/AdmissionForm";
import AdmissionProcess from "@/components/section/Admission/AdmissionProcess";
import React from "react";

const page = () => {
  return (
    <main>
      <AdmissionBanner />
      <AdmissionProcess />
      <AdmissionEnquiryForm />
    </main>
  );
};

export default page;
