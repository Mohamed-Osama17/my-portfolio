import * as Toast from '@radix-ui/react-toast';
import { LuX } from "react-icons/lu";

const CustomToast = ({ title, description, open, onOpenChange }) => {
    return (
        <Toast.Root
            className="bg-card border-border border-2 rounded-md shadow-lg p-4 data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
            open={open}
            onOpenChange={onOpenChange}
        >
            <Toast.Title className="text-sm font-semibold text-foreground">
                {title}
            </Toast.Title>
            <Toast.Description className="text-xs text-gray-500 mt-1">
                {description}
            </Toast.Description>
            <Toast.Action className="inline-flex items-center justify-center p-2 mt-2 text-sm font-medium  rounded  focus:outline-none focus:ring-2 focus:ring-indigo-500" asChild altText="Goto schedule a meeting">
                <button className='cosmic-button'>Undo</button>
            </Toast.Action>
            <Toast.Close className="absolute top-6 right-6 z-9999 text-foreground/40 hover:text-foreground transition-colors">
                {/* Add a close icon here (e.g., an X icon from Lucide React) */}
                <LuX size={16}/>
            </Toast.Close>
        </Toast.Root>
    );
};

export default CustomToast;