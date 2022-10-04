import React from "react";


function NotFound() {

  return (

    <div className="notFound flex justify-center items-center flex-col">
      <p>Страница пуста, быть может назад</p>
      <a className="not_link" href="/" alt="go home">Home</a>  
    </div>

  );

}
export default NotFound;