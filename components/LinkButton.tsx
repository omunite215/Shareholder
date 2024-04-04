import { buttonVariants } from "./ui/button";
import { Download } from "lucide-react";

const LinkButton = ({
  href,
  download = true,
}: {
  href: string;
  download?: boolean;
}) => {
  return (
    <a
      href={href}
      download={download}
      className={buttonVariants({ variant: "secondary" })}
    >
      {download ? <Download /> : "Preview"}
    </a>
  );
};

export default LinkButton;
