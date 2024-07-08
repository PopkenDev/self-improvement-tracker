import { Hind_Madurai } from "next/font/google";

import { MainNav } from "@/components/main-nav";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const font = Hind_Madurai({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = async ({ children }: AppLayoutProps) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div className={font.className}>
        <MainNav />
        {children}
      </div>
    </SessionProvider>
  );
};

export default AppLayout;
