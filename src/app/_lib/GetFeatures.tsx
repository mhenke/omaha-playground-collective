import { type AgeRange, type Playground, type Surface } from "@prisma/client";
import { useFilterStore } from "../_store/filterStore";

type ExtendedPlayground = Playground & {
  ageRange: AgeRange | null; // Add ageRange property
  surface: Surface | null; // Add Surface property
};

export function getFeatures(playground: ExtendedPlayground) {
  const { keys } = useFilterStore.getState();

  const features = Object.fromEntries(
    Object.entries(keys)
      .filter(
        ([key]) =>
          playground[key as keyof Playground] !== null &&
          playground[key as keyof Playground] !== undefined &&
          playground[key as keyof Playground] === true,
      )
      .map(([key, { displayName, color }]) => [
        key,
        { displayName, value: playground[key as keyof Playground], color },
      ]),
  );

  // Add ageRange value
  if (playground?.ageRange?.name) {
    features["ageRange" as keyof typeof features] = {
      displayName: "Age Range",
      value: playground.ageRange.name,
      color: "badge-neutral",
    };
  }

  // Add Surface value
  if (playground?.surface?.name) {
    features["surface" as keyof typeof features] = {
      displayName: "Surface",
      value: playground?.surface?.name,
      color: "badge-secondary",
    };
  }

  return features;
}
