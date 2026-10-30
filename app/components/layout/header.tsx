import { Bell, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white px-6">
      <div className="flex flex-1 items-center">
        <div className="w-full max-w-xs">
          <div className="relative flex items-center rounded-full border border-gray-200 bg-white px-3 py-2 transition-all focus-within:border-gray-300 focus-within:ring-2 focus-within:ring-gray-100">
            {/* Search Icon */}
            <Search
              className="h-4 w-4 shrink-0 text-gray-400"
              aria-hidden="true"
            />

            {/* Input */}
            <input
              id="search"
              type="search"
              placeholder="Search everything..."
              className="w-full border-0 bg-transparent pl-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-0"
            />

            {/* Keyboard Shortcut */}
            <div className="ml-2 flex shrink-0 items-center gap-1 text-xs text-gray-400">
              <kbd className="rounded border border-gray-200 px-1 py-0.5">
                ⌘
              </kbd>
              <kbd className="rounded border border-gray-200 px-1 py-0.5">
                K
              </kbd>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-4 flex items-center space-x-4 md:ml-6">
        <button
          type="button"
          className="rounded-xl  border border-gray-200     p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200  focus:ring-offset-2"
        >
          <span className="sr-only">View notifications</span>
          <Bell className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="relative">
          <button
            type="button"
            className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            <span className="sr-only">Open user menu</span>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-5 w-5 text-gray-500" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
