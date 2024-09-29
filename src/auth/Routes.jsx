import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "../components/structure/Navbar";
import { providerNav } from "../components/structure/Navbar";
import Loading from "../components/reusable/Loading";
import { selectCurrentUser } from "../app/UserInfo";

// ******************** Rendering Routes depending on the navbar element ***************************

export const RenderRoutes = () => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();
  
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
              if (r.isPrivate && user.verified && user.cOwner) {
                return <Route key={i} path={r.path} element={r.element} />;
              } else if (!r.isPrivate) {
                return <Route key={i} path={r.path} element={r.element} />;
              } else return false;
            })}
            {providerNav.map((r, i) => {
              if (r.isPrivate && user.verified) {
                if (user.pOwner && r.name !== "Profile") {
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
