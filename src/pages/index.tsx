// pages/index.tsx

import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-white text-2xl font-semibold">Study Planner</h1>
          {/* Add navigation links or user authentication buttons here */}
        </div>
      </header>
      <main className="container mx-auto py-8 h-screen w-full flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Welcome to Study Planner
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Plan your study sessions efficiently and stay organized.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => router.push("/login")}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md mr-4"
            >
              Sign Up
            </button>
            <button
              onClick={() => router.push("/login")}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-md"
            >
              Login
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-gray-300 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            © 2024 Study Planner. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
