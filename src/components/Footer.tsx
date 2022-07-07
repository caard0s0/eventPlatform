import { LogoRocketseat } from "./LogoRocketseat"

export function Footer() {
    return (
        <footer className="flex justify-between xs:flex-col lg:flex-row xs:text-sm md:text-base border-t border-gray-600">

            <div className="flex items-center xs:flex-col lg:flex-row gap-6 my-6">

                <LogoRocketseat />

                <span className="text-gray-400">
                   Rocketseat - All rights reserved
                </span>

            </div>

                <span className="flex justify-center items-center xs:mb-6 lg:mb-0 text-gray-400">
                    Privacy policies
                </span>

        </footer>
    )
}