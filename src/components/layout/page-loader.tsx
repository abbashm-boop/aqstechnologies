import { Container } from "@/components/ui/container";

export function PageLoader() {
  return (
    <div className="min-h-[50vh] bg-[#f4f6f8]" aria-busy="true" aria-live="polite">
      <div className="border-b border-black/8 bg-[#f6f8fb]">
        <Container className="py-12">
          <div className="h-9 w-64 max-w-full animate-pulse rounded-lg bg-black/8" />
          <div className="mt-4 h-4 w-full max-w-xl animate-pulse rounded bg-black/6" />
          <div className="mt-2 h-4 w-80 max-w-full animate-pulse rounded bg-black/6" />
        </Container>
      </div>
      <Container className="py-16">
        <p className="mb-8 text-center text-sm font-medium text-aqs-muted">
          Loading…
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc((100%-1.25rem)/2)] md:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-3.75rem)/4)]"
            >
              <div className="aspect-square animate-pulse rounded-[36px] bg-white" />
              <div className="mx-auto mt-4 h-4 w-32 animate-pulse rounded bg-black/8" />
              <div className="mx-auto mt-2 h-3 w-24 animate-pulse rounded bg-black/6" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
