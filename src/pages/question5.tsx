import React, { useState } from 'react'

interface CheckProps {
    name: string;
}

const Check: React.FC<CheckProps> = ({ name }) => {
    return (
        <p className="text-lg font-semibold text-indigo-600">
            Hey, I&apos;m <span className="capitalize">{name}</span>.
        </p>
    )
}

const Question5: React.FC = () => {
    const [count, setCount] = useState<number>(0)
    const [table, setTable] = useState<number>(1)

    const incrementValues = (): void => {
        setCount(prev => prev + 2)
        setTable(prev => prev + 1)
    }

    return (
        <main>
            <div className="mx-auto flex max-w-4xl flex-col gap-8">
                <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
                    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Props In Action</h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                        Props are short for <strong>properties</strong>. They allow parents to configure their
                        children and are read-only from the child&apos;s perspective.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 rounded-xl bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-sm font-medium uppercase tracking-wide text-slate-500">
                            Example greeting
                        </span>
                        <Check name="divyanshu" />
                    </div>
                </section>

                <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
                    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Interactive State</h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                        A component&apos;s state unlocks interactivity. Click the button to see the values
                        update in real time.
                    </p>
                    <div className="my-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl bg-sky-500 px-5 py-6 text-center text-white shadow-inner">
                            <span className="block text-xs font-semibold uppercase tracking-widest text-sky-100">
                                Multiplier
                            </span>
                            <span className="mt-2 text-4xl font-bold">{table}</span>
                        </div>
                        <div className="rounded-xl bg-indigo-500 px-5 py-6 text-center text-white shadow-inner">
                            <span className="block text-xs font-semibold uppercase tracking-widest text-indigo-100">
                                Result
                            </span>
                            <span className="mt-2 text-4xl font-bold">{count}</span>
                        </div>
                    </div>
                    <button
                        className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-4 py-2.5 text-base font-semibold text-white shadow transition hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-[0.99]"
                        onClick={incrementValues}
                    >
                        Add 2 and advance table
                    </button>
                    <p className="mt-3 text-sm text-slate-600">
                        Each click adds <strong>2</strong> to the result and increases the multiplier by
                        <strong> 1</strong>.
                    </p>
                </section>

                <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
                    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">One-Way Data Flow</h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                        React encourages data to flow from parent to child through props. When a child needs to
                        update a parent, the parent passes down a callback that the child can invoke.
                    </p>
                </section>
            </div>
        </main>
    )
}

export default Question5

