import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Routes } from "@root/enems";

export const pagesNavbarData = [
  {
    id: 1,
    title: "Home",
    link: Routes.HOME,
  },
  {
    id: 2,
    title: "About",
    link: Routes.About,
  },
  {
    id: 3,
    title: "Products",
    link: "/",
    icon: KeyboardArrowDownIcon,
    subMenu: [
      { id: 1, title: "Marketing", link: Routes.PRODUCTS_MARKETING },
      { id: 2, title: "Sales", link: Routes.PRODUCTS_SALES },
      { id: 3, title: "Services", link: Routes.PRODUCTS_SERVICES },
      { id: 4, title: "Operations", link: Routes.PRODUCTS_OPERATION },
      { id: 5, title: "Loyalty", link: Routes.PRODUCTS_LOYALTY },
      { id: 6, title: "Call Center", link: Routes.PRODUCTS_CALL_CENTER },
      { id: 7, title: "Contracts", link: Routes.PRODUCTS_CONTRACTS },
      { id: 8, title: "Meetings", link: Routes.PRODUCTS_MEETINGS },
    ],
  },
  {
    id: 4,
    title: "Pricing",
    link: Routes.PRICING,
  },
  {
    id: 5,
    title: "Career",
    link: Routes.CAREER,
  },
  {
    id: 6,
    title: "Contact",
    link: Routes.CONTACT,
  },
];