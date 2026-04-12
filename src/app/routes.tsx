import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { AppLayout } from "./layouts/AppLayout";
import { HomePage } from "./pages/HomePage";
import { TherapistsPage } from "./pages/TherapistsPage";
import { PatientsPage } from "./pages/PatientsPage";
import { TherapistAgenda } from "./pages/therapist/TherapistAgenda";
import { TherapistBilling } from "./pages/therapist/TherapistBilling";
import { PatientConsultations } from "./pages/patient/PatientConsultations";
import { PatientPayments } from "./pages/patient/PatientPayments";
import { AdminOverview } from "./pages/admin/AdminOverview";
import { AdminTherapists } from "./pages/admin/AdminTherapists";
import { AdminPatients } from "./pages/admin/AdminPatients";
import { AdminTherapistDetail } from "./pages/admin/AdminTherapistDetail";
import { AdminPatientDetail } from "./pages/admin/AdminPatientDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "terapeutas", Component: TherapistsPage },
      { path: "pacientes", Component: PatientsPage },
    ],
  },
  {
    path: "/app",
    Component: AppLayout,
    children: [
      { path: "terapeuta/agenda", Component: TherapistAgenda },
      { path: "terapeuta/cobrancas", Component: TherapistBilling },
      { path: "paciente/consultas", Component: PatientConsultations },
      { path: "paciente/pagamentos", Component: PatientPayments },
      { path: "admin", Component: AdminOverview },
      { path: "admin/terapeutas", Component: AdminTherapists },
      { path: "admin/pacientes", Component: AdminPatients },
      { path: "admin/terapeutas/:id", Component: AdminTherapistDetail },
      { path: "admin/pacientes/:id", Component: AdminPatientDetail },
    ],
  },
]);
