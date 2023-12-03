"use client";

import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Uh-oh! Something Went Wrong.</h2>

        <p className="mb-4 text-base">
          It looks like there&apos;s a hiccup in our playground adventure. Our
          playground specialists are working diligently to fix the issue and
          ensure a smooth playtime experience for you. In the meantime, feel
          free to return to the home page or if you feel lucky try again and
          resume your exploration of Omaha&apos;s delightful play spaces with
          the Omaha Playground Collective.{" "}
          <span className="relative inline-block text-accent">
            Omaha Playground Collective
          </span>{" "}
          .
        </p>
        <button onClick={() => reset()}>Try again</button>
        <Link
          href="/"
          className="line-flex link link-primary items-center text-2xl font-bold"
        >
          Return Home
        </Link>
      </body>
    </html>
  );
}
