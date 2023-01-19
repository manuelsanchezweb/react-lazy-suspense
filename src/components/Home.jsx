import React from "react";

const Home = () => {
  return (
    <div className="content">
      <h1>This is the home section</h1>
      Bienvenido a casa. El resto de páginas no se van a cargar a no ser que las
      necesitemos. Eso lo hacemos porque estamos haciendo uso de{" "}
      <code>Lazy</code> y <code>Suspense</code>.
    </div>
  );
};

export default Home;
