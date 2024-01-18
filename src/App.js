import React, { useState } from 'react';
import DataTable from './Components/DataTable/DataTable';
import BarChart from './Components/BarChart/BarChart';

const mockData = [
  { id: 1, name: 'Item 1', numericValue1: 10,numericValue2: 10,numericValue3: 20 },
  { id: 2, name: 'Item 2', numericValue1: 20,numericValue2: 20,numericValue3: 50},
  { id: 3, name: 'Item 3', numericValue1: 30 ,numericValue2: 60,numericValue3: 120},
  { id: 4, name: 'Item 4', numericValue1: 30 ,numericValue2: 90,numericValue3: 70},
  { id: 5, name: 'Item 5', numericValue1: 20 ,numericValue2: 20,numericValue3: 40},
  { id: 6, name: 'Item 6', numericValue1: 10 ,numericValue2: 50,numericValue3: 30},
  { id: 7, name: 'Item 7', numericValue1: 100 ,numericValue2: 60,numericValue3: 10},
  { id: 8, name: 'Item 8', numericValue1: 10,numericValue2: 10,numericValue3: 20 },
  { id: 9, name: 'Item 9', numericValue1: 20,numericValue2: 20,numericValue3: 50},
  { id: 10, name: 'Item 10', numericValue1: 30 ,numericValue2: 60,numericValue3: 120},
  { id: 11, name: 'Item 11', numericValue1: 30 ,numericValue2: 90,numericValue3: 70},
  { id: 12, name: 'Item 12', numericValue1: 20 ,numericValue2: 20,numericValue3: 40},
  { id: 13, name: 'Item 13', numericValue1: 10 ,numericValue2: 50,numericValue3: 30},
  { id: 14, name: 'Item 14', numericValue1: 100 ,numericValue2: 60,numericValue3: 10}
];

function App() {
  const [checkedRows, setCheckedRows] = useState(new Set([...Array(5).keys()]));

  const handleCheckboxChange = (updatedCheckedRows) => {
    setCheckedRows(updatedCheckedRows);
  };

  return (
    <div>
      <DataTable data={mockData} onCheckboxChange={handleCheckboxChange} />
      <BarChart data={mockData} checkedRows={Array.from(checkedRows)} />
    </div>
  );
}

export default App;
