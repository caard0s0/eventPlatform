import { LogoRocketseat } from "./LogoRocketseat"

export function Footer() {
    return (
        <footer className="flex justify-between border-t border-gray-600">

            <div className="my-6 flex items-center gap-6">

                <LogoRocketseat />

                <span className="text-gray-400">
                   Rocketseat - All rights reserved
                </span>

            </div>

                <span className="flex items-center text-gray-400">
                    Privacy policies
                </span>

        </footer>
    )
}