import Container from "../components/Container";
import Section from "../components/Section";
import data from "../data/config.json";

export default function Contact() {
    const { contact, info } = data.contact;
    return (
        <Container className="">
            <Section title="Info">
                {info.map((data) => (
                    <a href={data.href} target="_blank" rel="noreferrer">
                        <p>{data.name}</p>
                    </a>
                ))}
            </Section>
            <Section title="Contact">
                {contact.map((data) => (
                    <a href={data.href} target="_blank" rel="noreferrer">
                        <p>{data.name}</p>
                    </a>
                ))}
                <div>
                    <p className="mt-2">Feel free to contact</p>
                </div>
            </Section>
        </Container>
    );
}
