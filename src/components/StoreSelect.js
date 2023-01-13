import { Select } from "@chakra-ui/react";

function StoreSelect() {
    return (
        <Select placeholder="Select your Store :">
            <option value='Broadmoor'>Broadmoor</option>
            <option value='Colfax'>Colfax</option>
            <option value='Fraser'>Fraser</option>
            <option value='Littleton'>Littleton</option>
            <option value='Nederlands'>Nederlands</option>
            <option value='Northfield'>Northfield</option>
            <option value='Quincy'>Quincy</option>
            <option value='Rockrimmon'>Rockrimmon</option>
            <option value='Sheridan'>Sheridan</option>
      </Select>
    );
}

export default StoreSelect;