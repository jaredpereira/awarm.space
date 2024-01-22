export const metadata = {
  title: "awarm.space: interests",
};
export default function InterestsPage() {
  return (
    <div>
      <h1>interests</h1>
      <ul className="flex flex-col gap-2">
        {Interests.toSorted(() => Math.random() - Math.random()).map(
          (item, index) => (
            <li key={index}>{item.interest}</li>
          ),
        )}
      </ul>
      <br />
      <h2>dreams</h2>
      <ul className="flex flex-col gap-2">
        {Dreams.toSorted(() => Math.random() - Math.random()).map(
          (item, index) => (
            <li key={index}>{item.dream}</li>
          ),
        )}
      </ul>
    </div>
  );
}

const Interests = [
  { interest: "databases" },
  { interest: "education" },
  { interest: "internet homesteading" },
  { interest: "social networks" },
  { interest: "game theory / economic systems" },
  { interest: "game design" },
  { interest: "interfaces / tools" },
  { interest: "science fiction and fantasy" },
  { interest: "synthesizers" },
  { interest: "photography" },
  { interest: "basketball" },
  { interest: "distributed/decentralized/ecological/human-scale software" },
] as const;

const Dreams = [
  { dream: "open borders" },
  { dream: "global learning networks" },
  { dream: "abundant fusion energy" },
  { dream: "universal computational literacy" },
  {
    dream:
      "a babel fish that somehow also preserves linguistic heritage/diversity",
  },
  {
    dream: "ultra highspeed automated global transit",
  },
  {
    dream: "cheap, powerful, safe, and super cool looking electric vehicles",
  },
] as const;
