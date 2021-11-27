import express from "express"
import {games} from './database';
import {users} from './database';

const app = express();
app.use(express.json());
const port = 8080; // default port to listen

app.get("/test", (req, res) => {
   res.send("UP & RUNNING");
});

// start the Express server
app.listen(port, () => {
   console.log(`server started at http://localhost:${port}`);
});


//GET games/[id]
app.get("/games/:id", function(request, response) {
	const id = parseInt(request.params.id);
	const game = games.find((game) => game.id == id);

	if (game) {
		response.json(game);
	}
	else {
		response.status(404);
		response.send();
	}
});

//GET games
app.get("/games", function(request, response) {
	response.json(games);
});

//POST games
app.post("/games", function (request, response) {

   // Create unique id
   // It is insane slow way to do this, but it works well for this task
   let new_game_id: number = 0;

   while (games.find((game) => game.id == new_game_id)) {
      new_game_id += 1;
   }
   console.log(request.body);

   let game = request.body;

   game.id = new_game_id;

   games.push(game);

   response.json({ id: game.id });
});

//PUT games/[id]
app.put("/games/:id", function (request, response) {

   const id = parseInt(request.params.id);
   const game = request.body;
   for(let i = 0; i < games.length; i++) {
      if (games[i].id == id) {
          games[i] = game;
          games[i].id = id;
      }
   }
   response.send();
});

//DELETE games/[id]
app.delete("/games/:id", function(request, response) {
   const id = parseInt(request.params.id);
   for(let i = 0; i < games.length; i++) {
      if (games[i].id == id) {
            games.splice(i, 1);
            i--;
      }
   }

   for(let i = 0; i < users.length; i++) {
      for(let j = 0; j < users[i].playedGames.length; j++) {
         if (users[i].playedGames[j].id == id) {
            users[i].playedGames.splice(j, 1);
            j--;
         }
      }
   }
   response.send();

});

//GET users:id
app.get("/users/:id", function(request, response) {
	const id = parseInt(request.params.id);
	const user = users.find((user) => user.id == id);

	if (user) {
		response.json(user);
	}
	else {
		response.status(404);
		response.send();
	}
});

//POST users
app.post("/users", function (request, response) {

   // Create unique id
   // It is insane slow way to do this, but it works well for this task
   let new_user_id: number = 0;

   while (users.find((user) => user.id == new_user_id)) {
      new_user_id += 1;
   }
   console.log(request.body);

   let user = request.body;

   user.id = new_user_id;

   users.push(user);

   response.json({ id: user.id });
});

//PUT users/[id]
app.put("/users/:id", function (request, response) {

   const id = parseInt(request.params.id);

   for(let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
         users[i].username = request.body.username;
      }
   }
   response.send();
});

//DELETE users/[id]
app.delete("/users/:id", function(request, response) {
   const id = parseInt(request.params.id);
	for(let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
          users[i].id = null;
          users[i].username = "";
      }
  }
  response.send();
});

//GET users/[id]/games
app.get("/users/:id/games", function(request, response) {
   const id = parseInt(request.params.id);
	let user = users.find((user) => user.id == id);

	if (user) {
		response.json(user.playedGames);
	}
	else {
		response.status(404);
	 	response.send();
	}
});


// //POST users/[id]/games
// app.post("/users/:id/games", function(request, response) {
//    const id = parseInt(request.params.id);
// 	const game = request.body;
// 	game.gameSecondsPlayed = 0;
// 	const userid = users.findIndex((user) => user.id == id);

// 	if (userid != -1) {
// 		let user = users[userid];
// 		users[userid].playedGames.push(game);
// 		response.send();
// 	}
// 	else {
// 		response.status(404);
// 		response.send();
// 	}

// });