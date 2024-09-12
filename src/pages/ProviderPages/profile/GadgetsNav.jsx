import Audio from "./Gadgets/Audio";
import Cameras from "./Gadgets/Cameras";
import Computers from "./Gadgets/Computers";
import Gaming from "./Gadgets/Gaming";
import HeadPhones from "./Gadgets/HeadPhones";
import Laptops from "./Gadgets/Laptops";
import Office from "./Gadgets/Office";
import TechAccessories from "./Gadgets/TechAccessories";
import UsbDesks from "./Gadgets/UsbDesks";

const user = { name: 'userName'}


export const providerProfile = [
    { path: "/computers",           menuPath: `/${user.name}/profile/gadgets/computers`,                       name: "Computers",                  element: <Computers /> },
    { path: "/laptops",             menuPath: `/${user.name}/profile/gadgets/laptops`,                         name: "Laptops",                    element: <Laptops /> },
    { path: "/audio",               menuPath: `/${user.name}/profile/gadgets/audio`,                           name: "Audio",                      element: <Audio /> },
    { path: "/gaming",              menuPath: `/${user.name}/profile/gadgets/gaming`,                          name: "Gaming",                     element: <Gaming /> },
    { path: "/photography",         menuPath: `/${user.name}/profile/gadgets/photography`,                     name: "Photography",                element: <Cameras /> },
    { path: "/usbDesks",            menuPath: `/${user.name}/profile/gadgets/usbDesks`,                        name: "USB Desks",                  element: <UsbDesks /> },
    { path: "/headPhones",          menuPath: `/${user.name}/profile/gadgets/headPhones`,                      name: "Head Phones",                element: <HeadPhones /> },
    { path: "/techAccessories",     menuPath: `/${user.name}/profile/gadgets/techAccessories`,                 name: "Tech Accessories",           element: <TechAccessories /> },
    { path: "/office",              menuPath: `/${user.name}/profile/gadgets/office`,                          name: "Office & Productivity",      element: <Office /> },
]