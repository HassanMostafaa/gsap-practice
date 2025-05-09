import React from "react";

export const FooterNav = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className=" contain p-4 bg-black text-white">
        <p className="text-md">
          Copyright By: Hassan.M &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
