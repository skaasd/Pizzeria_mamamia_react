import headerImg from "../images/Header.jpg";

function Header() {
  return (
    <header
      className="text-white text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "350px",
        marginTop: "-16px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.55)",
          padding: "25px 40px",
          borderRadius: "12px",
        }}
      >
        <h1 className="fw-bold mb-2">Pizzería Mamma Mía!</h1>
        <p className="fs-5 m-0">
          Tenemos las mejores pizzas que podrás encontrar 🍕
        </p>
      </div>
    </header>
  );
}

export default Header;