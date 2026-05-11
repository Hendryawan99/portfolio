import { ArrowRightIcon, DownloadSimpleIcon } from "@phosphor-icons/react";

export const NonAnimatedButton = ({ children }) => {
    return (
        <button className="
            relative bg-transparent border border-border text-foreground 
            hover:border-primary hover:text-primary hover:bg-primary/5
            transition-all duration-300 ease-in-out
            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary 
            focus-visible:ring-offset-2 disabled:opacity-50 
            disabled:cursor-not-allowed px-8 py-4 text-lg 
            font-medium rounded-full cursor-pointer"
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};