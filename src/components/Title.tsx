import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

type SectionType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {};

export default function Title({ className: _className, title, children }: PropsWithChildren<SectionType>) {
    const className = [_className, "text-4xl font-extralight"].join(" ");
    return <h1 className={className}>{children}</h1>;
}
