import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

const footerLinks = [
  {
    title: "Store Information",
    links: [
      {
        icon: <LocationOnIcon className="footer-icon" />,
        label:
          "60, 29th Street, San Francisco, CA 94110, United States of America",
        url: "",
      },
      {
        icon: <PhoneIcon className="footer-icon" />,
        label: "(+00) 123-456-789",
        url: "",
      },
      {
        icon: <MailIcon className="footer-icon" />,
        label: "demo@example.com",
        url: "",
      },
    ],
  },
  {
    title: "Information",
    links: [
      {
        icon: "",
        label: "Bookmark",
        url: "/",
      },
      { icon: "", label: "Features", url: "/" },
      { icon: "", label: "Sitemap", url: "/" },
      { icon: "", label: "Lists", url: "/" },
      { icon: "", label: "Map & Contact", url: "/" },
    ],
  },
  {
    title: "Extras",
    links: [
      {
        icon: "",
        label: "Delivery",
        url: "/",
      },
      { icon: "", label: "Cart", url: "/" },
      { icon: "", label: "Terms conditions", url: "/" },
      { icon: "", label: "Secure payment", url: "/" },
      { icon: "", label: "Stores", url: "/" },
    ],
  },
];

export default footerLinks;
