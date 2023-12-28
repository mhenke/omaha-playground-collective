"use client";

import { api } from "~/trpc/react";
import { useFilterStore, type IncludeKey } from "../_store/filterStore";

export const FilterForm = () => {
  const ageRange = api.ageRange.getAll.useQuery(undefined, {});
  const surface = api.surface.getAll.useQuery(undefined, {});

  const includeKeys = useFilterStore((state) => {
    const keys: Record<string, IncludeKey> = state.keys;
    const filteredKeys: Record<string, IncludeKey> = Object.entries(keys)
      .filter(([_key, value]: [string, IncludeKey]) => value.showOnFilter)
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    return filteredKeys;
  });

  const ageRangeValue: number = useFilterStore((state) => state.ageRange) ?? 1;
  const updateAgeRange = useFilterStore((state) => state.updateAgeRange);
  const updateSurface = useFilterStore((state) => state.updateSurface);
  const updateKeys = useFilterStore((state) => state.updateKey);

  const selectedValue = "allSurfaces";

  return (
    <div className="flex flex-col sm:mx-auto sm:max-w-full md:max-w-full lg:max-w-full">
      {/* First Row */}
      <div className="flex flex-row items-center justify-center space-x-4">
        <div>
          <select
            className="select select-primary w-full max-w-xs"
            onChange={(e) => updateSurface(Number(e.target.value))}
          >
            <option value={selectedValue}>All Surfaces</option>
            {surface?.data?.map((surface) => (
              <option key={surface.id} value={surface.id}>
                {surface.name}
              </option>
            ))}
          </select>
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
        {Object.keys(includeKeys).map((key) => {
          const includeKey: IncludeKey | undefined = includeKeys[key];
          if (includeKey) {
            return (
              <label key={key} className="label flex cursor-pointer space-x-2">
                <span className="label-text">{includeKey.displayName}</span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={includeKey.value}
                  onChange={() => updateKeys(key, !includeKey.value)}
                />
              </label>
            );
          }
        })}
      </div>
    </div>
  );
};
