window.onload = function run() {
	grabData1();
	grabData2();
}

function grabData1() {
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
		error: function(error) {
			console.log(error);
		},
		complete: function() {
			$('.loader').hide();
		}
	});
}

function grabData2() {
	$('.myLoad').show();
	$.ajax({
		type: 'GET',
		url: 'https://smileschool-api.hbtn.info/popular-tutorials',
		dataType: 'json',
		jsonp: false,
		cache: false,
		success: function(data) {
			for (let i = 0; i < data.length; i++) {
				$(`#myCarouselItem${i}`).html("");
				$(`#myCarouselItem${i}`).append(
					`<div class="card col-4 border-0">
						<img class="card-img-top" id="popTutPic1" src="${data[i].thumb_url}" alt="Card image cap">
						<img class="card-img-overlay mx-auto" id="play1" src="images/play.png" alt="play button"
							height="150px" width="150px">
						<div class="card-body">
							<p class="card-title" id="cardTitle1">${data[i].title}</p>
							<p class="card-text" id="cardText1">${data[i][`sub-title`]}</p>
							<img class="rounded-circle" src="${data[i].author_pic_url}" id="profile1" height="25px" width="25px">
							<span class="purp" id="profileName1">${data[i].author}</span>
							<div class="row justify-content-between mx-3">
								<div class="row mt-2" id="myStar${i}">
								</div>
								<p class="purp mt-2">${data[i].duration}</p>
							</div>
						</div>
					</div>`);
				for (let x = 0; x < data[i].star; x++) {
					$(`#myStar${i}`).append(`<img src="images/star_on.png" height="26px" width="26px" alt="star on">`);
				}
				for (let x = 0; x < (5 - data[i].star); x++) {
					$(`#myStar${i}`).append(`<img src="images/star_off.png" height="26px" width="26px" alt="star off">`);
				}
			}
		},
		error: function(error) {
			alert(error);
		},
		complete: function() {
			$('.myLoad').hide();
		}
	});
}