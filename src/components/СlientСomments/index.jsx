
function СlientСomments() {
  return (
    <div className="clientСomments flex flex-col justify-center items-center pb-20 mb-20 border-b-4">
      <div className="commentsTop">
        <h3>Testimonial</h3>
        <h4>What Our Customer Saying?</h4>
      </div>
      <div className="commentsImg flex flex-col justify-center items-center pt-12">
        <img className="clientImg mb-4" src="./img/clientCommets.jpg" alt="client" />
        <div className="starBlock flex items-center">
          <span className="star p-2"></span>
          <span className="star p-2"></span>
          <span className="star p-2"></span>
          <span className="star p-2"></span>
          <span className="star p-2"></span>
        </div>
        <p className="mt-4">The quality of organic produce is extremely high, the service is second to none and the taste of the food takes me back to my childhood when we were growing our own.</p>
      </div>
      <div className="commentsName flex flex-col justify-center items-center pt-5">
        <p>Sara Taylor</p>
        <span>Consumer</span>
      </div>
    </div>
  );
}

export default СlientСomments;
