import { createFileRoute } from "@tanstack/react-router";
import { AudiencePage } from "@/components/site/AudiencePage";
import img from "@/assets/group-table.jpg";

export const Route = createFileRoute("/church-community")({
  component: () => (
    <AudiencePage
      eyebrow="Individuals · Families · Groups"
      title="Steward your finances God's way."
      italicWord="God's way"
      intro="Whether you are walking this journey alone, with your spouse, or with a small community — N5 will meet you where you are and walk with you."
      image={img}
      imageAlt="Small group around a table"
      promises={[
        { title: "Honest conversation", desc: "Spaces where you can talk about money without shame, fear, or comparison." },
        { title: "Biblical clarity", desc: "Grounded teaching that cuts through noise and re-centres your heart on Christ." },
        { title: "A real community", desc: "Not a course you finish. A community you belong to for the long road." },
      ]}
      journey={[
        { step: "01", title: "Begin with Foundations", desc: "Take our 6-week introductory course, on your own or with a friend." },
        { step: "02", title: "Join a group", desc: "Find an N5 group near you, or start one with our group leader's kit." },
        { step: "03", title: "Live it out", desc: "Apply what you learn at home, at work, and in your church community." },
      ]}
      ctaTitle="Take the first step."
      ctaDesc="The journey of biblical stewardship begins with one honest conversation. We'll walk it with you."
    />
  ),
  head: () => ({ meta: [{ title: "Individuals & Families — N5 Stewardship Movement" }] }),
});
