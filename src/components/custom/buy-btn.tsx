import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { appConfig } from "@/config";
import { VariantProps } from "class-variance-authority";

type Props = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const BuyBtn = ({ ...props }: Props) => {
  return (
    <Link href={appConfig.header.store.url} target="_blank">
      <Button {...props}>{appConfig.header.store.text}</Button>
    </Link>
  );
};

export default BuyBtn;
