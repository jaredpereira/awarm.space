import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <p>hello</p>

      <p>
        i work on <a href="https://hyperlink.academy">hyperlink.academy</a>
      </p>

      <p>
        you can see some things i&apos;ve liked on{" "}
        <Link href="/shelf"> my shelf</Link> and a list of things i&apos;m{" "}
        <Link href="/interests">interested</Link> in.
      </p>

      <p>
        i live in brooklyn, ny and you can reach me there or at{" "}
        <code>jared(at)awarm.space</code> or{" "}
        <a href="https://twitter.com/jrdprr">@jrdprr</a> on twitter.
      </p>
    </div>
  );
}
