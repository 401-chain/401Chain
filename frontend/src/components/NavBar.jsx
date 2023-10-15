import ConnectWallet from "@/components/ConnectWallet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavMenu = () => {
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
            <Link href={"/about"}>About</Link>
            <ConnectWallet />
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
