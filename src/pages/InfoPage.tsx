import { Link } from "react-router-dom";
import { Button, Card, Container, Text, Title } from "@mantine/core";

export default function InfoPage() {
    return (
        <Container size="md" className="py-20">
            <Title order={1} className="mb-4">Information</Title>
            <Text className="mb-8 text-lg">
                Here's some useful information about our project and services.
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card withBorder shadow="sm" radius="md">
                    <Card.Section withBorder inheritPadding py="md">
                        <Title order={3}>Fast Development</Title>
                    </Card.Section>
                    <Text size="sm">
                        Vite provides instant server start and lightning-fast
                        HMR (Hot Module Replacement).
                    </Text>
                </Card>

                <Card withBorder shadow="sm" radius="md">
                    <Card.Section withBorder inheritPadding py="md">
                        <Title order={3}>Type Safety</Title>
                    </Card.Section>
                    <Text size="sm">
                        TypeScript ensures type safety and provides excellent
                        IDE support and autocompletion.
                    </Text>
                </Card>

                <Card withBorder shadow="sm" radius="md">
                    <Card.Section withBorder inheritPadding py="md">
                        <Title order={3}>Beautiful UI</Title>
                    </Card.Section>
                    <Text size="sm">
                        Mantine provides a comprehensive component library for
                        building polished interfaces.
                    </Text>
                </Card>

                <Card withBorder shadow="sm" radius="md">
                    <Card.Section withBorder inheritPadding py="md">
                        <Title order={3}>Easy Styling</Title>
                    </Card.Section>
                    <Text size="sm">
                        Tailwind CSS makes it simple to create custom designs
                        with utility-first approach.
                    </Text>
                </Card>
            </div>

            <div className="flex gap-4 flex-wrap">
                <Link to="/">
                    <Button variant="default">Home</Button>
                </Link>
                <Link to="/about">
                    <Button>About</Button>
                </Link>
                <Link to="/contact">
                    <Button>Contact</Button>
                </Link>
            </div>
        </Container>
    );
}
