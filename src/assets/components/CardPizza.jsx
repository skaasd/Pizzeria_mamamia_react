function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>
          <strong>Ingredientes:</strong> 🍕 {ingredients.join(", ")}
        </p>
        <hr />
        <p className="text-center fs-5 fw-bold">${price.toLocaleString("es-CL")}</p>
        <div className="d-flex justify-content-around">
          <button className="btn btn-outline-primary">Ver más 👀</button>
          <button className="btn btn-dark">Añadir 🛒</button>
          <button className="btn btn-dark"> Añadir 🛒 </button>
        </div>
      </div>
    </div>
  );
}
export default CardPizza;