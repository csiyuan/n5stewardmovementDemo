import { createFileRoute } from "@tanstack/react-router";
import { AudiencePage } from "@/components/site/AudiencePage";
import img from "@/assets/leaders.jpg";

export const Route = createFileRoute("/faith-based-leaders")({
  component: () => (
    <AudiencePage
      eyebrow="Pastors · Church & Ministry Leaders"
      title="Equip your people in biblical stewardship."
      italicWord="biblical stewardship"
      intro="Partner with N5 to bring trusted, Scripture-rooted financial discipleship into your church or organisation — without adding more weight to your team."
      image={img}
      imageAlt="Pastor teaching a leadership group"
      promises={[
        { title: "Plug-and-play curriculum", desc: "Sermon series, small group guides, and teaching videos ready to use." },
        { title: "Trained facilitators", desc: "We help you raise up lay leaders who can run N5 groups in your church." },
        { title: "Ongoing partnership", desc: "Quarterly leader gatherings, coaching, and a regional community of practice." },
      ]}
      journey={[
        { step: "01", title: "Discovery call", desc: "A 30-minute conversation to understand your church's context and needs." },
        { step: "02", title: "Pilot programme", desc: "Run a 6-week pilot with one small group or ministry team." },
        { step: "03", title: "Scale across your community", desc: "Launch church-wide with sermons, small groups, and seasonal teaching." },
      ]}
      ctaTitle="Let's partner."
      ctaDesc="If you carry the conviction that your people need to be discipled in money, we'd love to walk alongside you."
    />
  ),
  head: () => ({ meta: [{ title: "Faith-Based Leaders — N5 Stewardship Movement" }] }),
});
