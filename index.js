import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let workItems = [];
let todayItems = [];

app.get("/", (req, res) => {
	res.redirect("/today");
});

app.get("/today", (req, res) => {
	res.render("today.ejs", {
		todayListItems: todayItems
	});
})

app.get("/work", (req, res) => {
	res.render("work.ejs", {
		workListItems: workItems
	});
})

app.post("/work", (req, res) => {
	let item = req.body.newItem;
	workItems.push(item);
	res.redirect("/work");
})

app.post("/today", (req, res) => {
	let item = req.body.newItem;
	todayItems.push(item);
	res.redirect("/today");
})

app.listen(port, () => {
	console.log(`The app is running on port ${port}`);
});