import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_BASE = 'http://localhost:3000/api/v1';

export interface Species {
    id: string;
    commonName: string;
    scientificName: string;
    description: string;
    defaultWateringIntervalDays: number;
    imageUrl?: string;
    sunlightRequirement?: string;
    soilType?: string;
    temperatureRange?: string;
    humidityRequirement?: string;
    careInstructions: {
        soil?: string;
        light?: string;
        humidity?: string;
        fertilizer?: string;
        temperatureC?: string;
        notes?: string;
        pruning?: string;
        watering?: string;
        support?: string;
    };
    properties: {
        growthRate?: string;
        nativeRegion?: string;
        isToxicToPets?: boolean;
        matureHeightCm?: number;
        matureLengthCm?: number;
        matureDiameterCm?: number;
    };
    // Add any other fields you plan to use
}

export const useSpecies = () =>
  useQuery<Species[], Error>({
    queryKey: ['species'],
    queryFn: async () => {
      const { data } = await axios.get<Species[]>(`${API_BASE}/species`);
      return data;
    },
  });
