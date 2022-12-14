
function NewsBlockAutor() {
  return (
    <div className="NewsBlockAutor flex flex-col items-center mx-4">
      <img src="./img/newsBack.jpg" alt="fonnewsBack" />
      <div className="newsBlock mx-4">
        <p className="newsAutor">Kristina Castle</p>
        <h5 className="newsTitle" >Everything You Need to Know About Organic</h5>
        <p className="newsText" >Organic farming is the only way that you still can experience the real world.</p>
        <button className="btn-newsAutor">View More
          <span>
            <svg width="19" height="19" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 34C29.4934 34 38 26.3888 38 17C38 7.61116 29.4934 0 19 0C8.50659 0 0 7.61116 0 17C0 26.3888 8.50659 34 19 34Z" fill="#335B6B"/>
              <path d="M25.0384 16.5H11M19.0769 11L26 16.5L19.0769 22V11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
  </div>
  );
};

export default NewsBlockAutor;