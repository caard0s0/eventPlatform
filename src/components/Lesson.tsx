import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format} from 'date-fns'
import { Link, useParams } from 'react-router-dom'

import classNames from 'classnames'

interface LessonPros {
    title: string
    slug: string
    availableAt: Date
    type: 'live' | 'class'
}

export function Lesson(props: LessonPros) {
    const { slug } = useParams<{ slug: string }>()

    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd MMMM' • 'k'h'mm")

    const isActiveLesson = slug === props.slug;
    
    return (
        <Link 
            to={`/event/lesson/${props.slug}`} 
            onClick={( event ) => { if (!isLessonAvailable) {event.preventDefault()} }} 
            className={classNames("group",{
                'cursor-not-allowed': !isLessonAvailable,
                'opacity-40': !isLessonAvailable
            })}
        >

            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div 
                className={classNames('rounded border border-gray-500 p-4 mt-2', {
                    'bg-green-500' : isActiveLesson,
                    'group-hover:border-green-500': isLessonAvailable
                })}
            >

                <header className="flex items-center justify-between">

                    {isLessonAvailable ? (
                        <span className={classNames("text-sm font-medium flex items-center gap-2", {
                            'text-white': isActiveLesson,
                            'text-blue-500': !isActiveLesson
                        })}>
                            <CheckCircle size={20} />
                            Content released
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Coming soon
                        </span>
                    )}

                    {props.type === 'live'
                    ?
                        <span className={classNames("text-xs rounded py-[0.125rem] px-2 text-red border font-bold bg-red-600", {
                            'border-red-600': !isActiveLesson,
                            'text-red-600': isActiveLesson,
                            'bg-white' : isActiveLesson
                        })}> LIVE
                        </span>  
                    :
                        <span className={classNames("text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold", {
                            'border-white': isActiveLesson,
                            'border-green-300': !isActiveLesson,
                            'text-green-300': isActiveLesson,
                            'bg-white': isActiveLesson
                        })}> PRACTICAL CLASS
                        </span>  
                    }

                </header>

                <strong className={classNames('mt-5 block', {
                    'text-white' : isActiveLesson,
                    'text-gray-200' : !isActiveLesson
                })}>
                    {props.title}
                </strong>

            </div>

        </Link>
    )
}
