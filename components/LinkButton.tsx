import { buttonVariants } from "./ui/button";
import { Download } from "lucide-react";

const LinkButton = ({ href }: { href: string }) => {
  return (
    <a
      href={href}
      download
      className={buttonVariants({ variant: "secondary" })}
    >
      <Download/>
    </a>
  );
};

export default LinkButton;
