import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70svh] flex-col items-start justify-center gap-6 pt-28">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="text-4xl font-semibold md:text-5xl">This page doesn&apos;t exist.</h1>
      <p className="text-muted">The page you are looking for may have moved.</p>
      <Button href="/" variant="secondary" icon={<ArrowLeft className="size-4" />}>
        Back home
      </Button>
    </section>
  );
}
