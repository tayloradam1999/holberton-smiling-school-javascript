# holberton-smiling-school-javascript

## In this project, we are finalizing our previous Bootstrap project (0x0B. Implement a design with bootstrap)[https://github.com/tayloradam1999/holberton-smiling-school].  
  
**ONE MAJOR NOTE**: As a cohort, my school never managed to get a multi-item carousel working the way our previous project was requiring, so our instructor has let us slide with using anything that will meet THIS project's task's requirements. ***FOR ME***, that means I have made the sections on all ```homepage.html``` files that include a multi-item carousel into a **SINGLE ITEM CAROUSEL.** 

This project has us pulling in data with API's to use as dynamic data in place of our old static data. I went to each URL that we will be querying through and used ```cntrl-f``` to search for the amount of ID's each link held. Each section that requests us to use a *multi-item carousel* had a total of **SEVEN IDs**, so instead of a *multi-item carousel* with a total of *7 objects* to slide through, I have *single item carousels* that go through those same *7 objects*, as per task requirements. 
  
## **Requirements**
- You have to use Bootstrap  
- Your ```styles.css``` must be as small as you can - **you must use as many BOOTSTRAP CLASSES as you can**  
- You have to use JQuery  
- Your ```scripts.js``` must contain all of your Javascript 
- Your Javascript must be executed only when the document is loaded
  
## **Imports**  
For this project, you will need: fonts from Google, JQuery, Bootstrap CSS/JS  
```css
<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Coiny&display=swap" rel="stylesheet">

<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

<link rel="stylesheet" href="styles.css">
<script src="scripts.js"></script>
```  
  
## Task 0. Reuse and polish your Bootstrap integration  
  
- Copy files from 0x0B. [Implement a design with bootstrap](https://github.com/tayloradam1999/holberton-smiling-school).  
- Finalize if it's not done yet. Use fig files as reference:  
  -  [Homepage](https://intranet.hbtn.io/rltoken/mC4bLymOd9FMoIhiin8iFw)
  -  [Pricing](https://intranet.hbtn.io/rltoken/02-q4kxXjykgU4EAFg0enQ)
  -  [Courses](https://intranet.hbtn.io/rltoken/pk73WmNgM10PiHpp-0R0pQ)  
  
- **Interactions note:**
  -  Web pages must switch to the tablet version when the screen width is 768px
  -  Web pages must switch to the mobile version when the screen width is 576px
  -  button hover/active: ```opacity: 0.9```  
  
## Task 1. Homepage - quotes  
  
- From ```0-homepage.html```, create ```1-homepage.html```.
- Replace static quotes by dynamic loading:
  -  URL: ```https://smileschool-api.hbtn.info/quotes```
  - No static quotes should be present in the quotes section
  - During the Ajax request, a loader should be present
  - Carousel should work like before
- Example of my loader:
```css
HTML:
<div class="loader"></div>

CSS:
.loader {
    border: 10px solid #f3f3f3;
    border-top: 10px solid #C271FF;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;
    margin: auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```
- Final result:
  
![jq1](https://github.com/tayloradam1999/holberton-smiling-school-javascript/blob/main/readme_assets/jq1.gif)  
  
## Task 2. Homepage - popular tutorials  
  
- From ```1-homepage.html```, create ```2-homepage.html```  
- Replace static video cards by dynamic loading:
  - URL: ```https://smileschool-api.hbtn.info/popular-tutorials```
  - No static video cards should be present in the quotes section
  - During the Ajax request, a loader should be present
  -  Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
  -  Don’t forget the responsive part!
- Final result:  
  
![jp2](https://github.com/tayloradam1999/holberton-smiling-school-javascript/blob/main/readme_assets/jq2.gif)  
  
## Task 3. Homepage - latest videos
  
From ```2-homepage.html```, create ```homepage.html```
- Replace static video cards by dynamic loading:
  - URL: ```https://smileschool-api.hbtn.info/latest-videos```
  - No static video cards should be present in the quotes section
  - During the Ajax request, a loader should be present
  -  Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
  -  Don’t forget the responsive part!
- Final result:  
  
![jp3](https://github.com/tayloradam1999/holberton-smiling-school-javascript/blob/main/readme_assets/jq3.gif)  
  
# Task 4. Pricing - quotes
  
From ```0-pricing```, create ```pricing.html```  
- Replace static quotes by dynamic loading: 
  - URL: ```https://smileschool-api.hbtn.info/quotes```
  - No static quotes should be present in the quotes section
  - During the Ajax request, a loader should be present  
  - Carousel should work like before
- Same as the ```homepage.html```
  
# Task 5. Courses
  
- From ```0-courses.html```, create ```courses.html```.  
- Replace static video card by dynamic loading:
  -  URL: ```https://smileschool-api.hbtn.info/courses```
    -  ```GET``` parameters:
	  -  ```q```: search value (in our case, the value of the field KEYWORDS)
	  -  ```topic```: topic filter value (in our case, the value of the field TOPICS)
	  -  ```sort```: order of all courses (in our case, the value of the field SORT BY)
  - No static video cards should be present in the section
  - During the Ajax request, a loader should be present
  - Dropdowns are dynamic (coming from the API):
    -  Topic: list of ```topics```
	- Sort by: list of ```sorts```
  -  Search value should be initialized by the value ```q``` in the API response
  -  The list of video cards is coming from ```courses``` in the API response
  -  API request must be done when:
    -  Search value is changing
	-  A new Topic is selected
	-  A new Sort by is selected
- Final result:  
  
[!jp4](https://github.com/tayloradam1999/holberton-smiling-school-javascript/blob/main/readme_assets/jq3.gif)  
  