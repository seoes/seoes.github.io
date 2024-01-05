import { siAwslambda, siDocker, siExpress, siGitea, siGithub, siGithubactions, siGraphql, siJest, siMongodb, siMysql, siNestjs, siNextdotjs, siNginx, siNodedotjs, siPostgresql, siReact, siServerless, siSwagger, siTailwindcss, siTypescript } from "simple-icons";
import Skill from "../components/Skill";
import Container from "../components/Container";
import Section from "../components/Section";
import data from "../data/config.json";
import Title from "../components/Title";

export default function Skills() {
    const { board } = data.skills;
    return (
        <Container className="min-h-screen">
            <div>
                <div className="mt-12">
                    <div>
                        <Title className="text-center">{board.title}</Title>
                    </div>
                    <div className="mt-8 text-center">
                        {board.body.map((str) => (
                            <p className="mt-2">{str}</p>
                        ))}
                    </div>
                </div>
                <div className="xl:flex gap-16 justify-center text-center text-3xl text-black font-extralight">
                    <Section title="Front-end">
                        <div className="flex flex-col gap-2 mt-5">
                            <Skill icon={siTypescript} />
                            <Skill icon={siReact} />
                            <Skill icon={siNextdotjs} />
                            <Skill icon={siTailwindcss} />
                        </div>
                    </Section>
                    <Section title="Back-end">
                        <div className="flex flex-col gap-2 mt-5">
                            <Skill icon={siTypescript} />
                            <Skill icon={siNodedotjs} />
                            <Skill icon={siExpress} />
                            {/* <Skill icon={siNestjs} /> */}
                            {/* <Skill icon={siGraphql} /> */}
                            <Skill icon={siJest} />
                            <Skill icon={siPostgresql} />
                            <Skill icon={siMongodb} />
                            <Skill icon={siMysql} />
                        </div>
                    </Section>
                    <Section title="Infrastructure">
                        <div className="flex flex-col gap-2 mt-5">
                            {/* <Skill icon={siAwslambda} /> */}
                            {/* <Skill icon={siServerless} /> */}
                            <Skill icon={siDocker} />
                            <Skill icon={siNginx} />
                            <Skill icon={siGitea} />
                            <Skill icon={siGithub} />
                            <Skill icon={siGithubactions} />
                        </div>
                    </Section>
                </div>
            </div>
        </Container>
    );
}
