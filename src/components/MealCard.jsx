import { Card, Text, Button, Image, Group } from "@mantine/core";

export function MealCard({ meal }) {
  console.log(meal);
  return (
    <Card shadow="sm" padding="lg" radius="md">
      <Card.Section>
        <Image src={meal.src} alt={meal.name} h={128} w={128} />
      </Card.Section>
      <Group position="apart" mt="md">
        <Text weight={500}>{meal.name}</Text>
        <Text c="orange">{meal.price}</Text>
      </Group>
      <Text size="sm" c="dimmed" mt="sm">
        {meal.desc}
      </Text>
      <Button mt="lg" color="yellow" radius="md" fullWidth>
        Order a delivery
      </Button>
    </Card>
  );
}
