import "./globals.css";
import React from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Link href={"./users"}>Go to users...</Link>
        <br/>
        <Link href={"./"}>Go to home page...</Link>
      </body>
    </html>
  );
}
