"use client";
import { createContext, useContext, useState } from "react";

type ModalType = "booking" | "contact" | null;

const ModalContext = createContext<{
  open: ModalType;
  openBooking: () => void;
  openContact: () => void;
  close: () => void;
}>({ open: null, openBooking: () => {}, openContact: () => {}, close: () => {} });

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<ModalType>(null);
  return (
    <ModalContext.Provider value={{
      open,
      openBooking: () => setOpen("booking"),
      openContact: () => setOpen("contact"),
      close: () => setOpen(null),
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
