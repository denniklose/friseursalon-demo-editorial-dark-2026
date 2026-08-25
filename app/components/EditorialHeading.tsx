import type { ElementType } from "react";
import type { EditorialTitle } from "../../config/salon";

type EditorialHeadingProps = {
  as?: "h1" | "h2" | "h3";
  title: EditorialTitle;
  id?: string;
  className?: string;
};

export default function EditorialHeading({ as = "h2", title, id, className }: EditorialHeadingProps) {
  const Heading = as as ElementType;
  return <Heading id={id} className={className}>{title.lead} <em className="heading-accent">{title.accent}</em></Heading>;
}
