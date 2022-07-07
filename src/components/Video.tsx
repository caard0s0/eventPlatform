import { DefaultUi, Player, Youtube } from "@vime/react"
import { CaretRight, DiscordLogo, FileArrowDown, Lightning, Image } from "phosphor-react"
import { useGetLessonBySlugQuery } from "../graphql/generated"
import { Loading } from "./Loading"
import { Footer } from "./Footer"

import '@vime/core/themes/default.css'

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug
        }
    })

    if (!data || !data.lesson) {
        return (
            <div className="flex-1 flex items-center justify-center">
                <Loading />
            </div>
        )
    }
       
    return (
        <div className="flex-1">

            <div className="bg-black flex justify-center">

                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                
                </div>

            </div>

            <div className="p-8 max-w-[1100px] mx-auto">

                <div className="xs:block lg:flex items-start gap-16">

                    <div className="flex-1">

                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>

                        <p className="xs:text-sm md:text-base mt-4 leading-relaxed text-gray-200">
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                            
                                <img 
                                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                                    src={data.lesson.teacher.avatarURL}
                                    alt="" 
                                />

                                <div className="leading-relaxed">

                                    <strong className="font-bold xs:text-lg md:text-2xl block">
                                    {data.lesson.teacher.name}
                                    </strong>

                                    <span className="text-gray-200 xs:text-xs md:text-sm block">
                                    {data.lesson.teacher.bio}
                                    </span>

                                </div>
                        
                            </div>
                        )}

                    </div>

                    <div className="flex flex-col gap-4">

                        <a 
                            href="https://github.com/caard0s0" 
                            target="_blank" 
                            className="flex items-center justify-center font-bold uppercase text-sm p-4 xs:mt-6 lg:m-0 bg-green-500 rounded gap-2 hover:bg-green-700 transition-colors"
                        >

                            <DiscordLogo size={24} />
                            Discord Community

                        </a>

                        <a 
                            href="https://github.com/caard0s0" 
                            target="_blank" 
                            className="flex items-center justify-center font-bold uppercase text-sm text-blue-500 border border-blue-500 rounded gap-2 p-4 hover:bg-blue-500 hover:text-gray-900 transition-colors"
                        >

                            <Lightning size={24} />
                            Access the Challenge

                        </a>

                    </div>

                </div>

                <div className="grid lg:grid-cols-2 gap-8 mt-20">

                    <a 
                        href="https://github.com/caard0s0" 
                        target="_blank"
                        className="flex items-stretch justify-between rounded overflow-hidden gap-6 bg-gray-700 hover:bg-gray-600 border-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:-translate-y-2 transition-all duration-500 ease-in-out"
                    >
                        
                        <div className="flex items-center h-full xs:p-4 lg:p-6 bg-green-700">
                            <FileArrowDown size={40} />
                        </div>

                        <div className="py-6 leading-relaxed">

                            <strong className="xs:text-lg md:text-2xl">
                                Exclusive materials
                            </strong>

                            <p className="xs:text-xs md:text-sm text-gray-200 mt-2">
                                access supplemental material to accelerate your development, good luck!                            
                            </p>
                        
                        </div>

                        <div className="flex items-center h-full p-6 text-blue-500">
                            <CaretRight size={24} />
                        </div>

                    </a>

                    <a 
                        href="https://github.com/caard0s0" 
                        target="_blank" 
                        className="flex items-stretch justify-between rounded overflow-hidden gap-6 bg-gray-700 hover:bg-gray-600 border-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:-translate-y-2 transition-all duration-500 ease-in-out"
                    >
                        
                        <div className="flex items-center h-full xs:p-4 lg:p-6 bg-green-700">
                            <Image size={40} />
                        </div>

                        <div className="py-6 leading-relaxed">

                            <strong className="xs:text-lg md:text-2xl">
                                Exclusive Wallpapers
                            </strong>

                            <p className="xs:text-xs md:text-sm text-gray-200 mt-2">
                                Download exclusive Ignite Lab wallpapers and customize your machine...
                            </p>
                        
                        </div>

                        <div className="flex items-center h-full p-6 text-blue-500">
                            <CaretRight size={24} />
                        </div>

                    </a>
                
                </div>

            </div>

            <div className="mx-6">
                <Footer />
            </div>

        </div>
    )
}
