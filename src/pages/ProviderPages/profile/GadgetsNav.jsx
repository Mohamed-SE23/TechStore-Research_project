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
    { name: "Computers",                  element: <Computers /> },
    { name: "Laptops",                    element: <Laptops /> },
    { name: "Audio",                      element: <Audio /> },
    { name: "Gaming",                     element: <Gaming /> },
    { name: "Photography",                element: <Cameras /> },
    { name: "USB Desks",                  element: <UsbDesks /> },
    { name: "Head Phones",                element: <HeadPhones /> },
    { name: "Tech Accessories",           element: <TechAccessories /> },
    { name: "Office & Productivity",      element: <Office /> },
]