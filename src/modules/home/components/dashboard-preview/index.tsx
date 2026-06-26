export type DashboardRoom = {
  room: string;
  guest: string;
  status: string;
  tone: string;
};

export type DashboardPreviewData = {
  title: string;
  subtitle: string;
  badge: string;
  calendarLabel: string;
  calendarStatus: string;
  rooms: DashboardRoom[];
  palette: string[];
};

const defaultPreview: DashboardPreviewData = {
  title: "Airvik live desk",
  subtitle: "Today, 18 June",
  badge: "72% occupied",
  calendarLabel: "Room calendar",
  calendarStatus: "Synced",
  rooms: [
    { room: "101", guest: "Patel", status: "Booked", tone: "bg-primary text-white" },
    { room: "102", guest: "Walk-in", status: "Hold", tone: "bg-primary-soft text-primary" },
    { room: "201", guest: "Clean", status: "Ready", tone: "bg-bg-muted text-text" },
    { room: "202", guest: "Due", status: "Payment", tone: "bg-text text-white" },
  ],
  palette: ["bg-primary", "bg-text", "bg-primary-soft", "bg-bg-muted"],
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;

type DashboardPreviewProps = {
  preview?: DashboardPreviewData;
};

export default function DashboardPreview({ preview = defaultPreview }: DashboardPreviewProps) {
  return (
    <div className="relative rounded-[28px] border border-border bg-bg p-3 shadow-[0_30px_90px_rgba(0,0,0,0.16)]">
      <div className="overflow-hidden rounded-[22px] border border-border bg-bg-soft">
        <div className="flex items-center justify-between gap-3 border-b border-border bg-bg px-4 py-3">
          <div>
            <p className="text-sm font-extrabold text-text">{preview.title}</p>
            <p className="text-xs font-semibold text-text-muted">{preview.subtitle}</p>
          </div>
          <div className="rounded-full bg-primary px-3 py-1 text-xs font-extrabold text-white">
            {preview.badge}
          </div>
        </div>

        <div className="grid gap-3 p-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl bg-bg p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-extrabold text-text">{preview.calendarLabel}</p>
              <p className="text-xs font-bold text-primary">{preview.calendarStatus}</p>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {days.map((day) => (
                <div key={day} className="text-center text-xs font-bold text-text-muted">
                  {day}
                </div>
              ))}
              {Array.from({ length: 20 }, (_, index) => {
                const color = preview.palette[index % preview.palette.length] ?? "bg-bg-muted";

                return (
                  <div key={index} className="h-12 rounded-xl border border-border bg-bg p-1">
                    <div className={`h-full rounded-lg ${color}`} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-3">
            {preview.rooms.map((room) => (
              <div key={`${room.room}-${room.status}`} className="flex items-center justify-between rounded-2xl bg-bg p-3">
                <div>
                  <p className="text-sm font-extrabold text-text">Room {room.room}</p>
                  <p className="text-xs font-semibold text-text-muted">{room.guest}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${room.tone}`}>
                  {room.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
