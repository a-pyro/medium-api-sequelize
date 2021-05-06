import sequelize from 'sequelize';
const { Sequelize, DataTypes } = sequelize;

const db = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  { port: process.env.PGPORT, host: process.env.PGHOST, dialect: 'postgres' }
);
import ArticleModel from './Article.js';
import AuthorModel from './Author.js';
import CategoryModel from './Category.js';
import ReviewModel from './Review.js';

export const Article = ArticleModel(db, DataTypes);
export const Author = AuthorModel(db, DataTypes);
export const Category = CategoryModel(db, DataTypes);
export const Review = ReviewModel(db, DataTypes);

Author.hasMany(Article); //fk(author) in article
Article.belongsTo(Author);

Article.hasMany(Review); //fk(article) in review
Review.belongsTo(Article);

Category.hasMany(Article); //fk(category) in article
Article.belongsTo(Category);

db.authenticate()
  .then(() => console.log('Connection established'))
  .catch((e) => console.log(e));

export default { db, Article, Author, Category, Review };
