import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { AnimatePresence, motion } from 'framer-motion';

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 12, filter: 'blur(6px)' },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: -8,
      filter: 'blur(6px)',
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="flex h-screen bg-[--background] overflow-hidden">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* IMPORTANT: allow scroll here */}
        <main className="flex-1 overflow-y-auto">
          <div
            className={`transition-all duration-300 ${
              sidebarOpen ? 'md:ml-60 lg:ml-60' : 'md:ml-16 lg:ml-16'
            } pt-20 px-6 pb-6 min-h-full`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}