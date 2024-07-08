import { Poppins } from "next/font/google";

import { MainNav } from "@/components/main-nav";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={font.className}>
      <MainNav />
      {children}
    </div>
  );
};

export default AppLayout;
