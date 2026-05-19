"use client";
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

export type ServiceData = {
  icon: ReactNode;
  title: string;
  desc: string;
  details: string;
};

type ModalType = "booking" | "contact" | "service" | null;

const ModalContext = createContext<{
  open: ModalType;
  serviceData: ServiceData | null;
  openBooking: () => void;
  openContact: () => void;
  openService: (data: ServiceData) => void;
  close: () => void;
}>({ open: null, serviceData: null, openBooking: () => {}, openContact: () => {}, openService: () => {}, close: () => {} });

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<ModalType>(null);
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);
  return (
    <ModalContext.Provider value={{
      open,
      serviceData,
      openBooking: () => setOpen("booking"),
      openContact: () => setOpen("contact"),
      openService: (data) => { setServiceData(data); setOpen("service"); },
      close: () => setOpen(null),
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
