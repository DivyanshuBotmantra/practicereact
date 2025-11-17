import React, { useState } from 'react'

const Quuestion1: React.FC = () => {
    const [count, setCount] = useState<number>(0)

    const handleCountInc = (): void => {
        setCount(count + 1)
    }

    const handleCountDec = (): void => {
        setCount(count - 1)
    }

    const reset = (): void => {
        setCount(0)
    }

    const double = (): void => {
        setCount(count + 2)
    }

    return (
        <div className="bg-white/95 rounded-[20px] p-12 shadow-2xl backdrop-blur-sm text-center min-w-[400px] max-w-[500px]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 tracking-wide">Counter Pro</h2>
            <div className="text-7xl font-bold text-indigo-500 my-8 drop-shadow-md font-mono">{count}</div>
            <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                <button
                    onClick={handleCountInc}
                    className="px-6 py-3.5 text-base font-semibold border-none rounded-xl cursor-pointer transition-all duration-300 text-white uppercase tracking-wide shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' }}
                >
                    +1
                </button>
                <button
                    onClick={handleCountDec}
                    className="px-6 py-3.5 text-base font-semibold border-none rounded-xl cursor-pointer transition-all duration-300 text-white uppercase tracking-wide shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)' }}
                >
                    -1
                </button>
                <button
                    onClick={reset}
                    className="px-6 py-3.5 text-base font-semibold border-none rounded-xl cursor-pointer transition-all duration-300 text-white uppercase tracking-wide shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: 'linear-gradient(135deg, #f09819 0%, #edde5d 100%)' }}
                >
                    Reset
                </button>
                <button
                    onClick={double}
                    className="px-6 py-3.5 text-base font-semibold border-none rounded-xl cursor-pointer transition-all duration-300 text-white uppercase tracking-wide shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                >
                    +2
                </button>
            </div>
        </div>
    )
}

export default Quuestion1

