import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function GlassNavbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isPublicRoute = !location.pathname.startsWith("/app");

  if (!isPublicRoute) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      <div
        className={`rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border border-black/5"
            : "bg-white/60 backdrop-blur-md shadow-md border border-black/5"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg">
            Tempo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/terapeutas"
              className="text-sm hover:text-primary/60 transition-colors"
            >
              Para Terapeutas
            </Link>
            <Link
              to="/pacientes"
              className="text-sm hover:text-primary/60 transition-colors"
            >
              Para Pacientes
            </Link>
            <Link
              to="/app/terapeuta/agenda"
              className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Acessar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-black/5 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <Link
                to="/terapeutas"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm hover:text-primary/60 transition-colors"
              >
                Para Terapeutas
              </Link>
              <Link
                to="/pacientes"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm hover:text-primary/60 transition-colors"
              >
                Para Pacientes
              </Link>
              <Link
                to="/app/terapeuta/agenda"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors text-center"
              >
                Acessar
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
