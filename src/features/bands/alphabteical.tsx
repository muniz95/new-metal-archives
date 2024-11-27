import ErrorFallback from "@/components/error-fallback";
import { Paper, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from "react";
import { withErrorBoundary } from "react-error-boundary";

const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const options = ['', ...alphabet, '#', '~'];
const columns = (isSmallScreen: boolean): GridColDef[] => {
  return [
    { field: 'name', headerName: 'Name', width: isSmallScreen ? 130 : 180 },
    { field: 'country', headerName: 'Country', width: isSmallScreen ? 130 : 180 },
    { field: 'genre', headerName: 'Genre', width: isSmallScreen ? 90 : 140 },
    {
      field: 'status',
      headerName: 'Status',
      sortable: false,
      width: isSmallScreen ? 80 : 120,
    },
  ]
};
const rows = [
  {
    id: 1,
    name: 'Ê',
    country: 'France',
    genre: 'Brutal Death Metal (early); Death/Doom Metal (later)',
    status: 'Unknown'
  },
  {
    id: 2,
    name: 'E',
    country: 'International',
    genre: 'Experimental Black Metal/Post-Punk',
    status: 'Active'
  },
  {
    id: 3,
    name: 'E 605',
    country: 'Germany',
    genre: 'Melodic Death/Thrash Metal',
    status: 'Split-up'
  },
  {
    id: 4,
    name: 'E Capruun',
    country: 'Italy',
    genre: 'Speed/Thrash Metal',
    status: 'Split-up'
  },
  {
    id: 5,
    name: 'E Nora',
    country: 'France',
    genre: 'Progressive/Symphonic Metal',
    status: 'Active'
  },
  {
    id: 6,
    name: 'E Pluribus Unum',
    country: 'United Kingdom',
    genre: 'Black Metal',
    status: 'Split-up'
  },
  {
    id: 7,
    name: 'E Trite Moira',
    country: 'Italy',
    genre: 'Black Metal',
    status: 'Split-up'
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const Alphabteical = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelect = (event: React.ChangeEvent<HTMLOptionElement>) => {
    setSelectedOption(event.target.value);
  }
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <h2>Alphabteical</h2>
      <div>
        <select name="letter" id="letter">
          {options.map((option) => (
            <option key={option} value={option} onSelect={handleSelect}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns(isSmScreen)}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  )
}

export default withErrorBoundary(Alphabteical, { FallbackComponent: ErrorFallback });