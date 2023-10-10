const Card = ({ allCountriesData }) => {
  return(
    <div className="card-container">
      {allCountriesData.map((singleData, index) =>
        <div key={index} className="card">
          <div>
            <h2>{singleData.Country}</h2>
            <p>New Case: {singleData.NewConfirmed.toLocaleString()}</p>
            <p>Total Case: {singleData.TotalConfirmed.toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
