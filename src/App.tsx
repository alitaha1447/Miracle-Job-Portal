import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import JobDashboard from "./pages/Dashboard/JobDashboard";
import ParticipantDashboard from "./pages/Dashboard/ParticipantDashboard";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import CollegeDashboard from "./pages/Dashboard/CollegeDashboard";
import VerificationDashboard from "./pages/Dashboard/VerificationDashboard";
import PrivateLayout from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import RegistrationForm from "./pages/Forms/RegistrationForm";
import CollegeRegistrationForm from "./pages/Forms/CollegeRegistrationForm";
import CompanyRegistrationForm from "./pages/Forms/CompanyRegistrationForm";

import { useAppSelector } from "./app/store";

const ROLE_HOME: Record<string, string> = {
  Student: "/student-dashboard",
  Company: "/",
  College: "/college-dashboard"
};

function RequireRole({ role }: { role: string }) {
  const { user } = useAppSelector((s) => s.auth);
  // not logged in → send to signin
  if (!user) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }
  // logged in but wrong role → bounce to their own home
  if (user.userType !== role) {
    return <Navigate to={ROLE_HOME[user.userType]} replace />;
  }
  return <Outlet />;
}



export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<PrivateLayout />}>

            <Route element={<AppLayout />}>
              <Route index path="/home" element={<Home />} />
              <Route element={<RequireRole role='Company' />}>
                <Route path="/" element={<JobDashboard />} />
              </Route>
              {/* STUDENT-ONLY ROUTES */}
              <Route element={<RequireRole role="Student" />}>
                <Route path="/student-dashboard" element={<StudentDashboard />} />
              </Route>
              <Route path="/participants-list" element={<ParticipantDashboard />} />
              {/* COLLEGE-ONLY ROUTES */}
              <Route element={<RequireRole role="College" />}>
                <Route path="/college-dashboard" element={<CollegeDashboard />} />
              </Route>
              <Route path="/verification-dashboard" element={<VerificationDashboard />} />
              {/* <Route path="/student-dashboard" element={<StudentDashboard />} /> */}
              {/* <Route path="/college-dashboard" element={<CollegeDashboard />} /> */}

              {/* Others Page */}
              <Route path="/profile" element={<UserProfiles />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/blank" element={<Blank />} />

              {/* Forms */}
              <Route path="/form-elements" element={<FormElements />} />
              <Route path="/registration-form" element={<RegistrationForm />} />

              <Route path="/college-form" element={<CollegeRegistrationForm />} />
              <Route path="/company-form" element={<CompanyRegistrationForm />} />

              {/* Tables */}
              <Route path="/basic-tables" element={<BasicTables />} />

              {/* Ui Elements */}
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/avatars" element={<Avatars />} />
              <Route path="/badge" element={<Badges />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/images" element={<Images />} />
              <Route path="/videos" element={<Videos />} />

              {/* Charts */}
              <Route path="/line-chart" element={<LineChart />} />
              <Route path="/bar-chart" element={<BarChart />} />
            </Route>
          </Route>

          {/* Auth Layout */}
          <Route element={<PublicRoute />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
          {/* Registration Form */}
          <Route path="/outside-registration-form" element={<RegistrationForm />} />
          <Route path="/outside-college-form" element={<CollegeRegistrationForm />} />
          <Route path="/outside-company-form" element={<CompanyRegistrationForm />} />
        </Routes>
      </Router>
    </>
  );
}
