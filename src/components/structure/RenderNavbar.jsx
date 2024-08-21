import { Menu } from './NavRes';
import Brand from './brand';
import { Hamburger } from './Humburger';
// ******************** Render the Menu of the navbar ***********************

export const RenderMenu = () => {

    return (
        <div className='w-full bg-white border-b-[1.8px] flex justify-between items-center py-4 px-8 border-gray-300 sticky top-0 z-50'>
            <Brand />
            <Menu />
            <Hamburger />
        </div>
    
    )
}