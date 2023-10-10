const Results = (props) =>{
  return(
    <div className="results-container">
      <div>
        <p>Date: <span>{props.countryData.date}</span></p>
        <p>New Case: <span>{props.countryData.newConfirmed.toLocaleString()}</span></p>
        <p>Total Case: <span>{props.countryData.totalConfirmed.toLocaleString()}</span></p>
        <p>New Recovered: <span>{props.countryData.newRecovered.toLocaleString()}</span></p>
        <p>Total Recovered: <span>{props.countryData.totalRecovered.toLocaleString()}</span></p>
      </div>
    </div>
  );
};

export default Results;
