import {
  Container,
  Title,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";

function handleSubmit(values) {
  console.log(values);
}

export function Reservations() {
  const form = useForm({
    mode: "controlled",
    initialValues: {
      date: null,
      time: null,
      guests: 1,
      occasion: null,
    },
    validate: {
      guests: function (value) {
        return value < 1 || value > 10 ? "Invalid number of guests" : null;
      },
    },
  });

  return (
    <Container>
      <Stack>
        <Title>Reserve a table</Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack maw={200} mx="auto" gap={20}>
            <TextInput
              type="date"
              label="Choose date"
              {...form.getInputProps("date")}
            />

            <Select
              label="Choose time"
              data={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
              {...form.getInputProps("time")}
            />

            <NumberInput
              label="Number of guests"
              min={1}
              max={10}
              {...form.getInputProps("guests")}
            />

            <Select
              label="Occasion"
              data={["Birthday", "Anniversary"]}
              {...form.getInputProps("occasion")}
            />

            <Button type="submit">Make Your Reservation</Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
}
