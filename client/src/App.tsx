import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

// Pages
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Events from "@/pages/Events";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/projects/:id" component={ProjectDetail} />
          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
