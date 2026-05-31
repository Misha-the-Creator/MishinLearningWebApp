import { Outlet, createRootRoute } from "@tanstack/react-router";
import LogoML from "#/components/LogoML";
import NavigationBar from "#/components/NavigationBar";
import About from "#/components/About";

import "../styles.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="bg-gray-200 dark:bg-black dark:text-white grid grid-rows-[auto_1fr] min-h-screen">
        <div className="flex flex-row font-googlesans pt-3">
          <LogoML />
          <NavigationBar />
          <About />
        </div>
        <Outlet />
      </div>
    </>
  );
}
