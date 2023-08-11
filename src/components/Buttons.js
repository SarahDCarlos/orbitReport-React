import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)} data-testid="show-all-button">
        Show All Satellites
      </button>
    </div>
  );
};

export default Buttons;
