import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import "./CountryPicker";
import { fetchCountries } from "../../api";

export const CountryPicker = ({ onChange }) => {
  const [fetchedCountries, setFetchCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchCountries]);

  return (
    <FormControl className="formControl">
      <NativeSelect defaultValue="" onChange={(e) => onChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
