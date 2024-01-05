import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import Title from "./Title";

type SectionType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    title: string;
};

export default function Section({ className: _className, title, children }: PropsWithChildren<SectionType>) {
    const className = [_className, "mt-20"].join(" ");
    return (
        <div className={className}>
            <div>
                <Title>{title}</Title>
            </div>
            <div className="mt-8">{children}</div>
        </div>
    );
}
