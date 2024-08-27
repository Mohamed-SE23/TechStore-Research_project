import { Route, Routes } from 'react-router-dom';
import { AuthData } from './AuthWrapper';
import { nav } from '../components/structure/Navbar';
import { providerNav } from '../components/structure/Navbar';

// ******************** Rendering Routes depending on the navbar element ***************************

export const RenderRoutes = () => {
    const { user } = AuthData();

    return (
        <Routes>
            { nav.map((r, i) => {

                if (r.isPrivate && user.isAuthenticated) {
                    return <Route key={i} path={r.path} element={r.element} />;
                } else if (!r.isPrivate) {
                    return <Route key={i} path={r.path} element={r.element} />;
                } else return false

            })
            }
            { providerNav.map((r, i) => {
                if (r.isPrivate && user.isAuthenticated) {
                    return <Route key={i} path={r.path} element={r.element} />;
                }
            })
            }
        </Routes>
    )
}