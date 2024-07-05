import React from "react";

interface AuthenticationPageProps {
  children: React.ReactNode;
}

const AuthenticationPage = ({ children }: AuthenticationPageProps) => {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      {children}
    </div>
  );
};

export default AuthenticationPage;
