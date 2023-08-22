import axios from 'axios';
import { useQuery } from 'react-query';

export function useChartData() {
  return useQuery('chartData', async () => {
    const response = await axios.get('https://disease.sh/v3/covid-19/countries');
    return response.data; // Modify this based on your API response structure
  });
}
