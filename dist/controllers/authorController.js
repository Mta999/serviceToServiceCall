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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2F1dGhvckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx1REFBaUM7QUFFakMsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUN2QixRQUFBLFVBQVUsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2xELElBQUksT0FBTyxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUSxFQUFFLE9BQVk7UUFDL0MsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BCO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFUyxRQUFBLFNBQVMsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQy9DLElBQUksTUFBTSxHQUFHLGdCQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBUSxFQUFFLE1BQVc7UUFDOUQsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFUyxRQUFBLFlBQVksR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2xELElBQUksTUFBTSxHQUFHLGdCQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBQyxHQUFRO1FBQzNELElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFUyxRQUFBLFlBQVksR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksTUFBTSxHQUFHLGdCQUFNLENBQUMsaUJBQWlCLENBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUNiLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsVUFBQyxHQUFRLEVBQUUsTUFBVztRQUNsQixJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUMsQ0FDSixDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRVMsUUFBQSxTQUFTLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMvQyxJQUFJLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7UUFDakIsSUFBSSxHQUFHLEVBQUU7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDIn0=