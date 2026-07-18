import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});
export const Footer = () => {
  return (
    <footer className="flex border-t items-center justify-between font-medium p-6">
      <p>
        <strong className={font.className}>Vendora</strong> | Multi-vendor
        E-commerce Site
      </p>
      <p className={font.className}>Divyajyoti</p>
    </footer>
  );
};
