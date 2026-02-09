export type Membership = "out" | "Basic" | "Standard" | "Full";
export type HistoryType = "summary" | "plan" | "note";

export type Clinic = {
  id: string;
  name: string;
  location: string;
};

export type ExternalHistoryItem = {
  id: string;
  type: HistoryType;
  clinicName: string;
  date: string;
  content: string;
  visibilityRequired: Exclude<Membership, "out">;
};

export type Patient = {
  id: string;
  name: string;
  dob: string;
  localHistory: string[];
  estimatedMinutesSaved: number;
  externalHistory: ExternalHistoryItem[];
};

export const clinics: Clinic[] = [
  { id: "c-1", name: "Northbank Family Clinic", location: "Leeds" },
  { id: "c-2", name: "Riverside Community Health", location: "York" },
  { id: "c-3", name: "Beacon Primary Care", location: "Sheffield" }
];

export const patients: Patient[] = [
  {
    id: "p-1",
    name: "Aiden Walker",
    dob: "1988-03-17",
    estimatedMinutesSaved: 8,
    localHistory: [
      "Annual check-up completed. Blood pressure stable.",
      "Lifestyle advice provided for improved sleep quality."
    ],
    externalHistory: []
  },
  {
    id: "p-2",
    name: "Sarah Thompson",
    dob: "1979-11-02",
    estimatedMinutesSaved: 12,
    localHistory: [
      "Follow-up booked for recurring fatigue.",
      "Vitamin D supplementation discussed."
    ],
    externalHistory: [
      {
        id: "h-201",
        type: "summary",
        clinicName: "Riverside Community Health",
        date: "2025-10-10",
        content:
          "Seen for dizziness episode. ECG normal, advised hydration and medication review.",
        visibilityRequired: "Basic"
      }
    ]
  },
  {
    id: "p-3",
    name: "Maria Lopez",
    dob: "1969-06-28",
    estimatedMinutesSaved: 15,
    localHistory: [
      "Diabetes annual review complete.",
      "Foot care follow-up scheduled in 3 months."
    ],
    externalHistory: [
      {
        id: "h-301",
        type: "summary",
        clinicName: "Beacon Primary Care",
        date: "2025-08-21",
        content:
          "Acute lower back pain triage completed. Mobility reduced but improving with conservative care.",
        visibilityRequired: "Basic"
      },
      {
        id: "h-302",
        type: "plan",
        clinicName: "Beacon Primary Care",
        date: "2025-08-22",
        content:
          "6-week physiotherapy plan initiated with weekly reassessment milestones.",
        visibilityRequired: "Standard"
      },
      {
        id: "h-303",
        type: "note",
        clinicName: "Beacon Primary Care",
        date: "2025-08-29",
        content:
          "Clinician note: patient adherence high; pain score dropped from 7/10 to 4/10 after week one.",
        visibilityRequired: "Full"
      }
    ]
  }
];
