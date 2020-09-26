var databaseHandler2 = {
db: null,
createDatabase: function(){
    this.db = window.openDatabase(
        "productres.db",
        "1.0",
        "product database",
        1000000);
    this.db.transaction(
        function(tx){
            //Run sql here using tx
            tx.executeSql(
                "create table if not exists product(_id integer primary key, name text, type text , bussinesstime text , price text , note text , namereport text , service_rating text , cleanning_rating text , food_rating text)",
                [],
                function(tx, results){},
                function(tx, error){
                    console.log("Error while creating the table: " + error.message);
                }
            );
        },
        function(error){
            console.log("Transaction error: " + error.message);
        },
        function(){
            console.log("Create DB transaction completed successfully");
        }
    );

}
}