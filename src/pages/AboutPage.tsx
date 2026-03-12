import { Link } from "react-router-dom";
import { Button, Container, Text, Title } from "@mantine/core";
// import "../styles/AboutPage.css";

export default function AboutPage() {
    return (
        <div className="about-page">
            <Container size="md" className="py-20">
                <Title order={1} className="mb-4">About Us</Title>
                <Text className="mb-8 text-lg">
                    We are a passionate team dedicated to creating amazing web
                    applications. This site showcases our technical expertise in
                    modern React development.
                </Text>

                <div className="mb-8 p-6 bg-green-50 rounded-lg tech-stack">
                    <Title order={3} className="mb-4">Our Tech Stack</Title>
                    <ul className="list-disc list-inside space-y-2">
                        <li>React 19 with TypeScript</li>
                        <li>Vite for fast development</li>
                        <li>React Router for navigation</li>
                        <li>Mantine UI for components</li>
                        <li>Tailwind CSS for styling</li>
                    </ul>
                </div>

                <div className="flex gap-4 flex-wrap">
                    <Link to="/">
                        <Button variant="default">Home</Button>
                    </Link>
                    <Link to="/contact">
                        <Button>Contact</Button>
                    </Link>
                    <Link to="/info">
                        <Button>Info</Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
}
