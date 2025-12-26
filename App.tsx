import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Visitantes from "./pages/Visitantes";
import Funcionarios from "./pages/Funcionarios";
import Historico from "./pages/Historico";
import Relatorios from "./pages/Relatorios";
import Shipments from "./pages/Shipments";
import Drivers from "./pages/Drivers";
import Vehicles from "./pages/Vehicles";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/visitantes"} component={Visitantes} />
      <Route path={"/funcionarios"} component={Funcionarios} />
      <Route path={"/historico"} component={Historico} />
      <Route path={"/relatorios"} component={Relatorios} />
       <Route path={"/shipments"} component={Shipments} />
      <Route path={"/drivers"} component={Drivers} />
      <Route path={"/vehicles"} component={Vehicles} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
