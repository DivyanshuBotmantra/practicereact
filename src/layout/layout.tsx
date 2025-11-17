import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Dash from '../pages/Dash'
import { featureRoutes } from '../config/routes'

const Layout: React.FC = () => {
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

    const navItems = featureRoutes.filter((route) => route.showInNav !== false)

    const isActive = (path: string): boolean => {
        return location.pathname === path
    }

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
                                        className={`${navLinkBaseClasses} ${active ? navLinkActiveClasses : navLinkInactiveClasses
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
                {isHome ? <Dash /> : <Outlet />}
            </div>
        </div>
    )
}

export default Layout

