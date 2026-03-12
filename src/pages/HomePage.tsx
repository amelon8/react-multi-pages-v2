import { Link } from "react-router-dom";
import { Button, Container, Text, Title } from "@mantine/core";

export default function HomePage() {
    return (
        <Container size="md" className="py-20">
            <Title order={1} className="mb-4">Welcome to Our Site</Title>

            <Text className="mb-8 text-lg">
                This is the home page of our multi-page React application built
                with Vite, React Router, Mantine UI, and Tailwind CSS.
            </Text>

            <div className="mb-8 mt-12 p-8 bg-blue-50 rounded-lg">
                <Title order={3} className="mb-4">Getting Started</Title>
                <Text>
                    Navigate through the pages using the links above to explore
                    the application.
                </Text>
            </div>

            <div className="flex gap-4 flex-wrap">
                <Link to="/about">
                    <Button>About Us</Button>
                </Link>
                <Link to="/contact">
                    <Button>Contact</Button>
                </Link>
                <Link to="/info">
                    <Button>Info</Button>
                </Link>
            </div>
        </Container>
    );
}
