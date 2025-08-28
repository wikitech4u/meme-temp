"use client";
import { appConfig } from "@/config";
import React from "react";
import { toast, Toaster } from "sonner";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";

const CopyBtn = () => {
  const handleClick = () => {
    if (!navigator.clipboard) {
      toast.error("Clipboard access not available");
      return;
    }
    navigator.clipboard
      .writeText(appConfig.social_section.contractAddress)
      .then()
      .catch((err) => toast.error("Failed to copy: " + err));
  };
  return (
    <>
      <Button
        onClick={handleClick}
        className="bg-transparent hover:text-yellow-500"
        variant={"link"}
        size={"lg"}
      >
        <Copy />
        {appConfig.social_section.copyBtn}
      </Button>
      <Toaster richColors position="top-center" />
    </>
  );
};

export default CopyBtn;
