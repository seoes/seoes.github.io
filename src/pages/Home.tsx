import { useInView } from "react-intersection-observer";
import Container from "../components/Container";
import data from "../data/config.json";

export default function Home() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const { name, job } = data.home;
    return (
        <Container className="font-thin text-white h-[85vh] bg-fixed bg-center bg-cover bg-[url('https://media.pitchfork.com/photos/61048de17315005f3e021fd3/16:9/w_4448,h_2502,c_limit/GettyImages-1330153505.jpg')]">
            <div ref={ref} className={`cursor-default ${inView ? "animate-fadeIn" : "opacity-0"}`}>
                <h1 className="text-7xl tracking-tighter">{name}</h1>
                <h2 className="text-6xl tracking-tighter mt-8 ">{job}</h2>
            </div>
        </Container>
    );
}
