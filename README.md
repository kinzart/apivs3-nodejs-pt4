<h2>FINISH</h2>
<small>The end of aplication!</small> 

to see the project online:<br>
http://apivs3-com-br.umbler.net/


to list (read):<br>
http://apivs3-com-br.umbler.net/order

If you wanna try:
<h3>npm install</h3>
//first thing to do


<h2>UPDATE</h2>

1- LETS TO PUT THE "UPDATE" IN OUR BUSINESS RULES
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


3- In name-routes.js 
router.put('/:id', nameController.updateName);


4-  Lets change it, on app.js
useFindAndModify: false,



<h2>DELETE</h2>


1- On name-repository.js

  exports.deleteName = async id => {
  await Name.findByIdAndDelete(id);
};

2- On name-controller.js


// delete
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




Dont forget to test on Postman, localhost:3000/name/id


<small>These codes are the result of a highly didactic study published by woliveiras.com.br<small>