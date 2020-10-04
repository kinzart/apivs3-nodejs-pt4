<h1>Apivs3</h1>
The end of aplication!


to see the project online:<br>
http://apivs3-com-br.umbler.net/


to list (read):<br>
http://apivs3-com-br.umbler.net/order

If you wanna try, first thing to do:
<h3>npm install</h3>



create a file <strong>.env</strong> an same folder that package.json

into .env:


    DATABASE_CONNECTION_STRING = "mongodb+srv://<user>:<password>@<cruster>.upjrg.mongodb.net/<db>?retryWrites=true&w=majority"




<h3>npm run dev</h3>









<h2>UPDATE</h2>

1- Lets put our UPDATE on BUSINESS RULES
 repositories/name-repository.js

    exports.updateName = async (id, data) => {
      await Name.findByIdAndUpdate(id, {
        $set: data
      });
    };

2- import function update to controller
  src/controllers/name-controller.js

     exports.updateName = async (req, res) => {
     try {
       await repository.updateName(req.params.id, req.body);
       res.status(200).send({
         message: 'Ok, was updated with successful'
       });
     } catch (e) {
       res.status(500).send({message: 'Failed to update'});
     }
    };


3- On name-routes.js 

    router.put('/:id', nameController.updateName);


4-  Lets change it, on app.js
     
    useFindAndModify: false,



<h2>DELETE</h2>


1- On name-repository.js

      exports.deleteName = async id => {
      await Name.findByIdAndDelete(id);
    };

2- On name-controller.js


    

    exports.deleteName = async (req, res) => {
      try {
        await repository.deleteName(req.params.id);
        res.status(200).send({
          message: 'Your order has been deleted!'
        });
      } catch (e) {
        res.status(500).send({message: 'We were unable to delete your order, try again...'});
      }
    };


3- Route on name-routes.js

    router.delete('/:id', nameController.deleteName);




Finish, now, to work fine in a browser, we have to set the "cors".
In App.js:
      
      
    const cors = require('cors');
    app.use(cors());
 
 
 

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*"); // * any app can do req
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next()
    });








Dont forget to test on Postman, localhost:3000/name/id

<tr>

These codes are the result of a highly didactic study published by https://woliveiras.com.br
