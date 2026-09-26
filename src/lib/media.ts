import type { ProjectImage } from "@/types/content";

const MOBILE_SHOT_MAX_RATIO = 0.62;

export function aspectRatio(image: ProjectImage): number {
  return image.width / image.height;
}

export function isMobileShot(image: ProjectImage): boolean {
  return aspectRatio(image) < MOBILE_SHOT_MAX_RATIO;
}

export function fitToViewport(image: ProjectImage, viewportHeight: string): string {
  return `min(100%, calc(${viewportHeight} * ${aspectRatio(image).toFixed(3)}))`;
}
