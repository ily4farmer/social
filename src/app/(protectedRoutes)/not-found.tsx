import { Container, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>Похоже, такой страницы не существует. Попытайте свою удачу снова</Text>
      <Link href="/">Return Home</Link>
    </Container>
  );
}
