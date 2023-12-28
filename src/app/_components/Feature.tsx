import { type AgeRange, type Playground, type Surface } from "@prisma/client";
import { getFeatures } from "../_lib/GetFeatures";

type ExtendedPlayground = Playground & {
  ageRange: AgeRange | null; // Add ageRange property
  surface: Surface | null; // Add Surface property
};

interface FeatureProps {
  playground: ExtendedPlayground | null;
}

const Feature: React.FC<FeatureProps> = ({ playground }) => {
  if (!playground) {
    return null; // Return null if no playground or keys
  }

  const features = getFeatures(playground);

  const hasFeatures = Object.values(features).some(({ value }) => value);

  return (
    <div>
      {hasFeatures && (
        <div className="border-l-4 border-secondary bg-secondary-content shadow-sm">
          <div className="h-full rounded-r border border-l-0 p-5">
            <h6 className="mb-2 font-semibold leading-5">
              Playground Features
            </h6>
            <div className="grid space-y-3 sm:grid-cols-2 sm:gap-2 sm:space-y-0">
              {Object.entries(features).map(
                ([_key, { displayName, value }], index) => (
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
                      {typeof value === "boolean" && value
                        ? `${displayName}`
                        : `${displayName}: ${String(value)}`}
                    </li>
                  </ul>
                ),
              )}
            </div>
          </div>
        </div>
      )}
      {!hasFeatures && (
        <div className="border-l-4 border-secondary bg-secondary-content shadow-sm">
          <div className="h-full rounded-r border border-l-0 p-5">
            <h6 className="mb-2 font-semibold leading-5">Parks are great</h6>
            <div className="grid space-y-3 sm:grid-cols-2 sm:gap-2 sm:space-y-0">
              blurb about parks in general
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feature;
