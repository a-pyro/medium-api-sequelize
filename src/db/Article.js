const ArticleModel = (db, DataTypes) => {
  const Article = db.define('article', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    heading: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    subheading: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Article;
};

export default ArticleModel;
