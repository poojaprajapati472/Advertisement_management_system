
import { Sequelize, Model, DataTypes } from 'sequelize';
import { dbconnection, sequelize } from '../database';
import User from './user';
import category from './catageory';
import Address from './address';

class product extends Model {
    static datavalues: any;
    static Bidding: any;
    // static save() {
    //   throw new Error("Method not implemented.");
    // }
    id!: number;
    // username!:string;
    product_name!: string;
    description!: string;
    // images!: string;
    Bidding!: number;
    Bidderid!: number;
    base_price!: number;
    title!: string;
    user_id!: number;
    category_id!: number;
    address_id!: number;
    static bidding: any;
    static id: any;
    static Bidderid: any;
 }
 product.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              // username: {
              //   type: DataTypes.STRING,
              //   allowNull: false,
              // },
              product_name: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              description: {
                type: DataTypes.STRING,
                allowNull: true,
              },
              // images: {
              //   type: DataTypes.ARRAY(DataTypes.BLOB),
              //   allowNull: true,
              // },
              Bidding: {
                type: DataTypes.INTEGER,
                allowNull: false,
              },
              Bidderid: {
                type: DataTypes.INTEGER,
                allowNull: true,
              },
              base_price: {
                type: DataTypes.INTEGER,
                allowNull: true,
              },
              title: {
                type: DataTypes.STRING,
                allowNull: true,
              },
              user_id: {
                type: DataTypes.INTEGER,
                //  allowNull: false,
                references:{
                  model:User,
                   key:"id",
            }
              },
              category_id: {
                type: DataTypes.INTEGER,
                // allowNull: false,
                references:{
                model:category,
                key:"id",
            }
              },
              address_id: {
                type: DataTypes.INTEGER,
            // allowNull: false,
            references:{
                model:Address,
                key:"id",
            }
              },
           
    },
    {
      sequelize,
      modelName: 'product', 
 
    }
  );
  product.belongsTo(User,
    {
      foreignKey:"user_id",
    })
  
    product.belongsTo(category ,
    {
      foreignKey:" category_id",
    })
  product.belongsTo(Address,
      {
        foreignKey:"address_id",
    }),
product.sync({alter:true});
export default product;




