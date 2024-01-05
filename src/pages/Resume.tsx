import Container from "../components/Container";
import Period from "../components/Period";
import Section from "../components/Section";
import data from "../data/config.json";

export default function Resume() {
    const { education, experience, award } = data.resume;
    return (
        <Container className="bg-neutral-800 text-white">
            <div>
                <Section title="Education">
                    <div>
                        <p>
                            {education.dept}, {education.univ}
                        </p>
                        <p>{education.degree}</p>
                        <p>
                            ({education.period.start} ~ {education.period.end ? education.period.end : ""})
                        </p>
                    </div>
                </Section>

                <Section title="Experience">
                    {experience.map((exp) => (
                        <div className="mt-8">
                            {/* 하이퍼링크 등록 */}
                            <h2 className="font-medium text-xl">
                                <a href={exp.url}>{exp.title}</a>
                            </h2>
                            <h3 className="mt-1">{exp.position}</h3>
                            <Period period={exp.period} />
                        </div>
                    ))}
                </Section>

                <Section title="Academic Awards">
                    <div>
                        {award.map((data) => (
                            <div className="mt-1">
                                <h2>
                                    <span className="font-bold">{data.award},</span> {data.name}
                                    {data.organizer ? `, ${data.organizer}` : ""}
                                </h2>
                            </div>
                        ))}
                    </div>
                </Section>
            </div>
        </Container>
    );
}
