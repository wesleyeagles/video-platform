import classNames from "classnames";
import { useDrawerContext } from "../contexts/MenuContext";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";


export function Sidebar() {

    const { data } = useGetLessonsQuery()
    const { isMenuOpen } = useDrawerContext()

    return (
        <aside className={classNames('w-full lg:w-[348px] bg-gray-700 border-l lg:p-6 border-gray-600 lg:block overflow-hidden lg:h-auto', {
        'h-0': !isMenuOpen,
        'h-auto p-6': isMenuOpen
        })}>
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Piloto - Vídeos</span>

        <div className="flex flex-col gap-8 overflow-y-scroll h-[70vh] scrollbar pr-3">
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