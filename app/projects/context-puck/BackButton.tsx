"use client";

export default function BackButton() {
  return (
    <button
      onClick={() => window.close()}
      className="fixed top-6 right-6 z-50 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-300 shadow-lg text-sm"
    >
      ← Back to Portfolio
    </button>
  );
}