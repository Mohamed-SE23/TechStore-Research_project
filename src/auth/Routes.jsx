import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AuthData } from "./AuthWrapper";
import { nav } from "../components/structure/Navbar";
import { providerNav } from "../components/structure/Navbar";
import Loading from "../components/reusable/Loading";

// ******************** Rendering Routes depending on the navbar element ***************************

export const RenderRoutes = () => {
  const { user } = AuthData();
  const location = useLocation();
  const isCOwner = true;
  const isPOwner = true;

  const pageVariants = {
    initial: { opacity: 0, x: 300 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -300 },
  };

  const pageTransition = {
    type: "spring",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.key}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Suspense fallback={<Loading />}>
          <Routes location={location} key={location.pathname}>
            {nav.map((r, i) => {
              if (r.isPrivate && user.isAuthenticated) {
                return <Route key={i} path={r.path} element={r.element} />;
              } else if (!r.isPrivate) {
                return <Route key={i} path={r.path} element={r.element} />;
              } else return false;
            })}
            {providerNav.map((r, i) => {
              if (r.isPrivate && user.isAuthenticated) {
                if (isPOwner && r.name !== "Profile") {
                  return <Route key={i} path={r.path} element={r.element} />;
                } else if (r.name === "Profile") {
                  return <Route key={i} path={r.path} element={r.element} />;
                }
              }
            })}
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};
