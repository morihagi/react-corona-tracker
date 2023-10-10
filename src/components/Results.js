import Loading from "../components/Loading";

const Results = ({ countryData, loading }) =>{
  const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } = countryData;
  return(
    <div className="results-container">
      { loading?
        <Loading />
        :
        <div>
          <p>Date: <span>{date}</span></p>
          <p>New Case: <span>{newConfirmed.toLocaleString()}</span></p>
          <p>Total Case: <span>{totalConfirmed.toLocaleString()}</span></p>
          <p>New Recovered: <span>{newRecovered.toLocaleString()}</span></p>
          <p>Total Recovered: <span>{totalRecovered.toLocaleString()}</span></p>
        </div>
      }
    </div>
  );
};

export default Results;
