const Header = () => {
    return (
        <div className="flex items-center justify-between bg-black px-4 py-2 shadow">
            <div className="flex space-x-4">
                {/* Search bar */}
                <div className="flex items-center rounded bg-gray-200 p-2">
                    <input
                        className="bg-transparent outline-none"
                        placeholder="Search Anything ...."
                    />
                    <button>{/* Icon for search */}</button>
                </div>
                {/* Tabs */}
                <div className="hidden items-center space-x-1 md:flex">
                    <a
                        href="#"
                        className="px-3 py-2 text-sm font-semibold text-gray-700"
                    >
                        Overview
                    </a>
                    <a href="#" className="px-3 py-2 text-sm text-gray-700">
                        Clients
                    </a>
                    <a href="#" className="px-3 py-2 text-sm text-gray-700">
                        Account
                    </a>
                    <a href="#" className="px-3 py-2 text-sm text-gray-700">
                        Payments
                    </a>
                </div>
            </div>
            <div>
                {/* User Info */}
                <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-700">Daniel Craig</span>
                    {/* User image or avatar */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm">
                        DC
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
