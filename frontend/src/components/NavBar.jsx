import ConnectWallet from "@/components/ConnectWallet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavMenu = () => {
  const handleAboutClick = () => {
    document.getElementById("about-container").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" className="text-4xl font-bold text-[#2E8B57]">
            401Chain
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <div className="flex gap-x-6 items-center text-[#2E8B57]">
            <button onClick={handleAboutClick}>About</button>
            <ConnectWallet />
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
