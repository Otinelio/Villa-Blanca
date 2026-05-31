import { createFileRoute } from "@tanstack/react-router";
import { QrOrderFlow } from "@/components/villa/QrOrderFlow";

export const Route = createFileRoute("/table/$tableNumber")({
  head: () => ({
    meta: [
      { title: "Commande Table · Villa Blanca" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TableQr,
});

function TableQr() {
  const { tableNumber } = Route.useParams();
  return <QrOrderFlow type="table" number={tableNumber} title="Commande sur place" subtitle={`Table ${tableNumber}`} />;
}
