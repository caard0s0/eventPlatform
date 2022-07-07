import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { SideBar } from "../components/SideBar"
import { Video } from "../components/Video"

export function Event() {
    const { slug } = useParams<{ slug: string}>()

    return (
        <div className="flex flex-col min-h-screen pt-[4.6875rem]">

            <Header />

            <main className="flex flex-1">

                { slug 
                    ? <Video lessonSlug={slug}/> 
                    : <div className="flex-1" /> 
                }

                <div className="hidden md:flex">

                    <SideBar />

                </div>

            </main>

        </div>
    )
}
