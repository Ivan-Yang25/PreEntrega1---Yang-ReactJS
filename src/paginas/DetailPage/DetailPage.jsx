import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "../../components/Card/card";

const DetailPage = () => {
  const [pers, setPers] = useState({});
  let { id } = useParams();

  // console.log(pers);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((info) => info.json())
    .then((data)=> setPers(data)) 
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {pers.id ? <Card pers={pers} /> : null}
    </div>
  );
};

export default DetailPage;
