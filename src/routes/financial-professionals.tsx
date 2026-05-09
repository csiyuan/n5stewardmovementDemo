import { createFileRoute } from "@tanstack/react-router";
import { AudiencePage } from "@/components/site/AudiencePage";
import img from "@/assets/professional.jpg";

export const Route = createFileRoute("/financial-professionals")({
  component: () => (
    <AudiencePage
      eyebrow="Advisors · Planners · Wealth Managers"
      title="Integrate biblical wisdom into your practice."
      italicWord="biblical wisdom"
      intro="A community of finance professionals across Asia who serve clients with technical excellence, integrity, and a kingdom lens."
      image={img}
      imageAlt="Financial professional with client"
      promises={[
        { title: "Practitioner community", desc: "Peer learning with advisors, planners, and bankers who share your convictions." },
        { title: "Client-facing tools", desc: "Frameworks for stewardship-informed conversations on giving, legacy, and risk." },
        { title: "Continuing formation", desc: "Quarterly forums, retreats, and a deepening library of case studies." },
      ]}
      journey={[
        { step: "01", title: "Apply to join", desc: "A short application helps us understand your practice and convictions." },
        { step: "02", title: "Onboarding intensive", desc: "A two-day intensive grounds you in our frameworks and community." },
        { step: "03", title: "Practise & contribute", desc: "Bring stewardship into your work — and into the broader N5 community." },
      ]}
      ctaTitle="Faith-aligned. Professionally serious."
      ctaDesc="If your practice and your faith belong together, you'll find a home at N5."
    />
  ),
  head: () => ({ meta: [{ title: "Finance Professionals — N5 Stewardship Movement" }] }),
});
