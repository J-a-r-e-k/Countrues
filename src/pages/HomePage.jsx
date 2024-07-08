import { useState, useEffect } from 'react';
import Countries from '../Components/Countries/Countries';

const API_URL = 'https://restcountries.com/v3.1';

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [stanRegionBtn, setStanRegionBtn] = useState(false);
  const [nameRegionBtn, setNameRegionBtn] = useState('Filter by Region');

  // Stan przycisku Kontynentu
  const changeRegion = (event) => {
    setStanRegionBtn(event);
  };

  const changeNameRegionBtn = (event) => {
    setNameRegionBtn(event);
  };
  const arraySearch = (event) => {
    setSearch(event);
  };

  const updateSearchValue = (event) => {
    setSearchValue(event);
  };

  //POBIERANIE DANYCH
  const getCountriesData = async (region) => {
    const source = region ? `region/${region}` : 'all';

    try {
      const response = await fetch(
        `${API_URL}/${source}?fields=name,capital,population,region,flags`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
    }
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <>
      <Countries
        changeRegion={changeRegion}
        stanRegionBtn={stanRegionBtn}
        nameRegionBtn={nameRegionBtn}
        getCountriesData={getCountriesData}
        changeNameRegionBtn={changeNameRegionBtn}
        globalData={countries}
        arraySearch={arraySearch}
        search={search}
        updateSearchValue={updateSearchValue}
        searchValue={searchValue}
      />
    </>
  );
}

export default HomePage;
