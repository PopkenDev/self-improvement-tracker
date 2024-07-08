import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideMenu } from "./side-menu";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const MainNav = () => {
  return (
    <header className="p-4">
      <div className="flex items-center justify-between">
        <SideMenu />
        <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-white" />
      </div>
    </header>
  );
};
