import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const mapFont = { e: "font-pixel", i: "font-pixel" };
  const headerStr1 = "M{i}sh{i}n";
  const headerStr2 = "L{e}arn{i}ng";

  return (
    <div className="font-googlesans text-[12vw] h-full content-end justify ml-15">
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
