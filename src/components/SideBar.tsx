import { useGetLessonsQuery } from "../graphql/generated"
import { Lesson } from "./Lesson"

export function SideBar() {
    const { data } = useGetLessonsQuery()

    return (
        <aside className="xs:w-full md:w-[21.75rem] p-6 mx-auto lg:border-l bg-gray-700 border-gray-600">
            
            <span className="block text-2xl pb-6 mb-6 border-b font-bold border-gray-500">
                Class Schedules
            </span>

            <div className="flex flex-col gap-8">

                {data?.lessons.map(lesson => {
                    return (
                        <Lesson 
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                
                    )
                })}

            </div>

        </aside>
    )
}
