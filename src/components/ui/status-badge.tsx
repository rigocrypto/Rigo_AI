import type { ProjectStatus } from "@/types/project";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return <span className="status-badge"><span aria-hidden="true" />{status}</span>;
}
