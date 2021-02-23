const ArticleCard = props => {
  const { title, body } = props;

  return (
    <div
      style={{
        maxWidth: 500,
        borderWidth: 2,
        borderColor: "white",
        borderStyle: "solid",
        margin: 10,
      }}
    >
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default ArticleCard;
