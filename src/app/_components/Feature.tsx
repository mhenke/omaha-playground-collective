import { type Playground } from "@prisma/client";

interface FeatureProps {
  playground: Playground | null;
}

const Feature: React.FC<FeatureProps> = ({ playground }) => {
  const includeKeys = [
    "restrooms",
    "picnicAreas",
    "benches",
    "shade",
    "accessibleEquip",
    "adaCompliance",
  ];

  let features = {};

  if (playground) {
    features = Object.fromEntries(
      Object.entries(playground)
        .filter(([key]) => includeKeys.includes(key))
        .map(([key, value]) => [key, value]),
    );
  }

  return (
    <div>
      {Object.values(features).some((value) => value) && (
        <div className="mt-4 flex flex-col space-y-6 bg-neutral-content p-4 shadow-lg">
          <p className="text-sm font-bold uppercase tracking-widest text-neutral">
            Features
          </p>
          <div className="grid space-y-3 sm:grid-cols-2 sm:gap-2 sm:space-y-0">
            {Object.entries(features).map(([key, value], index) => {
              if (value) {
                return (
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
                      {key}{" "}
                      {/* Optional chaining to handle null or undefined */}
                    </li>
                  </ul>
                );
              }
              return null; // return null when value is falsy
            })}
          </div>
        </div>
      )}
      {!Object.values(features).some((value) => value) && playground && (
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
