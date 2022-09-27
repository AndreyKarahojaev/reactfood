import NewsBlockAutor from '../components/NewsBlockAutor';
import Subscribe from '../components/Subscribe';

function News() {
  return (
    <div className="news flex flex-col flex-wrap items-center mt-4">
      <div className="newsTop flex flex-row flex-wrap justify-around">
        <h3 className="ml-8">News</h3>
        <h4>Discover The recent content about organic products</h4>
        <button className="btn-news flex justify-center items-start text-center">More News
        <span>
          <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 34C29.4934 34 38 26.3888 38 17C38 7.61116 29.4934 0 19 0C8.50659 0 0 7.61116 0 17C0 26.3888 8.50659 34 19 34Z" fill="#335B6B"/>
            <path d="M25.0384 16.5H11M19.0769 11L26 16.5L19.0769 22V11Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>
      </div>
      <div className="newsButtom flex flex-row pt-32 pb-16 mb-28">
        <NewsBlockAutor/>
        <NewsBlockAutor/>
      </div>
      <Subscribe/>
    </div>
  );
}

export default News;
