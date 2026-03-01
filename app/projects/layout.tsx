import BackArrow from "@/components/BackArrow";
import ScrollToTop from "@/components/ScrollToTop";

export default function ProjectLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <div className="flex min-h-screen flex-col items-center justify-between px-10 py-16 md:p-24 font-body">
   {children}
   <BackArrow />
   <ScrollToTop />
  </div>
 );
}
