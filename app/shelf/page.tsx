"use client";
import { useState } from "react";

export default function ShelfPage() {
  let [filter, setFilter] = useState<
    null | (typeof Shelf)[number]["mediaType"]
  >(null);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        {Array.from(mediaTypes).map((mediaType) => (
          <button
            className={`border p-1 ${
              mediaType === filter ? "bg-gray-200" : ""
            }`}
            key={mediaType}
            onClick={() => {
              if (filter === mediaType) {
                setFilter(null);
              } else setFilter(mediaType);
            }}
          >
            {mediaType}
          </button>
        ))}
      </div>
      <ul className="flex flex-col gap-2">
        {Shelf.filter((f) => !filter || f.mediaType === filter)
          .toSorted((a, b) => a.title.localeCompare(b.title))
          .map((item, index) => (
            <li key={index}>
              {item.title} - {item.creator}
            </li>
          ))}
      </ul>
    </div>
  );
}

const Shelf = [
  {
    title: "One Piece",
    creator: "Eiichiro Oda",
    mediaType: "print",
  },
  {
    title: "Keep Your Hands off Eizouken",
    creator: "Sumito Oowara",
    mediaType: "video",
  },
  {
    title: "The Count of Monte Cristo",
    creator: "Alexandre Dumas",
    mediaType: "print",
  },
  {
    title: "The Lord of the Rings",
    creator: "J.R.R. Tolkien",
    mediaType: "print",
  },
  { title: "Ender's Game", creator: "Orson Scott Card", mediaType: "print" },
  {
    title: "A Wizard of Earthsea",
    creator: "Ursula K. Le Guin",
    mediaType: "print",
  },
  { title: "Anathem", creator: "Neal Stephenson", mediaType: "print" },
  { title: "Terra Ignota", creator: "Ada Palmer", mediaType: "print" },
  { title: "Invisible Cities", creator: "Italo Calvino", mediaType: "print" },
  {
    title: "When We Cease to Understand the World",
    creator: "Benjamín Labatut",
    mediaType: "print",
  },
  {
    title: "A Hitchiker's Guide to the Galaxy",
    creator: "Douglas Adams",
    mediaType: "print",
  },
  { title: "Mindstorms", creator: "Seymour Papert", mediaType: "print" },
  {
    title: "Democracy and Education",
    creator: "John Dewey",
    mediaType: "print",
  },
  { title: "Deschooling Society", creator: "Ivan Illich", mediaType: "print" },
  {
    title: "The Timeless Way of Building",
    creator: "Christopher Alexander",
    mediaType: "print",
  },
  {
    title: "The Little Prince",
    creator: "Antoine de Saint-Exupéry",
    mediaType: "print",
  },
  {
    title: "Harry Potter and the Methods of Rationality",
    creator: "Eliezer Yudkowsky",
    mediaType: "print",
  },
  { title: "Nurture", creator: "Porter Robinson", mediaType: "audio" },
  { title: "Immunity", creator: "Jon Hopkins", mediaType: "audio" },
  {
    title: "In the Aeroplane Over the Sea",
    creator: "Neutral Milk Hotel",
    mediaType: "audio",
  },
  {
    title: "The book about my idle plot on a vague anxiety",
    creator: "toe",
    mediaType: "audio",
  },
  { title: "CLPPNG", creator: "clipping.", mediaType: "audio" },
  {
    title: "Song Machine: Season One",
    creator: "Gorillaz",
    mediaType: "audio",
  },
  { title: "Charli", creator: "Charli XCX", mediaType: "audio" },
  { title: "Run the Jewels 2", creator: "Run the Jewels", mediaType: "audio" },
  { title: "Hilda", creator: "Luke Pearson", mediaType: "video" },
  { title: "Adventure Time", creator: "Pendleton Ward", mediaType: "video" },
  {
    title: "Hard-Boiled Wonderland and the End of the World",
    creator: "Haruki Murakami",
    mediaType: "print",
  },
  {
    title: "The Witness",
    creator: "Jonathan Blow",
    mediaType: "game",
  },
  {
    title: "Spelunky",
    creator: "Derek Yu",
    mediaType: "game",
  },
  {
    title: "Deus Ex",
    creator: "Warren Spector",
    mediaType: "game",
  },
  {
    title: "Journey",
    creator: "thatgamecompany",
    mediaType: "game",
  },
  {
    title: "Minecraft",
    creator: "notch",
    mediaType: "game",
  },
  {
    title: "Ponyo",
    creator: "Hayao Miyazaki",
    mediaType: "video",
  },
  {
    title: "Buttercup Festival",
    creator: "David Troupes",
    mediaType: "print",
  },
  {
    title: "Primitive Technology",
    creator: "John Plant",
    mediaType: "video",
  },
  {
    title: "Debt: The First 5000 Years",
    creator: "David Graeber",
    mediaType: "print",
  },
  {
    title: "The Secret of Psalm 46",
    creator: "Brian Moriarty",
    mediaType: "video",
  },
  {
    title: "norns",
    creator: "monome",
    mediaType: "hardware",
  },
] as const;

let mediaTypes = new Set(Shelf.map((item) => item.mediaType));
