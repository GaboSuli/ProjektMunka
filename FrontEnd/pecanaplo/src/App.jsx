import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [data, setData] = useState([]);
  const [selectId, setSelectId] = useState(null);
  const [selectMinLength, setSelectMinLength] = useState(null);
  const [selectMinWeight, setSelectMinWeight] = useState(null);
  const [inputId, setInputId] = useState(null);
  const [inputMinLength, setinputMinLength] = useState(null);
  const [inputMinWeight, setinputMinWeight] = useState(null);

  // --------------- Fetch functions ---------------
  const GetAllData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/fogas");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const GetIdData = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/fogas/id/${id}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const GetMinLength = async (minLength) => {
    try {
      const response = await fetch(`http://localhost:8000/api/fogas/minsize/${minLength}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const GetMinWeight = async (minWeight) => {
    try {
      const response = await fetch(`http://localhost:8000/api/fogas/minweight/${minWeight}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  // --------------- Auto-fetch based on filters ---------------
  useEffect(() => {
    if (selectId) {
      GetIdData(selectId);
    } else if (selectMinLength) {
      GetMinLength(selectMinLength);
    } else if (selectMinWeight) {
      GetMinWeight(selectMinWeight);
    } else {
      GetAllData();
    }
  }, [selectId, selectMinLength, selectMinWeight]);

  // --------------- UI ---------------
  return (
    <>
      <section className="filters">
        <button
          type="button"
          onClick={() => {
            setSelectId(null);
            setSelectMinLength(null);
            setSelectMinWeight(null);
          }}
        >
          Összes
        </button>
<br />
        <input
          type="number"
          placeholder="Id"
          onChange={(e) => setInputId(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            setSelectId(inputId);
            setSelectMinLength(null);
            setSelectMinWeight(null);
          }}
        >
          Id keresés
        </button>
<br />
        <input
          type="number"
          placeholder="Minimum hossz"
          onChange={(e) => setinputMinLength(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            setSelectId(null);
            setSelectMinLength(inputMinLength);
            setSelectMinWeight(null);
          }}
        >
          Minimum hossz keresés
        </button>
<br />
        <input
          type="number"
          placeholder="Minimum súly"
          onChange={(e) => setinputMinWeight(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            setSelectId(null);
            setSelectMinLength(null);
            setSelectMinWeight(inputMinWeight);
          }}
        >
          Minimum súly keresés
        </button>
      </section>

      <section className="talalatok">
        {data.length > 0 ? (
          data.map((item) => (
            <Card id={item.id} halFaj={item.halFaj} fogoNeve={item.fogoNeve} halHossz={item.halHossz} halSuly={item.halSuly} helyszin={item.helyszin}/>
          ))
        ) : (
          <p>Nincs adat betöltve...</p>
        )}
      </section>
    </>
  );
}

export default App;
