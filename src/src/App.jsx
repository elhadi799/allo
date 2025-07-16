export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f6f2] flex flex-col items-center justify-center text-center px-4">
      <img src="/logo.png" alt="Socktopus Logo" className="w-48 mb-6" />
      <h1 className="text-4xl font-bold mb-2 text-[#222]">Welcome to SOCKTOPUS 🧦</h1>
      <p className="text-lg text-gray-600 mb-6">Your personalized sock drop experience</p>
      <a href="/admin" className="text-blue-600 underline">Admin login</a>
    </div>
  );
}
