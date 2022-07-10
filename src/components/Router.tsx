import {Route, Routes} from 'react-router-dom'
import { CreateTeacher } from '../pages/CreateTeacher'
import { Event } from '../pages/Event'
import { Home } from '../pages/Home'
import { Subscribe } from '../pages/Subscribe'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home name={''} launchSlug={''} />}   />

            <Route path="/login" element={<Subscribe />}   />
            <Route path="/launches/:launchSlug" element={<Event />}   />
            <Route path="/launches/:launchSlug/:lessonSlug" element={<Event />}   />



            {/* Admin Routes */}
            <Route path="/criar-professor" element={<CreateTeacher />}   />
        </Routes>
    )
}