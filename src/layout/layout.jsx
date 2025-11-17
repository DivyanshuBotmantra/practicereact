import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Calculator, ToggleLeft, Lock, Type, Palette, TestTube } from 'lucide-react'
import Dash from '../pages/Dash'

const Layout = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'

    // Container Styles
    const containerClasses = "min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col"
    const contentClasses = "flex-1 flex items-center justify-center p-4 md:p-8"
    
    // Navbar Styles
    const navbarClasses = "bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg"
    const navbarContainerClasses = "max-w-7xl mx-auto px-4 py-4"
    const navListClasses = "flex flex-wrap items-center justify-center gap-2 md:gap-4"
    const navLinkBaseClasses = "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
    const navLinkActiveClasses = "bg-white/20 text-white shadow-md"
    const navLinkInactiveClasses = "text-white/80 hover:bg-white/10 hover:text-white"

    // Dashboard Styles
    const dashboardContainerClasses = "w-full max-w-6xl"
    const dashboardCardClasses = "bg-white/95 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl border border-white/20"
    const dashboardTitleClasses = "text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center"
    const dashboardSubtitleClasses = "text-gray-600 text-center mb-8 text-lg"
    const dashboardGridClasses = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
    const dashboardCardItemClasses = "bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    const dashboardCardTitleClasses = "text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2"
    const dashboardCardDescriptionClasses = "text-sm text-gray-600 mb-4"
    const dashboardCardLinkClasses = "inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"

    const navItems = [
        { path: '/1', label: 'Counter', icon: Calculator, description: 'Interactive counter with increment, decrement, reset, and double functions' },
        { path: '/2', label: 'Toggle', icon: ToggleLeft, description: 'Toggle between Hello and Goodbye with smooth animations' },
        { path: '/3', label: 'Password', icon: Lock, description: 'Password input with show/hide toggle functionality' },
        { path: '/4', label: 'Form State', icon: Type, description: 'Real-time form state tracking with character and word count' },
        { path: '/5', label: 'Color Picker', icon: Palette, description: 'Interactive color picker component' },
        { path: '/test', label: 'Test', icon: TestTube, description: 'Test page for development' },
    ]

    const isActive = (path) => {
        return location.pathname === path
    }

    // Dashboard Component
    const Dashboard = () => (
        <div className={dashboardContainerClasses}>
            <div className={dashboardCardClasses}>
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 mb-6 shadow-lg">
                        <LayoutDashboard className="w-10 h-10 text-white" />
                    </div>
                    <h1 className={dashboardTitleClasses}>
                        Dashboard
                    </h1>
                    <p className={dashboardSubtitleClasses}>
                        Explore all available components and features
                    </p>
                </div>

                <div className={dashboardGridClasses}>
                    {navItems.map((item) => {
                        const Icon = item.icon
                        return (
                            <div key={item.path} className={dashboardCardItemClasses}>
                                <h3 className={dashboardCardTitleClasses}>
                                    <Icon className="w-5 h-5 text-indigo-600" />
                                    {item.label}
                                </h3>
                                <p className={dashboardCardDescriptionClasses}>
                                    {item.description}
                                </p>
                                <Link
                                    to={item.path}
                                    className={dashboardCardLinkClasses}
                                >
                                    <span>Explore</span>
                                    <Sparkles className="w-4 h-4" />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

    return (
        <div className={containerClasses}>
            {/* Navbar */}
            <nav className={navbarClasses}>
                <div className={navbarContainerClasses}>
                    <ul className={navListClasses}>
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const active = isActive(item.path)
                            return (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`${navLinkBaseClasses} ${
                                            active ? navLinkActiveClasses : navLinkInactiveClasses
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="hidden sm:inline">{item.label}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <div className={contentClasses}>
                {isHome ? <Dashboard /> : <Outlet />}
            </div>
        </div>
    )
}

export default Layout

