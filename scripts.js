window.onload = function run() {
	grabData1();
	grabData2();
	grabData3();
	grabData4();
	queryForm();
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

function grabData3() {
	$('.Spinny').show();
	$.ajax({
		type: 'GET',
		url: 'https://smileschool-api.hbtn.info/latest-videos',
		dataType: 'json',
		jsonp: false,
		cache: false,
		success: function(data) {
			for (let i = 0; i < data.length; i++) {
				$(`#myCarousel${i}`).html("");
				$(`#myCarousel${i}`).append(
					`<div class="card col-4 border-0">
					<img class="card-img-top" src="${data[i].thumb_url}" alt="Card image cap">
					<img class="card-img-overlay mx-auto" src="images/play.png" alt="play button"
						height="150px" width="150px">
					<div class="card-body">
						<p class="card-title">${data[i].title}</p>
						<p class="card-text">${data[i][`sub-title`]}.</p>
						<img class="rounded-circle" src="${data[i].author_pic_url}" height="25px" width="25px">
						<span class="purp">${data[i].author}</span>
						<div class="row justify-content-between mx-3">
							<div class="row mt-2" id="Rating${i}">
							</div>
							<p class="purp mt-2">${data[i].duration}</p>
						</div>
					</div>
				</div>`);
				for (let x = 0; x < data[i].star; x++) {
					$(`#Rating${i}`).append(`<img src="images/star_on.png" height="26px" width="26px" alt="star on">`);
				}
				for (let x = 0; x < (5 - data[i].star); x++) {
					$(`#Rating${i}`).append(`<img src="images/star_off.png" height="26px" width="26px" alt="star off">`);
				}
			}
		},
		error: function(error) {
			alert(error);
		},
		complete: function() {
			$('.Spinny').hide();
		}
	})
}

function grabData4() {
	$('.TheLoad').show();
	$.ajax({
		type: 'GET',
		url: 'https://smileschool-api.hbtn.info/quotes',
		dataType: 'json',
		jsonp: false,
		cache: false,
		success: function(data) {
			for (let i = 0; i < data.length; i++) {
				$(`#TheCarry${i}`).html("");
				$(`#TheCarry${i}`).append(
					`<div class="col-3 col-md-2 mr-5">
					<img class="rounded-circle" src="${data[i].pic_url}" height="160"
						width="160" alt="First slide">
				</div>
				<div class="col-md-5 pr-4 mr-4">
					<div class="card-body text-center">
						<h1 class="lead text-white" id="TheText1">${data[i].text}</h1>
						<p class="text-white font-weight-bold" id="TheName1">${data[i].name}</h5>
						<p class="text-white font-italic" id="TheTitle1">${data[i].title}</p>
					</div>
				</div>`);
			}
		},
		error: function(error) {
			alert(error);
		},
		complete: function() {
			$('.TheLoad').hide();
		}
	})
}

function queryForm() {
	$.ajax({
		type: 'GET',
		url: 'https://smileschool-api.hbtn.info/courses',
		success: function(data) {
			$("#TOPIC").html("");
			data.topics.forEach(function(topicItem, topicIndex) {
				$("#TOPIC").append(
				`<option ${topicIndex === 0 ? "selected" : ""}>
				${topicItem}</option>`);
			});
			$("#SORT").html("");
			data.sorts.forEach(function(sortItem, sortIndex) {
				$("#SORT").append(
					`<option ${sortIndex === 0 ? "selected" : ""} value="sortItem">
					${sortItem}</option>`);
			});
			grabData5($(`#search`).val(), $("#TOPIC").val(), $("#SORT").val());
		}
	})
}

function grabData5(q, topic, sort) {
	$.ajax({
		type: 'GET',
		url: `https://smileschool-api.hbtn.info/courses?q=${q}&topic=${topic}&sort=${sort}`,
		success: function(data) {
			for (let i = 0; i < data.length; i++) {
				$("#courses").html("");
				$("#courses").append(
					`<div class="card col-lg-3 col-md-4 col-12 border-0">
						<img class="card-img-top" src="${data[i].thumb_url}" alt="">
						<div class="card-body">
							<h1 class="card-title lead font-weight-bold">${data[i].title}</h1>
							<p class="card-text text-secondary">${data[i]["sub-title"]}</p>
							<div class="row">
								<img class="rounded-circle ml-3" src="${data[i].author_pic_url}" height="25px" width="25px"
									alt="">
								<img class="card-img-overlay mx-auto mt-5 mt-md-0 mb-auto" src="images/play.png" alt="">
								<p class="ml-3 purple">${data[i].name}</p>
							</div>
							<div class="row justify-content-between mx-3">
								<div class="row mt-2" id="Rating${i}">
								</div>
								<p class="purp mt-2">${data[i].duration}</p>
							</div>
						</div>
					</div>`);
				}
			},
		error: function(error) {
			alert(error);
		},
		complete: function() {
			// $('').hide();
		}
	})
	$("#myForm").change(function() {
		grabData5($("#search").val(), $("#TOPIC").val(), $("#SORT").val());
	})
}
