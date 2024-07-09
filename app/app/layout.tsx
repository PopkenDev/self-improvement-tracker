import { MainNav } from "@/components/main-nav";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = async ({ children }: AppLayoutProps) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div className={`h-screen overflow-y-scroll`}>
        <MainNav />
        {children}
      </div>
    </SessionProvider>
  );
};

export default AppLayout;
