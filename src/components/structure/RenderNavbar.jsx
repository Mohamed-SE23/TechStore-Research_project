import { Menu } from './NavRes';
import Brand from './brand';
import { Hamburger } from './Humburger';
import { AuthData } from '../../auth/AuthWrapper';
import { ProviderHum } from './ProviderHum';
import { ProviderMenu } from './ProviderNav';
// ******************** Render the Menu of the navbar ***********************

export const RenderMenu = () => {
    const { user } = AuthData();

    return (
        <>
            { user.type === 'provider' ?
            <div className='w-full bg-white border-b-[1.8px] flex justify-between items-center py-4 px-8 border-gray-300 sticky top-0 z-50'>
                <Brand />
                <ProviderMenu />
                <ProviderHum />
            </div>
         : 
            <div className='w-full bg-white border-b-[1.8px] flex justify-between items-center py-4 px-8 border-gray-300 sticky top-0 z-50'>
                <Brand />
                <Menu />
                <Hamburger />
            </div>
            }  
        </>  
    )
}