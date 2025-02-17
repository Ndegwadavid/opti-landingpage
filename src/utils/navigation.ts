// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Optiplus",
    links: [
      { name: "home", url: "/#" },///welcome-to-docs/
      { name: "Products", url: "/products" },
      { name: "Services", url: "/services" },
    ],
  },
  {
    section: "Links",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Offers", url: "#" },
      { name: "", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/optiplus.kenya",
  instagram: "https://www.facebook.com/optiplus.kenya",
  x: "https://twitter.com/optiplusltd",
  github: "#",
  google: "https://www.google.com/",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};