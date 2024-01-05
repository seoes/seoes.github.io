import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

type ContainerType = {} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function Container({ className: _className, children, ...props }: PropsWithChildren<ContainerType>) {
    const className = ["mx-auto cursor-default min-h-screen w-full text-lg tracking-tighter flex justify-center items-center tracking-tighter, px-4 py-24", _className].join(" ");
    return (
        <div {...props} className={className}>
            <div className="max-w-4xl">{children}</div>
        </div>
    );
}
