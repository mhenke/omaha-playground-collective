import { type Playground } from "@prisma/client";
import { useFilterStore } from "../_store/filterStore";

interface FeatureProps {
  playground: Playground | null;
}

const Feature: React.FC<FeatureProps> = ({ playground }) => {
  const { keys } = useFilterStore.getState();

  if (!playground || !keys) {
    return null; // Return null if no playground or keys
  }

  const features = Object.fromEntries(
    Object.entries(keys)
      .filter(
        ([key, { showOnFilter }]) =>
          showOnFilter &&
          playground[key as keyof Playground] !== null &&
          playground[key as keyof Playground] !== undefined,
      )
      .map(([key, { displayName }]) => [
        key,
        { displayName, value: playground[key as keyof Playground] },
      ]),
  );

  // Add ageRange value
  if (playground.ageRange && playground.ageRange.name) {
    features["ageRange" as keyof typeof features] = {
      displayName: "Age Range",
      value: playground.ageRange.name,
    };
  }

  // Add Surface value
  if (playground.Surface && playground.Surface.name) {
    features["Surface" as keyof typeof features] = {
      displayName: "Surface",
      value: playground.Surface.name,
    };
  }

  const hasFeatures = Object.values(features).some(({ value }) => value);

  return (
    <div>
      {hasFeatures && (
        <div className="mt-4 flex flex-col space-y-6 bg-neutral-content p-4 shadow-lg">
          <p className="text-sm font-bold uppercase tracking-widest text-neutral">
            Features
          </p>
          <div className="grid space-y-3 sm:grid-cols-2 sm:gap-2 sm:space-y-0">
            {Object.entries(features).map(
              ([key, { displayName, value }], index) => (
                <ul key={index} className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="mt-px h-5 w-5 text-accent"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>{" "}
                    {displayName}: {value}
                  </li>
                </ul>
              ),
            )}
          </div>
        </div>
      )}
      {!hasFeatures && (
        <div className="mt-4 flex flex-col space-y-6 bg-neutral-content p-4 shadow-lg">
          <p className="text-sm font-bold uppercase tracking-widest text-neutral">
            Parks are great
          </p>
          <div className="grid space-y-3 sm:grid-cols-2 sm:gap-2 sm:space-y-0">
            blurb about parks in general
          </div>
        </div>
      )}
    </div>
  );
};

export default Feature;
