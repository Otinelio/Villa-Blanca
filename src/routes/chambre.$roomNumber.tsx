import { createFileRoute } from "@tanstack/react-router";
import { QrOrderFlow } from "@/components/villa/QrOrderFlow";

export const Route = createFileRoute("/chambre/$roomNumber")({
  head: () => ({
    meta: [
      { title: "Room Service · Villa Blanca" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: RoomQr,
});

function RoomQr() {
  const { roomNumber } = Route.useParams();
  return (
    <QrOrderFlow
      type="room"
      number={roomNumber}
      title="Service en chambre"
      subtitle={`Chambre ${roomNumber}`}
      withDelivery
    />
  );
}
