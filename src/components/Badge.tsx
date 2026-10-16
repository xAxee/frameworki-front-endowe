import type { ReactNode } from "react";
import styles from "./Badge.module.css";

type BadgeProps = {
  tone?: "neutral" | "success" | "warning";
  children: ReactNode;
};

// `children` - treść przekazana między znacznikami <Badge>...</Badge>
export default function Badge({ tone = "neutral", children }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
