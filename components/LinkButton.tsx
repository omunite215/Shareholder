import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Download } from "lucide-react";

const LinkButton = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={buttonVariants({ variant: "secondary" })}
    >
      <Download/>
    </Link>
  );
};

export default LinkButton;
