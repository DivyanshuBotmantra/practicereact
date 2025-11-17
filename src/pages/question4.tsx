import React, { useState, type ChangeEvent } from "react";
import { Type, Sparkles, TrendingUp } from "lucide-react";

const Question4: React.FC = () => {
    const [text, setText] = useState<string>(""); // initial empty string

    // whenever user types, we capture it
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setText(event.target.value);
    };

    // Container Styles
    const cardClasses = "bg-white/95 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl border border-white/20 w-full max-w-2xl transform transition-all duration-300"

    // Header Styles
    const headerSectionClasses = "text-center mb-8"
    const iconContainerClasses = "inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4 shadow-lg"
    const iconClasses = "w-8 h-8 text-white"
    const titleClasses = "text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
    const subtitleClasses = "text-gray-500 text-sm"

    // Input Styles
    const inputGroupClasses = "flex flex-col gap-2 mb-6"
    const inputContainerClasses = "relative"
    const inputClasses = "w-full py-4 px-6 pl-12 text-base border-2 border-gray-200 rounded-xl outline-none transition-all duration-300 font-inherit box-border focus:border-blue-500 focus:ring-4 focus:ring-blue-100 bg-gray-50 focus:bg-white shadow-sm focus:shadow-md"
    const inputIconClasses = "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"

    // Display Styles
    const displayContainerClasses = "mt-6 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100"
    const displayLabelClasses = "text-sm font-semibold text-gray-600 mb-2 flex items-center gap-2"
    const displayTextClasses = "text-lg font-medium text-gray-800 break-words min-h-[1.5rem]"
    const emptyTextClasses = "text-gray-400 italic"

    // Stats Styles
    const statsContainerClasses = "mt-4 flex items-center justify-between text-sm"
    const statItemClasses = "flex items-center gap-2 text-gray-600"
    const statIconClasses = "w-4 h-4"

    const characterCount: number = text.length;
    const wordCount: number = text.trim() ? text.trim().split(/\s+/).length : 0;

    return (
        <div >
            <div className={cardClasses}>
                {/* Header Section */}
                <div className={headerSectionClasses}>
                    <div className={iconContainerClasses}>
                        <Type className={iconClasses} />
                    </div>
                    <h2 className={titleClasses}>Form State Tracker</h2>
                    <p className={subtitleClasses}>
                        Type anything and watch it update in real-time
                    </p>
                </div>

                {/* Input Section */}
                <div className={inputGroupClasses}>
                    <div className={inputContainerClasses}>
                        <Sparkles className={inputIconClasses} />
                        <input
                            type="text"
                            placeholder="Type something..."
                            value={text}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </div>
                </div>

                {/* Display Section */}
                <div className={displayContainerClasses}>
                    <div className={displayLabelClasses}>
                        <TrendingUp className={statIconClasses} />
                        You typed:
                    </div>
                    <p className={`${displayTextClasses} ${!text && emptyTextClasses}`}>
                        {text || "Nothing yet... Start typing above!"}
                    </p>
                </div>

                {/* Stats Section */}
                <div className={statsContainerClasses}>
                    <div className={statItemClasses}>
                        <Type className={statIconClasses} />
                        <span><strong>{characterCount}</strong> characters</span>
                    </div>
                    <div className={statItemClasses}>
                        <Sparkles className={statIconClasses} />
                        <span><strong>{wordCount}</strong> words</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question4;

