import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let items = [];

app.get("/", (req, res) => {
	res.render("index.ejs", {
		listItems: items
	});
});

app.post("/", (req, res) => {
	// console.log(req.body.newItem);

	let item = req.body.newItem;
	items.push(item);
	res.redirect("/");
})

app.listen(port, () => {
	console.log(`The app is running on port ${port}`);
});