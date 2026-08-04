import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/tentang-kami")({
  component: () => <Outlet />,
});
