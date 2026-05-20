import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-slate-100">
      <section className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-lg">
        <p className="text-sm font-medium text-cyan-400">React + Vite + Tailwind</p>
        <h1 className="mt-2 text-3xl font-bold">React-Beginner</h1>
        <p className="mt-3 text-slate-300">
          프로젝트 생성 완료. Tailwind 클래스가 정상적으로 적용되고 있습니다.
        </p>
        <div className="mt-6">
          <button
            type="button"
            className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-900 transition hover:bg-cyan-400"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Count: {count}
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
