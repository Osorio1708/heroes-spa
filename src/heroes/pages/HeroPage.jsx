import { useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { Id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(Id), [Id]);
  const onNavigateBack = () => navigate(-1);
  if (!hero) return;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${Id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail  animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-groupa list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
