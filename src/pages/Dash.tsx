import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { featureRoutes } from '../config/routes'

const Dash: React.FC = () => {

    // Container Styles
    const containerClasses = "w-full max-w-6xl mx-auto"
    const cardClasses = "bg-white/95 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl border border-white/20"

    // Header Styles
    const headerSectionClasses = "text-center mb-8"
    const titleClasses = "text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4"
    const subtitleClasses = "text-gray-600 text-lg"

    // Grid Styles
    const gridClasses = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
    const cardItemClasses = "bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
    const cardTitleClasses = "text-lg font-semibold text-gray-800 mb-2 flex items-center gap-3"
    const cardIconClasses = "w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0"
    const cardDescriptionClasses = "text-sm text-gray-600 mb-4"
    const cardLinkClasses = "inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors group-hover:gap-3"

    const components = featureRoutes.filter((route) => route.showOnDashboard !== false)

    return (
        <div className={containerClasses}>
            <div className={cardClasses}>
                {/* Header Section */}
                <div className={headerSectionClasses}>
                    {/* <div >
                        <LayoutDashboard className={iconClasses} />
                    </div> */}
                    <h1 className={titleClasses}>
                        Dashboard
                    </h1>
                    <p className={subtitleClasses}>
                        Explore all available components and features
                    </p>
                </div>

                {/* Components Grid */}
                <div className={gridClasses}>
                    {components.map((component) => {
                        const Icon = component.icon
                        return (

                            <Link
                                key={component.path}
                                to={component.path}
                                className={cardItemClasses}
                            >
                                <h3 className={cardTitleClasses}>
                                    <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${component.color} flex items-center justify-center ${cardIconClasses}`}>
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    {component.label}
                                </h3>
                                <p className={cardDescriptionClasses}>
                                    {component.description}
                                </p>
                                <div className={cardLinkClasses}>
                                    <span>Explore</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Dash

