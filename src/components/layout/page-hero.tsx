import { Container } from "@/components/ui/container";

export function PageHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-black/8 bg-[#f6f8fb]">
      <Container className="py-12">
        <h1 className="text-3xl font-semibold tracking-tight text-aqs-navy sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-aqs-muted">
          {description}
        </p>
      </Container>
    </div>
  );
}
