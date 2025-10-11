export default function LogoLoader() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 z-50">
            <img
                src="/logo.png"
                alt="Loading..."
                className="w-20 h-20 animate-pulse mb-4"
            />
            <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-500 animate-bounce">
                Wizaura
            </h3>
        </div>
    );
}
