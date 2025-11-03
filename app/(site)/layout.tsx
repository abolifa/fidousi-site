import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full flex flex-col gap-0">
      <Navbar />
      <div className="h-4" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
