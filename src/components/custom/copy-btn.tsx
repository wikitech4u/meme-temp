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
      .writeText(appConfig.contract_section.contractAddress)
      .then(() => toast.success("Copied to clipboard"))
      .catch((err) => toast.error("Failed to copy: " + err));
  };
  return (
    <>
      <Button
        onClick={handleClick}
        className="bg-transparent hover:bg-primary hover:text-accent"
        variant={"outline"}
        size={"lg"}
      >
        <Copy />
        {appConfig.contract_section.copyBtn}
      </Button>
      <Toaster  richColors position="top-center"/>
    </>
  );
};

export default CopyBtn;
