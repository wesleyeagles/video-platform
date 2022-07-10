import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useDrawerContext } from "../contexts/MenuContext";
import { useGetLaunchBySlugQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {

    launchSlug?: string
}


export function Sidebar(props: SidebarProps) {
    const { launchSlug } = useParams()
    console.log(launchSlug)
    

    const { data } = useGetLaunchBySlugQuery({

        variables: {
            launchSlug: launchSlug
        }
    })



    const { isMenuOpen } = useDrawerContext()
    

    console.log(data)


    return (
        <aside className={classNames('w-full lg:w-[348px] bg-gray-700 border-l lg:p-6 border-gray-600 lg:block overflow-hidden lg:h-auto', {
        'h-0': !isMenuOpen,
        'h-auto p-6': isMenuOpen
        })}>
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">{data?.launch?.name}</span>

        <div className="flex flex-col gap-8 overflow-y-scroll h-[70vh] scrollbar pr-3">
            {data?.launch?.lessons.map(lesson => {
                return (
            <Lesson
            key={lesson.id}
            title={lesson.title}
            lessonSlug={lesson.lessonSlug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}

            />
                )
            })}
        </div>
        </aside>
    )
}