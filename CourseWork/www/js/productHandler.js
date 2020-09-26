var productHandler={
addProduct: function(name, type, dateTime, price, note, nameReport, serviceRating , cleanRating , foodRating ){
    databaseHandler2.db.transaction(
        function(tx){
            tx.executeSql(
                "insert into product(name, type, bussinesstime, price, note, namereport, service_rating , cleanning_rating , food_rating) values(?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [name, type, dateTime, price, note, nameReport, serviceRating , cleanRating , foodRating],
                function(tx, results){},
                function(tx, error){
                    console.log("add product error: " + error.message);
                }
            );
        },
        function(error){},
        function(){}
    );
},
loadProducts: function(displayProducts){
    databaseHandler2.db.readTransaction(
        function(tx){
            tx.executeSql(
                "select * from product",
                [],
                function(tx, results){
                    //Do the display
                    displayProducts(results);
                },
                function(tx, error){//TODO: Alert the message to user
                    console.log("Error while selecting the products" + error.message);
                }
            );
        }
    );
},
deleteProduct:function(_id){
    databaseHandler2.db.transaction(
        function(tx){
            tx.executeSql(
                "delete from product where _id = ?",
                [_id],
                function(tx, results){},
                function(tx, error){//TODO: Could make an alert for this one.
                    console.log("Error happen when deleting: " + error.message);
                }
            );
        }
    );
},
updateProduct: function(_id, newName, new_type, new_dateTime, new_price, new_note, new_nameReport, new_serviceRating, new_cleanRating, new_foodRating){
    databaseHandler2.db.transaction(
        function(tx){
            tx.executeSql(
                "update product set name=?, type=?, bussinesstime=?, price=?, note=?, namereport=?, service_rating=? , cleanning_rating=? , food_rating=?  where _id = ?",
                [newName, new_type, new_dateTime, new_price, new_note, new_nameReport, new_serviceRating, new_cleanRating, new_foodRating, _id],
                function(tx, result){},
                function(tx, error){//TODO: alert/display this message to user
                    console.log("Error updating product" + error.message);
                }
            );
        }
    );
}
};