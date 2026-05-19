"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { useModal } from "./ModalContext";

export default function ServiceModal() {
  const { open, serviceData, close, openBooking } = useModal();
  const [isClosing, setIsClosing] = useState(false);

  if (open !== "service" && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      close();
      setIsClosing(false);
    }, 280);
  };

  const handleBook = () => {
    handleClose();
    setTimeout(() => openBooking(), 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        style={{ animation: isClosing ? "backdropOut 0.28s ease-in both" : "backdropIn 0.28s ease-out both" }}
      />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
        style={{ animation: isClosing ? "modalOut 0.28s ease-in both" : "modalIn 0.32s ease-out both" }}
      >
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#485C46]/10 flex items-center justify-center mb-5">
          {serviceData?.icon}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{serviceData?.title}</h2>

        {/* Short desc */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{serviceData?.desc}</p>

        {/* Divider */}
        <div className="border-t border-gray-100 my-4" />

        {/* Detailed info */}
        <p className="text-gray-600 text-sm leading-relaxed mb-8">{serviceData?.details}</p>

        {/* CTA */}
        <button
          onClick={handleBook}
          className="cursor-pointer w-full bg-[#485C46] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#3a4a38] transition-colors"
        >
          Записатись на заняття
        </button>
      </div>
    </div>
  );
}
