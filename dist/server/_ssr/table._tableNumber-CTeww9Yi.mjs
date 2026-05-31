import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { Q as QrOrderFlow } from "./QrOrderFlow-DdeWqfPA.mjs";
import { R as Route$1 } from "./router-1vZrVOI4.mjs";
import "./menu-CS8OkNUP.mjs";
import "./ordersStore-DtcJp2kV.mjs";
import "../_libs/zustand.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function TableQr() {
  const {
    tableNumber
  } = Route$1.useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QrOrderFlow, { type: "table", number: tableNumber, title: "Commande sur place", subtitle: `Table ${tableNumber}` });
}
export {
  TableQr as component
};
