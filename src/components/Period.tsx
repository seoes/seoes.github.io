import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

type SectionType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    period: {
        start: number | string;
        end: number | string | null;
    };
};

export default function Period({ className: _className, period, children }: PropsWithChildren<SectionType>) {
    const className = [_className, "text-sm"].join(" ");
    return (
        <p className={className}>
            ({period.start} ~ {period.end ? period.end : ""})
        </p>
    );
}
