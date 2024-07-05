import React from "react";
import Header from "../../components/Header";

interface HomePageLayoutProps {
  children: React.ReactNode;
}

const HomePageLayout = ({ children }: HomePageLayoutProps) => {
  return (
    <main className="w-screen flex-col flex items-start">
      <Header />
      {children}
    </main>
  );
};

export default HomePageLayout;
