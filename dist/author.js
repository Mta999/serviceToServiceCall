"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var uri = "mongodb://localhost:27017/authors";
mongoose_1.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
var AuthorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    id: Number,
});
var Author = mongoose_1.model("Author", AuthorSchema, "Author");
exports.default = Author;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXV0aG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWtEO0FBRWxELElBQU0sR0FBRyxHQUFXLG1DQUFtQyxDQUFDO0FBRXhELGtCQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBUTtJQUNsQixJQUFJLEdBQUcsRUFBRTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzVCO1NBQU07UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7S0FDMUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUdILElBQU0sWUFBWSxHQUFHLElBQUksaUJBQU0sQ0FBQztJQUM1QixJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsRUFBRSxFQUFFLE1BQU07Q0FDYixDQUFDLENBQUM7QUFFSCxJQUFNLE1BQU0sR0FBRyxnQkFBSyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFdkQsa0JBQWUsTUFBTSxDQUFDIn0=