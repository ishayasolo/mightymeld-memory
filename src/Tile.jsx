export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-auto aspect-square w-full bg-blue-300 rounded-lg"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-block h-auto aspect-square w-full bg-blue-500 text-white px-2 rounded-lg">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "middle",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-block h-auto aspect-square w-full bg-trnsparent text-blue-200 px-2 rounded-lg">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              verticalAlign: "middle",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return <div onClick={flip} className={className}></div>;
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
