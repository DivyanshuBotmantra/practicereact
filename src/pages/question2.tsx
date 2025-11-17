import React, { useState } from 'react'

interface MyBtnProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const MyBtn: React.FC<MyBtnProps> = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    );
};

const Question2: React.FC = () => {
    const [toggle, setToggle] = useState<string>("Hello")

    const handleToggle = (): void => {
        setToggle((prev) => {
            return prev === "Hello" ? "Goodbye" : "Hello"
        })
    }

    return (
        <div className="bg-white/95 rounded-[20px] p-12 shadow-2xl backdrop-blur-sm text-center min-w-[400px] max-w-[600px] w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 tracking-wide">Toggle Text</h2>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
                A button that switches between "Hello" and "Goodbye"
            </p>
            <div className={`text-6xl font-bold my-8 drop-shadow-md font-mono transition-all duration-300 min-h-[80px] flex items-center justify-center ${toggle === "Hello" ? 'text-[#11998e]' : 'text-[#eb3349]'}`}>
                {toggle}
            </div>
            <div className="mt-8 flex justify-center">
                <MyBtn
                    onClick={handleToggle}
                    className="px-10 py-4 text-lg font-semibold border-none rounded-xl cursor-pointer transition-all duration-300 text-white uppercase tracking-widest shadow-lg bg-linear-to-br from-indigo-500 to-purple-600 hover:-translate-y-0.5 hover:shadow-xl"
                >
                    Toggle
                </MyBtn>
            </div>
        </div>
    )
}

export default Question2

