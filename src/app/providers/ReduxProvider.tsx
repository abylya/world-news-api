import { store } from "@/shared/lib/store";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
interface I_props {
  children: ReactNode;
}
export default function ReduxProvider({ children }: I_props) {
  return <Provider store={store}>{children}</Provider>;
}
