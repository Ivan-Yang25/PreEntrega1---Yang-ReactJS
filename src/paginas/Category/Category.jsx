import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/card";

const Category = () => {
  const [pers, setPers] = useState([]);
  let { categoryType } = useParams();
  // console.log(pers);
  // console.log(char);

  let filteredCharacters = pers.filter((char) => {
    return char.species === categoryType;
  });

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character").then((res) =>
      setPers(res.data.results)
    );
  }, []);

  return (
    <div className="Cards-List">
      {filteredCharacters.map((per) => {
        return (
          <div style={{ margin: 10 }} key={per.id}>
            <Card per={per} />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
