import Audio from "./Gadgets/Audio";
import Cameras from "./Gadgets/Cameras";
import Computers from "./Gadgets/Computers";
import Gaming from "./Gadgets/Gaming";
import HeadPhones from "./Gadgets/HeadPhones";
import Laptops from "./Gadgets/Laptops";
import Office from "./Gadgets/Office";
import TechAccessories from "./Gadgets/TechAccessories";
import UsbDesks from "./Gadgets/UsbDesks";


export const providerProfile = [
    { path: "/computers",           menuPath: "/profile/gadgets/computers",                       name: "Computers",                  element: <Computers /> },
    { path: "/laptops",             menuPath: "/profile/gadgets/laptops",                         name: "Laptops",                    element: <Laptops /> },
    { path: "/cameras",             menuPath: "/profile/gadgets/cameras",                         name: "Cameras",                    element: <Cameras /> },
    { path: "/audio",               menuPath: "/profile/gadgets/audio",                           name: "Audio",                      element: <Audio /> },
    { path: "/gaming",              menuPath: "/profile/gadgets/gaming",                          name: "Gaming",                     element: <Gaming /> },
    { path: "/usbDesks",            menuPath: "/profile/gadgets/usbDesks",                        name: "USB Desks",                  element: <UsbDesks /> },
    { path: "/headPhones",          menuPath: "/profile/gadgets/headPhones",                      name: "Head Phones",                element: <HeadPhones /> },
    { path: "/techAccessories",     menuPath: "/profile/gadgets/techAccessories",                 name: "Tech Accessories",           element: <TechAccessories /> },
    { path: "/office",              menuPath: "/profile/gadgets/office",                          name: "Office & Productivity",      element: <Office /> },
]