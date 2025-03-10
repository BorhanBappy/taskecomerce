import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownMenuSub,
} from "@/components/ui/dropdown-menu";
import { SidebarIcon } from "lucide-react";

const CategoriesDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-4 uppercase items-center w-[300px] md:w-[300px] bg-orange-600 p-6">
          <SidebarIcon />
          ALL CATEGORIES
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] md:w-[300px] bg-amber-300 border-none -mt-1">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">
            Fashion
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-56 bg-amber-300 border-none">
              <DropdownMenuItem className="cursor-pointer">
                Clothing
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Delicacies
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                More...
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">
            Kitchen
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-56 bg-amber-300 border-none">
              <DropdownMenuItem className="cursor-pointer">
                Angene mafin
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Boys News
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                More...
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">
            Computer
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-56 bg-amber-300 border-none">
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="cursor-pointer">
                  Clothing
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="w-56 bg-amber-300 border-none">
                    <DropdownMenuItem className="cursor-pointer">
                      Angene mafin
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Cake and coociks
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      More...
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem className="cursor-pointer">
                Handbag Juelary
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                More...
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem className="cursor-pointer">Bags</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Watches</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Smartphone
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Health & Beauty
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoriesDropdown;
