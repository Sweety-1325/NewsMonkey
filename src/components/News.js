import React, {useEffect,useState} from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News=((props)=>{

 
  //apiKey=dd37b374a4ce4b3e8ad2592434bf291b;//SWEETY
  //apiKey=ab2a7a3be99543068aeb310bd4b50692;//LOVELY
   //articles=[];
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${this.capitalize(props.category)}-NewsMonkey`;
  //capitalize first letter
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  
  //it will run after everything is mounted-i.e after the render part
  //async function can wait within its body for the promises to resolve
  const updatenews=(async()=>{

   
    props.setProgress(10);
    console.group("prev");
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parseddata = await data.json();
    props.setProgress(70);
    console.log(parseddata);
    setTotalResults(parseddata.totalResults);
    setArticles(parseddata.articles);
    setLoading(false);
    props.setProgress(100);
  })

  //componentDidMount() runs after render method is run. We fetch api in this method,we can set state in this and also use async and await-we basically use for the fetching of data
  //componentDidUpdate() runs as soon as the updation of state or props is done
  //componentWillUnmount()-run before any component is destroyed. Used for cleanup
  //Dom-data oject model-website model
 useEffect(() => {
  document.title = `${capitalize(props.category)}-NewsMonkey`;
    updatenews();
    //eslint-disable-next-line 
  }, [])
  
  /*const handlePrevClick = async () => {
    

    //this.setState({ page: this.state.page - 1 });
    setPage(page-1);
    updatenews();
  };*/
  /*const handleNextClick = async () => {
    
    //this.setState({ page: this.state.page + 1 });
    setPage(page+1);
    updatenews();
  };*/

  const fetchMoreData =( async () => {
    
    
    setLoading(true);
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    // setPsge will take some amount of time so to save that time we are incrementing in url itself then finally incrementing the page state
    setPage(page+1);

    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    setArticles(articles.concat(parseddata.articles));
    setTotalResults(parseddata.totalResults);
    setLoading(false);
    /*this.setState({
      totalResults: parseddata.totalResults,
      articles: this.
      loading: false,
    });*/
  });

 
    //a tatet should not be modified inside a render method
    //pure method-for a particular input it gives the same output-render method should be pure
    return (
      <>
        <h2
          className="text-center"
          style={{ color: "#eb2d30", margin: "30px" ,marginTop:"100px"}}
        >
          Top {capitalize(props.category)} Headlines
        </h2>
        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      newsUrl={element.url}
                      description={element.description? element.description.slice(0, 80): ""}
                      imageUrl={element.urlToImage}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  
})

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
