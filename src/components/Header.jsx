import { useState } from "react";
import { Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { LittleLemonLogo } from "./LittleLemonLogo";
import { Link } from "@tanstack/react-router";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/menu", label: "Menu" },
  { link: "/reservation", label: "Reservations" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const activeProps = {
    style: {
      fontWeight: "bold",
    },
  };

  const items = links.map((link) => (
    <Link className={classes.link} to={link.link}>
      {link.label}
    </Link>
    // <a
    //   key={link.label}
    //   href={link.link}
    //   className={classes.link}
    //   data-active={active === link.link || undefined}
    //   onClick={(event) => {
    //     event.preventDefault();
    //     setActive(link.link);
    //   }}
    // >
    //   {link.label}
    // </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <LittleLemonLogo />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
