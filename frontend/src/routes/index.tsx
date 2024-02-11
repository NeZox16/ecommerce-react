import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { Section } from "../components";
import { Home } from "../pages/pages";

export const Route = createFileRoute("/")({
    component: Index,
});

export default function Index() {
    return <Section>
        <Home/>
    </Section>;
}
