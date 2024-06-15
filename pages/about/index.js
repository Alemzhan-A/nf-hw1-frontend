export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">О мне</h2>
      <p className="text-lg text-gray-600 mb-5">
        Можете связаться со мной по почте: alimzanalimzag@gmail.com
      </p>
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Telegram</h3>
        <p className="text-gray-700">
          @Worb1K
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Instagram</h3>
        <p className="text-gray-700">
          @alemzhqn
        </p>
      </div>
    </div>
  );
}