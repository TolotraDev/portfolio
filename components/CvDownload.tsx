import { Download } from "lucide-react";
import { cv } from "@/lib/data";

export function CvDownload({ className = "" }: { className?: string }) {
  return (
    <a
      href={cv.href}
      download
      className={`inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent ${className}`}
    >
      <Download className="h-4 w-4" strokeWidth={2} />
      {cv.label}
    </a>
  );
}
