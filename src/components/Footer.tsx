import { LogoRocketseat } from "./LogoRocketseat"

export function Footer() {
    return (
        <footer className="flex xs:flex-col lg:flex-row xs:text-sm md:text-base justify-between border-t border-gray-600">

            <div className="my-6 flex xs:flex-col lg:flex-row items-center gap-6">

                <LogoRocketseat />

                <span className="text-gray-400">
                   Rocketseat - All rights reserved
                </span>

            </div>

                <span className="flex justify-center xs:mb-6 lg:mb-0 items-center text-gray-400">
                    Privacy policies
                </span>

        </footer>
    )
}