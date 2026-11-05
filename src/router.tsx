import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { ErrorComponent } from "@/components/site/RouteBoundaries";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    defaultErrorComponent: ErrorComponent,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadDelay: 50,
    defaultPreloadStaleTime: 30_000,
  });

  return router;
};
