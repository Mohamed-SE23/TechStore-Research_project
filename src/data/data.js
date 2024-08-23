import enhance from "../assets/enhance.png";
import busniss from "../assets/busniss.png";
import vector from "../assets/Vector.png";

import access from "../assets/access.png";
import rating from "../assets/rating.png";
import reconnect from "../assets/reconnect.png";
import interacte from "../assets/interacte.png";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const landingapi = {
  aims: [
      { 
        img: vector,
        title: "Empower Displaced Tech Businesses",
        description: "Rebuild and strengthen the business presence of Sudanese tech store owners by providing a digital platform where they can easily showcase their products, connect with  customers, and regain their market foothold in new environments.",
      },
      { 
        img: enhance,
        title: "Enhance Customer-Business Relationships",
        description: "Foster a community where users and business owners can interact, share feedback, and build lasting relationships through features like reviews, personalized recommendations, and direct communication channels, ultimately leading to increased trust and customer loyalty.",
      },
      { 
        img: busniss,
        title: "Support Sustainable Business Growth",
        description: "Create a platform that not only helps businesses reconnect with their customer base but also supports their long-term growth by offering tools for managing inventory, analyzing customer behavior, and optimizing their online presence.",
      }
  ],
  features: {
    users: [
        {
          img: access,
          title: "Access to a Wide Range of Tech Gadgets",
          description: "Easily discover tech gadgets from trusted stores, regardless of your location, with detailed product information at your fingertips."
        },
        {
          img: interacte,
          title: "Flexible Interaction Options",
          description: "Use the platform as a guest for quick searches, or register for a more personalized experience."
        },
    ],
    business: [
      {
        img: reconnect,
        title: "Reconnect with Your Customer Base",
        description: "Reestablish your brand and reconnect with customers, even if you've relocated, by showcasing your products on a platform designed to bridge the gap caused by the conflict."
      },
      {
        img: rating,
        title: "Customer Feedback and Improvement",
        description: "Use the dedicated reviews section to gather feedback from customers, helping you improve your offerings and build trust with potential buyers."
      },
    ]
  }
};

const heroapi = {
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};


const footerAPI = {
  titles: [ {title: "About Nike"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Gift Card Balance"},
      {link: "Contact Us"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Nike Jouneral"},
      {link: "Send Us Feeback"},
    ],
  ]
};


export { heroapi, landingapi, footerAPI };
