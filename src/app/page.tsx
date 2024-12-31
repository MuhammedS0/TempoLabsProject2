import Activity from "./components/Activity";
import ActivityDarkMode from "./components/ActivityDarkMode";
import Profilebar from "./components/Profilebar";
import ProfilebarDarkMode from "./components/ProfilebarDarkMode";
import Sidebar from "./components/Sidebar";
import SidebarDarkMode from "./components/SidebarDarkMode";



export default function Home() {
  return (
    <>
    <Sidebar/>
    <Profilebar/>
    <Activity/>
    <SidebarDarkMode/>
    <ProfilebarDarkMode/>
    <ActivityDarkMode/>
    </>
  );
}
