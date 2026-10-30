import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center flex-1  bg-zinc-50 font-sans  text-yellow-200  dark:bg-black">
      <h1 className="p-4 ">Hey Fiasco!</h1>
      <Link href="/dashboard">
        <button className="bg-amber-200 text-black p-4 rounded-2xl ">
          take
        </button>
      </Link>
    </div>
  );
}
