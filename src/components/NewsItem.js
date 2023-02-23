import React from "react";

//export class NewsItem extends Component {
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } =props;
  return (
    <div className="container my-3">
      <div className="card my-3" style={{ width: "18rem" }}>
        <img
          src={
            !imageUrl
              ? "https://www.rollingstone.com/wp-content/uploads/2023/01/download-34.jpeg?w=1200&h=800&crop=1"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">
            {title}...
            <span className="badge" style={{ color: "#e60746" }}>
              {source}
            </span>
          </h6>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          {/* target=_blank opens the link in a new tab */}
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-success"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
