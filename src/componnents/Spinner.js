import "../style/spinner.css";
function Spinner() {
  return (
    <main className="spinner-main">
      <div className="container">
        <div className="spinner-body">
          <div className="spinner-middle"></div>
        </div>
        <span>loading</span>
      </div>
    </main>
  );
}

export default Spinner;
