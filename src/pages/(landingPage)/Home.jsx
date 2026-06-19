import React from 'react'

const Home = () => {
  return (
    <div>
      <main class="flex-grow flex flex-col items-center px-6 sm:px-10 max-w-7xl mx-auto w-full">
        <button
            class="mt-10 mb-6 flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
            type="button">
            <span>
                Explore how we help grow brands.
            </span>
            <span class="flex items-center justify-center size-6 p-1 rounded-full bg-indigo-600">
                <svg width="14" height="11" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6.5h14M9.5 1 15 6.5 9.5 12" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </span>
        </button>
        <h1 class="text-center text-gray-900 font-semibold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
            Preferred choice of leaders in
            <span class="text-indigo-600">
                every industry
            </span>
        </h1>
        <p class="mt-4 text-center text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
            Learn why professionals trust our solution to complete
            their customer journey.
        </p>
        <button
            class="mt-8 bg-indigo-600 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
            type="button">
            <span>
                Read Success Stories
            </span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715" stroke="#fff"
                    stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        <div aria-label="Photos of leaders" class="mt-12 flex max-md:overflow-x-auto gap-6 max-w-4xl w-full pb-6">
            <img alt="" class="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height="140"
                src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop"
                width="120" />
            <img alt="" class="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height="140"
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop"
                width="120" />
            <img alt="" class="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height="140"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop"
                width="120" />
            <img alt="" class="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height="140"
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop"
                width="120" />
            <img alt="" class="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0" height="140"
                src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop"
                width="120" />
        </div>
    </main>
    </div>
  )
}

export default Home
