import { SpeciesList } from '../features/species/SpeciesList';

export function HomePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Plant Species</h1>
        <p className="text-gray-600">Discover and learn about different plant species</p>
      </div>
      <SpeciesList />
    </div>
  );
}
