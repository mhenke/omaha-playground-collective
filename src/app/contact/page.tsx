import Link from "next/link";

export default function Contact() {
  return (
    <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
      <div className="flex flex-col sm:mx-auto sm:max-w-full md:max-w-full lg:max-w-full">
        {/* First Row */}
        <div className="breadcrumbs flex justify-center text-sm">
          <ul>
            <li>
              <Link className="link-hover link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            The quick, brown fox
            <br className="hidden md:block" />
            jumps over{" "}
            <span className="inline-block text-accent">a lazy dog</span>
          </h2>
          <a href="/" className="link inline-flex items-center">
            Learn more
          </a>
        </div>
        <div className="lg:w-1/2">
          <p className="bg-neutral-content text-base text-neutral">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
            perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque rem aperiam, eaque
            ipsa quae.
          </p>
        </div>
      </div>
    </div>
  );
}
