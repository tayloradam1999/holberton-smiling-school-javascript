window.onload = function run() {
	grabData();
}

function grabData() {
	$('.loader').show();
	$.ajax({
		type: 'GET',
		url: 'https://smileschool-api.hbtn.info/quotes',
		dataType: 'json',
		jsonp: false,
		cache: false,
		success: function(data) {
			/* carousel item 1 */
			$("#IDitem1").html("");
			$("#IDitem1").append(
				`<div class="row align-items-center justify-content-center" id="IDitem1">
					<div class="col-3 col-md-2 mr-5">
						<img class="rounded-circle" id ="IDpic1" src="${data[0].pic_url}" height="160" width="160"
							alt="First slide">
					</div>
					<div class="col-md-5 pr-4 mr-4">
						<div class="card-body text-center">
							<h1 class="lead text-white" id="IDtext1">${data[0].text}</p>
							<p class="text-white font-weight-bold" id="IDname1">${data[0].name}</h5>
							<p class="text-white font-italic" id="IDtitle1">${data[0].title}</p>
						</div>
					</div>
				</div>
			</div>`);
			/* carousel item 2 */
			$("#IDitem2").html("");
			$("#IDitem2").append(
				`<div class="row align-items-center justify-content-center" id="IDitem2">
					<div class="col-3 col-md-2 mr-5">
						<img class="rounded-circle" id ="IDpic2" src="${data[1].pic_url}" height="160" width="160"
							alt="First slide">
					</div>
					<div class="col-md-5 pr-4 mr-4">
						<div class="card-body text-center">
							<h1 class="lead text-white" id="IDtext2">${data[1].text}</p>
							<p class="text-white font-weight-bold" id="IDname2">${data[1].name}</h5>
							<p class="text-white font-italic" id="IDtitle2">${data[1].title}</p>
						</div>
					</div>
				</div>
			</div>`);
		},
		complete: function() {
			$('.loader').hide();
		},
		error: function(error) {
			console.log(error);
		}
	});
}