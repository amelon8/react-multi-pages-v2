import { Link } from "react-router-dom";
import {
    Button,
    Container,
    Text,
    Textarea,
    TextInput,
    Title,
} from "@mantine/core";
// import "../styles/ContactPage.css";

export default function ContactPage() {
    return (
        <div className="contact-page">
            <Container size="md" className="py-20">
                <Title order={1} className="mb-4">Contact Us</Title>
                <Text className="mb-8 text-lg">
                    Get in touch with us! We'd love to hear from you.
                </Text>

                <form className="mb-8 space-y-4 max-w-md">
                    <TextInput
                        label="Name"
                        placeholder="Your name"
                        required
                    />
                    <TextInput
                        label="Email"
                        placeholder="your@email.com"
                        type="email"
                        required
                    />
                    <Textarea
                        label="Message"
                        placeholder="Your message here"
                        minRows={4}
                        required
                    />
                    <Button type="submit" fullWidth>
                        Send Message
                    </Button>
                </form>

                <div className="flex gap-4 flex-wrap">
                    <Link to="/">
                        <Button variant="default">Home</Button>
                    </Link>
                    <Link to="/about">
                        <Button>About</Button>
                    </Link>
                    <Link to="/info">
                        <Button>Info</Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
}
