module.exports = (sequelize, DataTypes) => {
    const Reserve = sequelize.define('reserve', {
        arrivalTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shampoo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shave: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Reserve;
}