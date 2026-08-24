import { orderTimeline } from "@/lib/content";

export function Timeline() {
  return (
    <ol className="timeline">
      {orderTimeline.map((item, index) => (
        <li key={item} className={index < 4 ? "done" : ""}>
          <span>{index < 4 ? "✓" : "○"}</span>
          {item}
        </li>
      ))}
    </ol>
  );
}

