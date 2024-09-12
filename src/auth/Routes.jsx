import { Route, Routes } from 'react-router-dom';
import { AuthData } from './AuthWrapper';
import { nav } from '../components/structure/Navbar';
import { providerNav } from '../components/structure/Navbar';
import { providerProfile } from '../pages/ProviderPages/profile/GadgetsNav';
import Profile from '../pages/ProviderPages/profile/Profile';

// ******************** Rendering Routes depending on the navbar element ***************************

export const RenderRoutes = () => {
    const { user } = AuthData();

    return (
        <Routes>
            { nav.map((r, i) => {

                if (r.isPrivate && user.isAuthenticated && user.type === 'customer') {
                    return <Route key={i} path={r.path} element={r.element} />;
                } else if (!r.isPrivate) {
                    return <Route key={i} path={r.path} element={r.element} />;
                } else return false

            })
            }
            { providerNav.map((r, i) => {
                if (r.isPrivate && user.isAuthenticated && user.type === 'provider') {
                    return <Route key={i} path={r.path} element={r.element} />;
                }
            })
            }
            {/* Profile Route with nested gadgets */}
            <Route path={`/${user.name}/profile/`} element={<Profile />}>
                <Route path="gadgets/*" element={<GadgetsRoutes />} />
            </Route>
        </Routes>
    )
}

// ---------------------------- Profile Gadgets Routes ------------------------------------

export const GadgetsRoutes = () => {
    const { user } = AuthData();

    console.log("GadgetsRoutes: user.isAuthenticated =", user.isAuthenticated);
    console.log("GadgetsRoutes: user.type =", user.type);

    return (
        <Routes>
            { providerProfile.map((r, i) => {
                if (user.isAuthenticated && user.type === 'provider') {
                    return <Route key={i} path={r.path} element={r.element} />;         
                } else return false;
            })}
        </Routes>
    )
}