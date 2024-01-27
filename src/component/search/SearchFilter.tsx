import React, { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";

const tempData : selectOptionType[] = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "blue", label: "Blue" },
  { value: "white", label: "White" }
];

export const SearchFilter : React.FC = () => {
  
  const [selectOptions, setSelectOptions] = useState<selectOptionType[]>([]);
  const handleSelectChange = (newValue: MultiValue<selectOptionType>) => {
   console.log("alkdjf", newValue);
    setSelectOptions(newValue as selectOptionType[]);
  }
  
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderRadius: '8px', // Adjust the border radius as needed
      borderColor: state.isFocused ? '#4F46E5' : '#CBD5E0', // Change the border color on focus
      boxShadow: state.isFocused ? '0 0 0 1px #4F46E5' : 'none', // Add a box shadow on focus
    }),
    valueContainer: (provided:any, state: any) => ({
      ...provided,
      height: '30px',
      padding: '0 6px'
    })
  }

  return (
    <div>
      <div className="flex gap-4 justify-center items-center">
        <label htmlFor="search">Search</label>
        <Select 
          className="w-[400px]"
          options={tempData}
          placeholder="select color"
          value={selectOptions}
          onChange={handleSelectChange}
          isMulti
          styles={customStyles}
        />
      </div>
    </div>
  )
}