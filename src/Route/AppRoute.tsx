import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/layout'
import CounterPro from "../pages/quuestion1"
import ToogleTest from "../pages/question2"
import PasswordVis from "../pages/question3"
import FormState from "../pages/question4"
import ColorPicker from "../pages/question5"
import Test from "./../pages/test"
import Display from '../pages/Display'

const NotFound: React.FC = () => {
    return (
        <h2>404 Page Not Found 🚫</h2>
    )
}

const AppRoute: React.FC = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={null} />
                <Route path='/1' element={<CounterPro />} />
                <Route path='/2' element={<ToogleTest />} />
                <Route path='/3' element={<PasswordVis />} />
                <Route path='/4' element={<FormState />} />
                <Route path='/5' element={<ColorPicker />} />
                <Route path='/6' element={<Display />} />
                <Route path='/test' element={<Test />} />
            </Route>

            <Route path="*" element={<Layout />}>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRoute

