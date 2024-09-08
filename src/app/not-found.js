import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col justify-center items-center p-4 gap-2">
        <p className="text-2xl md:text-3xl font-bold">Sorry, Page Not Found!</p>
        <p className="text-center text-base">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Perhaps
          you&apos;ve mistyped the URL? Be sure to check your spelling.
        </p>
        <img 
        src="/bucket/404.png" 
        className="w-full object-contain" 
        alt="not-found" 
        />
        <Link
          href={"/"}
          className="no-underline font-semibold text-emerald-950 py-2 px-3 text-lg bg-emerald-100 rounded-md outline outline-2 outline-emerald-200 active:scale-95 transition-all"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
