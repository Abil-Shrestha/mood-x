import Link from "next/link";
import { IconType } from "react-icons"
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
    icon: IconType;
    label:string;
    active?: boolean;
    href: string;
}
const SidebarItem:React.FC<SidebarItemProps> = ({icon: Icon,label,active,href}) => {
  return (
    <Link
        href={href}
        className={twMerge(`
            flex
            flex-row
            h-auto
            items-center
            w-full
            gap-x-4
            text-md
            font-medium
            cursor-pointer
            hover:text-white
            transition
            text-neutral-400
            pr-2
            
            rounded-lg
            
        `, active && 'text-slate-100')}>
                <Icon  className="hover:scale-105 ease-in-out transition" size={26} />
                <p className="truncate w-full hover:bg-neutral-800 rounded-lg p-2">{label}</p>
    </Link>
  )
}

export default SidebarItem