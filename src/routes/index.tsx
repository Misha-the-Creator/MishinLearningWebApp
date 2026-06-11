import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const mapFont = ["i", "v"];
  const headerStr1 = "M{i}sha";
  const headerStr2 = "Zue{v}";

  return (
    <div className="font-googlesans text-[20vw] lg:text-[10vw] content-end justify ml-10 -mt-10">
      <p>
        {headerStr1
          .split("")
          .map((char) =>
            Object.keys(mapFont).includes(char) ? (
              <span className="font-pixel">{char}</span>
            ) : (
              char
            ),
          )}
      </p>
      <p className="-mt-25">
        {headerStr2
          .split("")
          .map((char) =>
            Object.keys(mapFont).includes(char) ? (
              <span className="font-pixel">{char}</span>
            ) : (
              char
            ),
          )}
      </p>
    </div>
  );
}
