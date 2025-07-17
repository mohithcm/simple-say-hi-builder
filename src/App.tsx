<<<<<<< HEAD
=======

>>>>>>> 2ba868a (inital commit)
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
<<<<<<< HEAD
=======
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BookAppointment from "./pages/BookAppointment";
import DiagnosticCenters from "./pages/DiagnosticCenters";
import DiagnosticTests from "./pages/DiagnosticTests";
import AdminDashboard from "./pages/AdminDashboard";
>>>>>>> 2ba868a (inital commit)
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
<<<<<<< HEAD
=======
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments/book" element={<BookAppointment />} />
          <Route path="/centers" element={<DiagnosticCenters />} />
          <Route path="/tests" element={<DiagnosticTests />} />
          <Route path="/admin" element={<AdminDashboard />} />
>>>>>>> 2ba868a (inital commit)
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
