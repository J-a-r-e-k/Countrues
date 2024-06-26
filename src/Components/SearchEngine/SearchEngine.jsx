import Style from './SearchEngine.module.scss';

const SearchEngine = ({
  stanRegionBtn,
  changeRegion,
  nameRegionBtn,
  getCountriesData,
  changeNameRegionBtn,
}) => {
  const ArrowRegionSVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.414L3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
      </svg>
    );
  };

  return (
    <section className={Style.searchEngine}>
      {/* <svg
        className={Style.magnifier}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="grey"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="25" y1="25" x2="16.65" y2="16.65"></line>
      </svg> */}
      <input
        className={Style.imputSearch}
        type="text"
        placeholder="Search for a country"
      ></input>

      <button
        className={Style.btnListRegion}
        onClick={() => {
          changeRegion(!stanRegionBtn);
        }}
      >
        {`${nameRegionBtn}`}
        <ArrowRegionSVG />
        {stanRegionBtn && (
          <div className={Style.regionList}>
            <ul>
              <li>
                <button
                  onClick={() => {
                    getCountriesData('africa');
                    changeNameRegionBtn('Africa');
                  }}
                >
                  Africa
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    getCountriesData('americas');
                    changeNameRegionBtn('America');
                  }}
                >
                  America
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    getCountriesData('Asia');
                    changeNameRegionBtn('Azja');
                  }}
                >
                  Azja
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    getCountriesData('europe');
                    changeNameRegionBtn('Europe');
                  }}
                >
                  Europe
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    getCountriesData('Oceania');
                    changeNameRegionBtn('Oceania');
                  }}
                >
                  Oceania
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    getCountriesData();

                    changeNameRegionBtn('Filter by Region');
                  }}
                >
                  All Countries
                </button>
              </li>
            </ul>
          </div>
        )}
      </button>
    </section>
  );
};

export default SearchEngine;
