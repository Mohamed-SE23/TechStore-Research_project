import { providerProfile } from './GadgetsNav'

export const RenderGadgets = ({ isActive }) => {
    return (
        <>
            {providerProfile.map((r) => {
                if (isActive === r.name) {
                    return (
                        <div key={r.name}>
                            {r.element}
                        </div>
                    );
                } else {
                    return null;  // Ensure that only the active element is rendered
                }
            })}
        </>
    );
};
