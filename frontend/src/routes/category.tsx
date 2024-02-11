import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/category")({
    component: Index,
});

export default function Index() {
    return <div>index</div>;
}
