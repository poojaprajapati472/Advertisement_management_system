
import { Sequelize, Model, DataTypes } from 'sequelize';
import { dbconnection, sequelize } from '../database';

class category extends Model {
  id!: number;
  category_name!: string;
  subcategories!: string;
  // createdAt!: Date;
  // updatedAt!: Date;
  // image!: string;
 }
 category.init(
        {
            id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            category_name: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            subcategories: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            // createdAt: {
            //   type: DataTypes.DATE,
            //   allowNull: false,
            //   defaultValue: DataTypes.NOW,
            // },
            // updatedAt: {
            //   type: DataTypes.DATE,
            //   allowNull: false,
            //   defaultValue: DataTypes.NOW,
            // },
            // image: {
            //   type: DataTypes.BLOB,
            //   allowNull: true,
            // },
    },
    {
      sequelize,
      modelName: 'category', 
 
    }
  );
  (async ()=>{
    await category.sync({});
})();
export default category;




