import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import LogoML from "#/components/LogoML";
import NavigationBar from "#/components/NavigationBar";
import About from "#/components/About";

import "../styles.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  console.log("Я ререндурюсь");
  return (
    <>
      <div className="bg-gray-200 dark:bg-black dark:text-white grid grid-rows-[auto_1fr] h-screen">
        <div className="flex flex-row font-googlesans pt-3">
          <LogoML />
          <NavigationBar />
          <About />
        </div>
        <Outlet />
        {/* <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "TanStack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        /> */}
      </div>
    </>
  );
}
