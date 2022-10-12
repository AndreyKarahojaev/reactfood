
function Subscribe() {
  return (
    <div className="subscribe flex items-center justify-between mt-28">
      <div className="subscribeLeft">
        <h3>Subscribe our Newsletter</h3>
      </div>
      <div className="subscribeRight flex flex-row items-center justify-center">
      <input  placeholder="Enter your email address" />
      <button className="btn-subscribe flex justify-center items-start text-center">More News
        <span>
          <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 34C29.4934 34 38 26.3888 38 17C38 7.61116 29.4934 0 19 0C8.50659 0 0 7.61116 0 17C0 26.3888 8.50659 34 19 34Z" fill="#335B6B"/>
            <path d="M25.0384 16.5H11M19.0769 11L26 16.5L19.0769 22V11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>
      </div>
    </div>
  );
};

export default Subscribe;