"use client";

import { api } from "~/trpc/react";
import { useFilterStore } from "../_store/filterStore";

export const FilterForm = () => {
  const ageRange = api.ageRange.getAll.useQuery(undefined, {});
  const surface = api.surface.getAll.useQuery(undefined, {});

  const ageRangeValue = useFilterStore((state) => state.ageRange);
  const updateAgeRange = useFilterStore((state) => state.updateAgeRange);

  return (
    <div className="grid gap-8 sm:mx-auto sm:max-w-sm md:max-w-full md:grid-cols-2 lg:max-w-full lg:grid-cols-3">
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
      {/* next div shoul be new row*/}
      <div className="">
        <label className="label cursor-pointer">
          <span className="label-text">Accessible</span>
          <input type="checkbox" className="toggle toggle-primary" />
        </label>
      </div>
    </div>
  );
};
