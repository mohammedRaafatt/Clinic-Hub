import { DoctorCard, type Doctor } from "./doctor-card"

interface DoctorListProps {
  doctors: Doctor[]
}

export function DoctorList({ doctors }: DoctorListProps) {
  if (doctors.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 p-12">
        <div className="text-center">
          <p className="text-lg font-medium text-foreground">No doctors found</p>
          <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters or search criteria</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Showing {doctors.length} {doctors.length === 1 ? "doctor" : "doctors"}
      </p>
      <div className="grid gap-4">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}
