import "./globals.css";

export const metadata = {
  title: "Nuestra boda",
  description: "Nuestro rincón para compartir los detalles de nuestra boda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
