
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart, AiOutlineFieldTime } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { FiFile } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { IoBusinessOutline } from "react-icons/io5";
import { BsFileRuled,BsTicketPerforated,BsCalendar2Event, BsBroadcast } from "react-icons/bs";
import { SlDocs } from "react-icons/sl";
import { HiMiniUser } from "react-icons/hi2";
import { FaTasks } from "react-icons/fa";
import { BsMailboxFlag } from "react-icons/bs";
import { LuParkingSquare } from "react-icons/lu";
import { MdOutlineInventory2 } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";
import { AiOutlineAudit } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsSpeedometer2 } from "react-icons/bs";
export const menus = [
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "Attendance", link: "/attendance", icon: BsFileRuled },
    { name: "Business", link: "/business", icon: IoBusinessOutline },
    { name: "Materials", link: "/materials", icon: TbReportAnalytics,  },
    { name: "Bookings", link: "Bookings", icon: AiOutlineFieldTime },
    { name: "Documents", link: "/documents", icon: SlDocs },
    { name: "Tickets/CAR", link: "/tickets", icon: BsTicketPerforated, },
    { name: "Events", link: "/events", icon: BsCalendar2Event },
    { name: "Broadcast", link: "/broadcast", icon: BsBroadcast },
    { name: "Supplier", link: "/supplier", icon: AiOutlineUser },
    { name: "Customer", link: "/customer", icon: HiMiniUser },
    { name: "Tasks", link: "/task", icon: FaTasks },
    { name: "Mail Room", link: "/mailroom", icon: BsMailboxFlag },
    { name: "Parking", link: "/parking", icon: LuParkingSquare },
    { name: "Space", link: "/space", icon: RiSettings4Line },
    { name: "Inventory", link: "/inventory", icon: MdOutlineInventory2 },
    { name: "Quick Gate", link: "/quick-gate", icon: BsDoorOpen },
    { name: "AMC", link: "/AMC", icon: RiSettings4Line },
    { name: "Audit", link: "/audit", icon: AiOutlineAudit },
    { name: "MOM", link: "/MOM", icon: AiOutlineFileText },
    { name: "Schedule", link: "/schedule", icon: AiOutlineSchedule },
    { name: "Meters", link: "/meters", icon: BsSpeedometer2 },
    { name: "Service", link: "/service", icon: LuSettings2 },
    { name: "Assets", link: "/assets", icon: BsBuilding },
    { name: "Report", link: "/report", icon: FiFile },
    { name: "Setup", link: "/setup", icon: RiSettings4Line },
  ];