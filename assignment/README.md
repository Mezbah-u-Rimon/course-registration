Question No.1 : Add at least 3 Project features..
Answer-1 :
Feature-1 : This website is fully dynamic and responsive. And this website has two sections, One is the Card section and the other is the Cart section..

Feature-2 : The card section consists of 9 cards. And each card have an image, title, details, price, credit and button. And the card section have Credit Hour Remaining, Course Name, Total Credit Hour, and Total Price..

Feature-3 : By clicking on the button, The name of the course will be added to the cart section. Credit will add up to Total Credit Hour,The Price will be added to the Total Price, The credit will be subtracted from the Credit Hour Remaining(20).. Maximum total credit hour will be 20, above 20 will show a toast. Minimum Credit Hour Remaining will be 0, below 0 will show a toast. and clicking a card more then twice will show a toast...


Question No.2 : Discuss how you managed the state in your assignment project.
Answer-2 :

useState-1 : First, Inside the useEffect, I am putting the fake data of json in the useState.And Through this we are making the cards..

useState-2 : Second, We are adding an Empty array in the useState that we have used. if the button is clicked,The data of the card will be stored in the array. By this we name each card show in the course name inside the cart..

useState-3 : We add the total price to the setTotalCost. Through this we have shown the total price in the cart. As its value we are using 0 in useState.

useState-4 : We add the total credit hour to the setTotalCredit. Through this we have shown the Total Credit Hour in the cart. As its value we are using 0 in useState..

useState-5 : Subtract the total remaining from the total hour credit, Added to the set TotalHourRemaining function.Through this we have shown the Credit Hour Remaining in the cart.As its value we are using 20 in useState..