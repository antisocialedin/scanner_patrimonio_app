'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patrimonio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Patrimonio.belongsTo(models.Area);
    }
  };
  Patrimonio.init({
    codigo: DataTypes.INTEGER,
    estado: DataTypes.INTEGER,
    areaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patrimonio',
  });
  return Patrimonio;
};