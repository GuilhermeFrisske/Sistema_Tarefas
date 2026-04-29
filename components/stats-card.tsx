import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  value: number;
  label: string;
  icon: React.ReactNode;
}

export function StatsCard({ value, label, icon }: StatsCardProps) {
  return (
    <Card className="border-0 bg-secondary/50">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}
