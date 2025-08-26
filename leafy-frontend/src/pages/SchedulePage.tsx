export function SchedulePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Care Schedule</h1>
        <p className="text-gray-600">Keep track of watering and care tasks for your plants</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No scheduled tasks</h3>
        <p className="text-gray-600 mb-6">Add plants to your collection to start scheduling care tasks.</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
          View Plant Species
        </button>
      </div>
    </div>
  );
}
