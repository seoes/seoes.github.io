import { SimpleIcon } from "simple-icons";

type SkillProps = {
    icon: SimpleIcon;
};

export default function Skill({ icon }: SkillProps) {
    const regex = /https:\/\/([^/]+)/;
    const url = icon.source.match(regex);
    return (
        <div className="max-xl:mx-3 hover:opacity-85 transition-opacity">
            <a href={url ? url[0] : "#"} target="_blank" rel="noreferrer">
                <div style={{ backgroundColor: `#${icon.hex}` }} className={` xl:w-80 w-full m-auto p-4 bg-[${icon.hex}] font-normal`}>
                    <div className="flex gap-4 h-6">
                        <div className="w-12">
                            <svg width="100%" height="100%" viewBox="0 0 24 24">
                                <path fill={`#FFFFFF`} d={icon.path} />
                            </svg>
                        </div>
                        <div className=" flex items-center">
                            <p className=" text-lg text-center text-gray-100">{icon.title}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}
