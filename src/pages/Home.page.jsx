import {
  Container,
  Grid,
  Text,
  Button,
  Image,
  Title,
  Stack,
} from "@mantine/core";
import { MealCard } from "../components/MealCard";
import { Link } from "@tanstack/react-router";

const meals = [
  {
    src: "https://picsum.photos/200",
    name: "Greek Salad",
    price: "$12.99",
    desc: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    src: "https://picsum.photos/200",
    name: "Bruschetta",
    price: "$5.99",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    src: "https://picsum.photos/200",
    name: "Lemon Dessert",
    price: "$5.00",
    desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export function Home() {
  return (
    <Container>
      <Container bg="var(--mantine-primary-color-0)">
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack p="xl">
              <Title c="yellow" order={1}>
                Little Lemon
              </Title>
              <Text c="white">Chicago</Text>
              <Text c="white" mt="sm">
                We are a family-owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </Text>
              <Link to="/reservation">
                <Button mt="lg" color="yellow" radius="md" size="md">
                  Reserve a Table
                </Button>
              </Link>
            </Stack>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 6 }}
            display="flex"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              src="https://picsum.photos/seed/picsum/200"
              alt="Dish image"
              radius="md"
              h={250}
              w={250}
            />
          </Grid.Col>
        </Grid>
      </Container>

      {/* Specials Section */}
      <Grid mt="xl" mb="xl" align="center" justify="center">
        <Grid.Col span={{ base: 12, md: 8 }} pl="lg">
          <Title order={2} mt="xl">
            This week&apos;s specials!
          </Title>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 4 }}
          display="flex"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Button mt="sm" color="yellow" radius="md" size="md">
            Online Menu
          </Button>
        </Grid.Col>
      </Grid>

      <Grid mt="xl">
        {meals.map((item) => (
          <Grid.Col span={{ base: 12, md: 4 }}>
            <MealCard meal={item} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
