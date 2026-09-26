import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/sharedComponents/Navbar/navBar";
import WorkoutProvider from "./context/workoutContext";
import Footer from "./components/sharedComponents/Footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog | Workout Library",
  description: "Choose a lift, build today's plan, and track your workout work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <WorkoutProvider>
          <NavBar />
          <div className="flex-1">{children}</div>
          <Footer />
        </WorkoutProvider>
      </body>
    </html>
  );
}
