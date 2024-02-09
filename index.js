import express from "express";
import bodyParser from "body-parser";



const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */
app.get("/",(req,res)=>{
  res.render("index.ejs")
});
app.get("/about",(req,res)=>{
  res.render("about.ejs")
});
app.get("/contact",(req,res)=>{
  res.render("contact.ejs")
});
app.post("/submit",(req,res)=>{
  const first = {
    fname : req.body["name"],
    femail: req.body["email"],
    dis : req.body ["text"],
  }
  res.render("index.ejs",first);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
