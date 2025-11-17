import React, { useState } from 'react'
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react'

const Question3: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    // Container Styles
    // const containerClasses = "min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    const cardClasses = "bg-white/95 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl border border-white/20 w-full max-w-md transform transition-all duration-300 hover:shadow-3xl"

    // Header Styles
    const headerSectionClasses = "text-center mb-8"
    const iconContainerClasses = "inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-4 shadow-lg"
    const iconClasses = "w-8 h-8 text-white"
    const titleClasses = "text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2"
    const subtitleClasses = "text-gray-500 text-sm"

    // Form Styles
    const formClasses = "flex flex-col gap-6"
    const inputGroupClasses = "flex flex-col gap-2"
    const labelClasses = "text-sm font-semibold text-gray-700 flex items-center gap-2"
    const labelIconClasses = "w-4 h-4 text-indigo-500"
    const inputClasses = "py-3.5 px-4 text-base border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 font-inherit w-full box-border focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 bg-gray-50 focus:bg-white"
    const passwordInputClasses = "py-3.5 px-4 pr-12 text-base border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 font-inherit w-full box-border focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 bg-gray-50 focus:bg-white"
    const passwordToggleContainerClasses = "relative w-full"
    const passwordToggleButtonClasses = "absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-indigo-600 transition-colors duration-200 cursor-pointer rounded-md hover:bg-indigo-50"
    const eyeIconClasses = "w-5 h-5"

    // Button Styles
    const submitButtonClasses = "py-4 px-8 text-base font-semibold border-none rounded-xl cursor-pointer transition-all duration-300 text-white tracking-wide shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 mt-2 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transform"

    // Divider Styles
    const dividerContainerClasses = "relative my-4"
    const dividerLineClasses = "absolute inset-0 flex items-center"
    const dividerBorderClasses = "w-full border-t border-gray-200"
    const dividerTextContainerClasses = "relative flex justify-center text-xs uppercase"
    const dividerTextClasses = "bg-white px-2 text-gray-500"

    return (
        <div>
            <div className={cardClasses}>
                {/* Header Section */}
                <div className={headerSectionClasses}>
                    <div className={iconContainerClasses}>
                        <User className={iconClasses} />
                    </div>
                    <h1 className={titleClasses}>
                        Create Account
                    </h1>
                    <p className={subtitleClasses}>
                        Sign up to get started with your journey
                    </p>
                </div>

                {/* Form Section */}
                <div id="signup-form" className="form-container">
                    <form className={formClasses} onSubmit={(e) => e.preventDefault()}>
                        {/* Email Input */}
                        <div className={inputGroupClasses}>
                            <label className={labelClasses}>
                                <Mail className={labelIconClasses} />
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                required
                                className={inputClasses}
                            />
                        </div>

                        {/* Password Input */}
                        <div className={inputGroupClasses}>
                            <label className={labelClasses}>
                                <Lock className={labelIconClasses} />
                                Password
                            </label>
                            <div className={passwordToggleContainerClasses}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    required
                                    className={passwordInputClasses}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className={passwordToggleButtonClasses}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <EyeOff className={eyeIconClasses} />
                                    ) : (
                                        <Eye className={eyeIconClasses} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={submitButtonClasses}
                        >
                            Sign Up
                        </button>

                        {/* Divider */}
                        <div className={dividerContainerClasses}>
                            <div className={dividerLineClasses}>
                                <div className={dividerBorderClasses}></div>
                            </div>
                            <div className={dividerTextContainerClasses}>
                                <span className={dividerTextClasses}>Or continue with</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Question3

