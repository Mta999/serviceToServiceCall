"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var author_1 = __importDefault(require("./../author"));
// We'll start with allAuthors which will return
// every we have from our database
exports.allAuthors = function (req, res) {
    var authors = author_1.default.find(function (err, Authors) {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(authors);
        }
    });
};
exports.getAuthor = function (req, res) {
    var author = author_1.default.findById(req.params.id, function (err, author) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(author);
        }
    });
};
exports.deleteAuthor = function (req, res) {
    var author = author_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted Author");
        }
    });
};
exports.updateAuthor = function (req, res) {
    console.log(req.body);
    var author = author_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, author) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully updated author!");
        }
    });
};
exports.addAuthor = function (req, res) {
    var author = new author_1.default(req.body);
    console.log(req.body);
    console.log(author);
    author.save(function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(author);
            res.send(author);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yQ29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9hdXRob3JDb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHVEQUFpQztBQUVqQyxnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ3ZCLFFBQUEsVUFBVSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbEQsSUFBSSxPQUFPLEdBQUcsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRLEVBQUUsT0FBWTtRQUMvQyxJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVTLFFBQUEsU0FBUyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDL0MsSUFBSSxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBQyxHQUFRLEVBQUUsTUFBVztRQUM5RCxJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVTLFFBQUEsWUFBWSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbEQsSUFBSSxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFDLEdBQVE7UUFDM0QsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDMUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVTLFFBQUEsWUFBWSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsSUFBSSxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxpQkFBaUIsQ0FDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQ2IsR0FBRyxDQUFDLElBQUksRUFDUixVQUFDLEdBQVEsRUFBRSxNQUFXO1FBQ2xCLElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQzNDO0lBQ0wsQ0FBQyxDQUNKLENBQUM7QUFDTixDQUFDLENBQUM7QUFFUyxRQUFBLFNBQVMsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQy9DLElBQUksTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtRQUNqQixJQUFJLEdBQUcsRUFBRTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMifQ==