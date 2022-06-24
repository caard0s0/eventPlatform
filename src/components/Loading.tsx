import { CircleNotch } from "phosphor-react";

export function Loading() {
    return (
        <div>
            <CircleNotch weight="light" className="w-20 h-20 animate-spin" /> 
        </div>
    );
}