import { Link } from "react-router";

export function Regust() {
    return(
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
  {/* Основное окно */}
  <div className="bg-white h-auto py-10 px-8 w-full max-w-md rounded-3xl shadow-2xl border flex flex-col items-center">
    
    <h1 className="text-2xl font-bold mb-8 text-gray-800">Регистрация</h1>
    
    {/* Контейнер для формы */}
    <div className="flex flex-col w-full gap-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full py-3 px-4 text-base text-black bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-2xl shadow-sm transition-all"
      />
        <input
        type="password"
        placeholder="Никнейм"
        className="w-full py-3 px-4 text-base text-black bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-2xl shadow-sm transition-all"
      />
      
      <input
        type="password"
        placeholder="Password"
        className="w-full py-3 px-4 text-base text-black bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-2xl shadow-sm transition-all"
      />
        <input
        type="password"
        placeholder="Password посторите"
        className="w-full py-3 px-4 text-base text-black bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-2xl shadow-sm transition-all"
      />
      
      <button className="mt-4 w-full py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-700 active:scale-95 transition-all">
        <Link to="/reg/anc">Регистрация</Link>
      </button>
    </div>

  </div>
</div>
    )
}
