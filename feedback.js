//select the elements that way, you have them in your hand for manipulation....

const theRatingStars = document.querySelectorAll(".rating-stars img");
//console.log(theRatingStars);

//the above returns a node list, i need to loop through it...

theRatingStars.forEach((star, index1) => {
  //add an event to the star
  star.addEventListener("click", () => {
    //see if the buttons you click are functioning
    //console.log("functioning", index1);
    //since the "onclick" is functioning, loop through the stars nodeList again...
    theRatingStars.forEach((star, index2) => {
      //console.log(star, index2); //this selects every img and its index, irrespective of the part of the code clicked
      //now we need to add a class that will be attached to our css...
      //this class either adds or removes the color placed on the img
      if (index1 >= index2) {
        //the + 1 was used to increment the position since it is zero based...
        star.classList.add("selected");
      } else {
        star.classList.remove("selected");
      }
    });
  });
});
