"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { api } from "~/trpc/react";
import { useFilterStore } from "../_store/filterStore";

export const FilterForm = () => {
  const ageRange = api.ageRange.getAll.useQuery(undefined, {});
  const surface = api.surface.getAll.useQuery(undefined, {});

  const ageRangeValue = useFilterStore((state) => state.ageRange) ?? 1;
  const updateAgeRange = useFilterStore((state) => state.updateAgeRange);
  const router = usePathname();
  // if router starts with playground
  if (router.startsWith("/playground")) {
    return (
      <div className="flex flex-col sm:mx-auto sm:max-w-full md:max-w-full lg:max-w-full">
        {/* First Row */}

        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link className="link-hover link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-hover link" href="#">
                Current Playground
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  if (router !== "/") {
    null;
  }

  return (
    <div className="flex flex-col sm:mx-auto sm:max-w-full md:max-w-full lg:max-w-full">
      {/* First Row */}
      <div className="flex flex-row items-center justify-center space-x-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Surface
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {surface?.data?.map((surface) => (
              <li key={surface.id}>
                <a>{surface.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="join">
          {ageRange?.data?.map((age) => (
            <div className="tooltip" data-tip={age.description} key={age.id}>
              <input
                className="btn join-item"
                type="radio"
                name="options"
                aria-label={age.name}
                onChange={() => updateAgeRange(age.id)}
                value={age.id}
                checked={age.id === ageRangeValue}
              />
            </div>
          ))}
        </div>
      </div>
      {/* next div shoul be new row*/}
      <div className="flex flex-row items-center justify-center space-x-4">
        <div className="rating rating-md">
          <input type="radio" name="rating-9" className="rating-hidden" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
          <input type="radio" name="rating-9" className="mask mask-star-2" />
        </div>
      </div>

      {/* next div shoul be new row*/}
      <div className="flex flex-row items-center justify-center space-x-4">
        <label className="label flex cursor-pointer space-x-2">
          <span className="label-text">Shade</span>
          <input type="checkbox" className="toggle toggle-primary" />
        </label>
        <label className="label flex cursor-pointer space-x-2">
          <span className="label-text">Restrooms</span>
          <input type="checkbox" className="toggle toggle-primary" />
        </label>
        <label className="label flex cursor-pointer space-x-2">
          <span className="label-text">Accessible</span>
          <input type="checkbox" className="toggle toggle-primary" />
        </label>
      </div>
    </div>
  );
};
