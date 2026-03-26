import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SHARED_COLOR_CLASSES } from "@/const/theme";

type GridTypeCardProps = {
  children: ReactNode;
  className?: string;
};

function GridTypeCard({ children, className }: GridTypeCardProps) {
  return (
    <div
      className={cn(
        SHARED_COLOR_CLASSES.softGlassCard,
        className
      )}
    >
      {children}
    </div>
  );
}

export default GridTypeCard;
