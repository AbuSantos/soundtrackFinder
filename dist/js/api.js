const query =`
	query($pagination: Pagination){
		tvshows(pagination: $pagination){
			name,
			synopsis

	}
	
`

fetch("https://soundtrack-playlists.p.rapidapi.com/", {
	"method": "POST",
	"headers": {
	"content-type": "application/json",
	  "x-rapidapi-host": "soundtrack-playlists.p.rapidapi.com",
		"x-rapidapi-key": "0e6e60719emsh90eb717798dc46fp149843jsnbfca95615a93"
	},
	body:JSON.stringify({	
			"query": query,
			"variables": {
				"pagination": {
					"limit": 12,
					"page": 0
				}
			}
	})
})
.then( response => response.json())
.then( data => {
	console.log(data);
		// data.forEach(tvshow => {
		// 	console.log(tvshow.name);
		// });

	// console.log(data);
})
.catch(err => {
	console.error(err);
});


