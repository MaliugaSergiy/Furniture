	$(document).ready(function() {

		$("#my-menu").mmenu({
			"extensions": [
				"pagedim-white",
				"fx-menu-fade",
				//"listview-justify",
				"multiline",
				"shadow-page",
				//"popup"
			],
			"offCanvas": {
				"position": "left",
				//"zposition": "front"
			},
			"counters": true,
			"navbars": [{
					"position": "top",
					"content": [
						"searchfield"
					]
				},
				{
					"position": "top"
				},
				{
					"position": "bottom",
					"content": [
						"<a class='fa fa-envelope' href='#/'></a>",
						"<a class='fa fa-twitter' href='#/'></a>",
						"<a class='fa fa-facebook' href='#/'></a>"
					]
				}
			]

		});

		var API = $("#my-menu").data("mmenu");
		$(window).on("resize", function() {
			API.close();
		});


		$('[data-toggle="tooltip"]').tooltip();


	})