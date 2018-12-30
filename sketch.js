let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117, 1123, 1129, 1151, 1153, 1163, 1171, 1181, 1187, 1193, 1201, 1213, 1217, 1223, 1229, 1231, 1237, 1249, 1259, 1277, 1279, 1283, 1289, 1291, 1297, 1301, 1303, 1307, 1319, 1321, 1327, 1361, 1367, 1373, 1381, 1399, 1409, 1423, 1427, 1429, 1433, 1439, 1447, 1451, 1453, 1459, 1471, 1481, 1483, 1487, 1489, 1493, 1499, 1511, 1523, 1531, 1543, 1549, 1553, 1559, 1567, 1571, 1579, 1583, 1597, 1601, 1607, 1609, 1613, 1619, 1621, 1627, 1637, 1657, 1663, 1667, 1669, 1693, 1697, 1699, 1709, 1721, 1723, 1733, 1741, 1747, 1753, 1759, 1777, 1783, 1787, 1789, 1801, 1811, 1823, 1831, 1847, 1861, 1867, 1871, 1873, 1877, 1879, 1889, 1901, 1907, 1913, 1931, 1933, 1949, 1951, 1973, 1979, 1987, 1993, 1997, 1999, 2003, 2011, 2017, 2027, 2029, 2039, 2053, 2063, 2069, 2081, 2083, 2087, 2089, 2099, 2111, 2113, 2129, 2131, 2137, 2141, 2143, 2153, 2161, 2179, 2203, 2207, 2213, 2221, 2237, 2239, 2243, 2251, 2267, 2269, 2273, 2281, 2287, 2293, 2297, 2309, 2311, 2333, 2339, 2341, 2347, 2351, 2357, 2371, 2377, 2381, 2383, 2389, 2393, 2399, 2411, 2417, 2423, 2437, 2441, 2447, 2459, 2467, 2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549, 2551, 2557, 2579, 2591, 2593, 2609, 2617, 2621, 2633, 2647, 2657, 2659, 2663, 2671, 2677, 2683, 2687, 2689, 2693, 2699, 2707, 2711, 2713, 2719, 2729, 2731, 2741, 2749, 2753, 2767, 2777, 2789, 2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843, 2851, 2857, 2861, 2879, 2887, 2897, 2903, 2909, 2917, 2927, 2939, 2953, 2957, 2963, 2969, 2971, 2999, 3001, 3011, 3019, 3023, 3037, 3041, 3049, 3061, 3067, 3079, 3083, 3089, 3109, 3119, 3121, 3137, 3163, 3167, 3169, 3181, 3187, 3191, 3203, 3209, 3217, 3221, 3229, 3251, 3253, 3257, 3259, 3271, 3299, 3301, 3307, 3313, 3319, 3323, 3329, 3331, 3343, 3347, 3359, 3361, 3371, 3373, 3389, 3391, 3407, 3413, 3433, 3449, 3457, 3461, 3463, 3467, 3469, 3491, 3499, 3511, 3517, 3527, 3529, 3533, 3539, 3541, 3547, 3557, 3559, 3571, 3581, 3583, 3593, 3607, 3613, 3617, 3623, 3631, 3637, 3643, 3659, 3671, 3673, 3677, 3691, 3697, 3701, 3709, 3719, 3727, 3733, 3739, 3761, 3767, 3769, 3779, 3793, 3797, 3803, 3821, 3823, 3833, 3847, 3851, 3853, 3863, 3877, 3881, 3889, 3907, 3911, 3917, 3919, 3923, 3929, 3931, 3943, 3947, 3967, 3989, 4001, 4003, 4007, 4013, 4019, 4021, 4027, 4049, 4051, 4057, 4073, 4079, 4091, 4093, 4099, 4111, 4127, 4129, 4133, 4139, 4153, 4157, 4159, 4177, 4201, 4211, 4217, 4219, 4229, 4231, 4241, 4243, 4253, 4259, 4261, 4271, 4273, 4283, 4289, 4297, 4327, 4337, 4339, 4349, 4357, 4363, 4373, 4391, 4397, 4409, 4421, 4423, 4441, 4447, 4451, 4457, 4463, 4481, 4483, 4493, 4507, 4513, 4517, 4519, 4523, 4547, 4549, 4561, 4567, 4583, 4591, 4597, 4603, 4621, 4637, 4639, 4643, 4649, 4651, 4657, 4663, 4673, 4679, 4691, 4703, 4721, 4723, 4729, 4733, 4751, 4759, 4783, 4787, 4789, 4793, 4799, 4801, 4813, 4817, 4831, 4861, 4871, 4877, 4889, 4903, 4909, 4919, 4931, 4933, 4937, 4943, 4951, 4957, 4967, 4969, 4973, 4987, 4993, 4999, 5003, 5009, 5011, 5021, 5023, 5039, 5051, 5059, 5077, 5081, 5087, 5099, 5101, 5107, 5113, 5119, 5147, 5153, 5167, 5171, 5179, 5189, 5197, 5209, 5227, 5231, 5233, 5237, 5261, 5273, 5279, 5281, 5297, 5303, 5309, 5323, 5333, 5347, 5351, 5381, 5387, 5393, 5399, 5407, 5413, 5417, 5419, 5431, 5437, 5441, 5443, 5449, 5471, 5477, 5479, 5483, 5501, 5503, 5507, 5519, 5521, 5527, 5531, 5557, 5563, 5569, 5573, 5581, 5591, 5623, 5639, 5641, 5647, 5651, 5653, 5657, 5659, 5669, 5683, 5689, 5693, 5701, 5711, 5717, 5737, 5741, 5743, 5749, 5779, 5783, 5791, 5801, 5807, 5813, 5821, 5827, 5839, 5843, 5849, 5851, 5857, 5861, 5867, 5869, 5879, 5881, 5897, 5903, 5923, 5927, 5939, 5953, 5981, 5987, 6007, 6011, 6029, 6037, 6043, 6047, 6053, 6067, 6073, 6079, 6089, 6091, 6101, 6113, 6121, 6131, 6133, 6143, 6151, 6163, 6173, 6197, 6199, 6203, 6211, 6217, 6221, 6229, 6247, 6257, 6263, 6269, 6271, 6277, 6287, 6299, 6301, 6311, 6317, 6323, 6329, 6337, 6343, 6353, 6359, 6361, 6367, 6373, 6379, 6389, 6397, 6421, 6427, 6449, 6451, 6469, 6473, 6481, 6491, 6521, 6529, 6547, 6551, 6553, 6563, 6569, 6571, 6577, 6581, 6599, 6607, 6619, 6637, 6653, 6659, 6661, 6673, 6679, 6689, 6691, 6701, 6703, 6709, 6719, 6733, 6737, 6761, 6763, 6779, 6781, 6791, 6793, 6803, 6823, 6827, 6829, 6833, 6841, 6857, 6863, 6869, 6871, 6883, 6899, 6907, 6911, 6917, 6947, 6949, 6959, 6961, 6967, 6971, 6977, 6983, 6991, 6997, 7001, 7013, 7019, 7027, 7039, 7043, 7057, 7069, 7079, 7103, 7109, 7121, 7127, 7129, 7151, 7159, 7177, 7187, 7193, 7207, 7211, 7213, 7219, 7229, 7237, 7243, 7247, 7253, 7283, 7297, 7307, 7309, 7321, 7331, 7333, 7349, 7351, 7369, 7393, 7411, 7417, 7433, 7451, 7457, 7459, 7477, 7481, 7487, 7489, 7499, 7507, 7517, 7523, 7529, 7537, 7541, 7547, 7549, 7559, 7561, 7573, 7577, 7583, 7589, 7591, 7603, 7607, 7621, 7639, 7643, 7649, 7669, 7673, 7681, 7687, 7691, 7699, 7703, 7717, 7723, 7727, 7741, 7753, 7757, 7759, 7789, 7793, 7817, 7823, 7829, 7841, 7853, 7867, 7873, 7877, 7879, 7883, 7901, 7907, 7919]

let canv
let canv_div
let is_3d = false
let rotate_mouse_pos
// core vars
let points = []
let points2 = []
let my_gyroscope

// html vars
let output_method
let htmlspiral_len
let htmlradius_delta
let htmldelta_beauty
let htmlamp
let display
let logger
let logger_lbl
let tamplate1
let tamplate2
let tamplate3

function flex_it(container){
	container.style('padding', '5px')
	container.style('display', 'flex')
	container.style('flex-flow', 'row wrap')
	container.style('width', '290px')
	container.style('align-items', 'center')
	container.style('justify-content', 'space-around')
	container.style('margin', '0')
	container.style('box-shadow', '0px 1px 4px 0px black')
}


function get_pair(pos, len) {
	return [
			pos.copy().rotate(radians(+90)).setMag(len).add(pos),
			pos.copy().rotate(radians(-90)).setMag(len).add(pos)
	]
}

function sig(x) {
	return -1 / 1+pow(2.718281828, -x)
}


// Создание спирали
function generate_spiral(spiral_len = 3, radius_delta = 0.5, delta_beauty = PI/64, amp=1) {
	let result = []

	let radius = 1
	for (let phi = 0; phi < spiral_len*TWO_PI; phi += delta_beauty) {
		radius+=radius_delta
		
		let x = sin(phi*amp) * radius
		let y = cos(phi*amp) * radius

		result.push(createVector(x,y))
	}

	return result
}
Number.prototype.pad = function(size) {
    let s = String(this);
    while (s.length < (size || 2))
    	{s = "0" + s;}
    return s;
}

function on_update(e) {
	// alpha 	 +0 360
	// beta 	 +0 180
	// gamma 	 -90 90
	my_gyroscope = createVector(int(e.alpha), int(e.beta), int(e.gamma))
}


function generate_new_spiral() {
	
	htmlspiral_len_s.html(`длина ${htmlspiral_len.value().pad(5)}`)
	htmlradius_delta_s.html(`радиус ${htmlradius_delta.value().pad(5)}`)
	htmldelta_beauty_s.html(`▲ ${(int(htmldelta_beauty.value() * 1000) / 1000).pad(5)}`)
	htmlamp_s.html(`▲▲ ${htmlamp.value().pad(5)}`)

	points = generate_spiral(htmlspiral_len.value(), htmlradius_delta.value(), htmldelta_beauty.value(), htmlamp.value())
}

function htmlsetup() {
	
	function bigger_check_box(checkb) {
		checkb.elt.children[0].style['-webkit-transform'] = 'scale(1.8)'
		checkb.elt.style['padding'] = 'scale(1.8)'
		return checkb
	}
	function newline(title='') {
		return createP(title).style('padding', '0').style('margin', '0')
	}
	
	// Опции
	let flags_div = createDiv('ФЛАГИ')

	rotate_or_not = bigger_check_box(createCheckbox('use gyro', true))
	double_rotation = bigger_check_box(createCheckbox('use 2x gyro', true))
	color_switch = bigger_check_box(createCheckbox('switch color', true))
	randomness = bigger_check_box(createCheckbox('random dance'))
	randomness2 = bigger_check_box(createCheckbox('zoooom'))
	randomness3 = bigger_check_box(createCheckbox('zoom & dance'))

	rotate_or_not.parent(flags_div)
	double_rotation.parent(flags_div)
	color_switch.parent(flags_div)
	randomness.parent(flags_div)
	randomness2.parent(flags_div)
	randomness3.parent(flags_div)

	// Enable logger?
	// -------------------------
	// logger_lbl = createInput('---');
	// logger = createButton('logger')
	// logger.mouseClicked(() => {
	// 	let temp = `${htmlspiral_len.value()} ${htmlradius_delta.value()} ${htmldelta_beauty.value()} ${htmlamp.value()}`
	// 	logger_lbl.value(temp)
	// })
	// display = createInput()
	// display.hide()
	


	output_method_div = createDiv()
	flex_it(output_method_div)
	output_method = createRadio('choose output method')
	output_method.parent(output_method_div)
	//====== text      =================
	output_method.option('vertex', 'vertex')
	output_method.option('ellipse', 'ellipse')
	output_method.option('ellipse_with_lines', 'ellipse_with_lines')
	output_method.option('prime', 'prime')
	output_method.option('prime-corner', 'prime-corner')
	output_method.option('el-color', 'el-color')
	output_method.option('el-b&w', 'el-b&w')
	output_method.option('triangle8', 'triangle8')
	output_method.option('triangle8_color', 'triangle8_color')
	output_method.option('to the mouse', 'to the mouse')
	output_method.option('cardioid', 'cardioid')
	output_method.option('3D', '3D')
	output_method.changed(() => {
		if(output_method.value() == '3D'){
			noCanvas()
			let canv = createCanvas(width, height, WEBGL)
			canv.parent('myContainer')
			is_3d = true
		}else{
			if (is_3d){
				noCanvas()
				let canv = createCanvas(width, height)
				canv.parent('myContainer')
			}
			is_3d = false
		}
	})
	// pick selected
	output_method.value('ellipse')


	let menuha = createDiv()
	flags_div.parent(menuha)
	output_method_div.parent(menuha)
	menuha.elt.style['display'] = 'flex'

	menuha.elt.style['flex-direction'] = 'flex'
	menuha.elt.style['align-items'] = 'stretch'
	menuha.elt.style['flex-flow'] = 'row wrap'
	menuha.elt.style['align-content'] = 'flex-start'
	menuha.elt.style['padding'] = '5px'


	// Повороты
	newline()

	htmlspiral_len_s = createSpan('длина');
	htmlspiral_len_s.style('width', '200px')
	htmlspiral_len  = createSlider(1, 30, 2, .01);
	newline()

	htmlradius_delta_s = createSpan('радиус');
	htmlradius_delta_s.style('width', '200px')
	htmlradius_delta  = createSlider(0.1, 3, 0.5, .01);
	newline()

	htmldelta_beauty_s = createSpan('▲ ');
	htmldelta_beauty_s.style('width', '200px')
	htmldelta_beauty  = createSlider( PI/256, PI, PI/64, PI/128);
	newline()

	htmlamp_s = createSpan('▲▲ ');
	htmlamp_s.style('width', '200px')
	htmlamp  = createSlider( 0.1, 5, 1, 0.01);
	newline()


	// повороты css
	htmlspiral_len.input(generate_new_spiral) ; 	htmlspiral_len.style('width', '300px')	;	htmlspiral_len_s.style('padding', '0');	htmlspiral_len_s.style('margin', '0')
	htmlradius_delta.input(generate_new_spiral) ; 	htmlradius_delta.style('width', '300px');	htmlradius_delta_s.style('padding', '0');	htmlradius_delta_s.style('margin', '0')
	htmldelta_beauty.input(generate_new_spiral) ; 	htmldelta_beauty.style('width', '300px');	htmldelta_beauty_s.style('padding', '0');	htmldelta_beauty_s.style('margin', '0')
	htmlamp.input(generate_new_spiral) ; 			htmlamp.style('width', '300px')	;			htmlamp_s.style('padding', '0');	htmlamp_s.style('margin', '0')


	// Шаблоны спиралей
	newline()
	function makeTemplate(name, nums, x=0, y=0) {
		nums = nums.split(' ')
		let button = createButton(name)
		button.style('padding', '1')
		button.style('margin', '0')
		if (x != 0 && y != 0){
			button.position(x, y)
		}
		button.mouseClicked(() => {
			htmlspiral_len.value(float(nums[0]))
			htmlradius_delta.value(float(nums[1]))
			htmldelta_beauty.value(float(nums[2]))
			htmlamp.value(float(nums[3]))
			generate_new_spiral()
		})
		return button
	}
	let b1 = makeTemplate('1',  '10.64 3.01 1.50998078788564 1.0'	, 1*25,1) // крестовина
	b1.elt.click()
	makeTemplate('2',  '28.13 0.41 0.45405831321415 1.0'	, 2*25,1) // спираль
	makeTemplate('3',  '64.22 0.18 0.65040785406352 1.61'	, 3*25,1) // 6 палок
	makeTemplate('4',    '17.53 2.40 1.50943709527947 2.09'	, 4*25,1) // palka
	makeTemplate('5', '94.14 0.51 1.06765062836841 4.61'	, 5*25,1) // соняшник
}
function setup(){
	// Настройки
	my_gyroscope = createVector(0,0,0)
	let canv = createCanvas(400, 400)
	canv.parent('myContainer')
	rotate_mouse_pos = createVector(1,5)
	points = generate_spiral()
	colorMode(HSB)
	htmlsetup()
	window.addEventListener('deviceorientation', on_update)

	// make points2
	for (let phi = 0; phi < PI*2; phi+=PI/64) {
		let rad = -1
		if (phi < PI) {
			rad = map(phi, 0, PI, 0, 100)
		}else{
			rad = map(phi, PI, 2*PI, 100, 0)
		}
		points2.push(createVector(cos(phi) * rad, sin(phi) * rad))
	}
}

function mouseDragged(){
	if ( (0 < mouseY && mouseY < height) && (0 < mouseX && mouseX < width)){
		rotate_mouse_pos.x = mouseX
		rotate_mouse_pos.y = mouseY
	}
}
function mouseClicked(){
	if ( (0 < mouseY && mouseY < height) && (0 < mouseX && mouseX < width)){
		rotate_mouse_pos.x = mouseX
		rotate_mouse_pos.y = mouseY
	}
}

function opints_check() {
	

	if (color_switch.checked())
		colorMode(HSL)
	else colorMode(HSB)


	if (randomness.checked()) {
		points = points.map(p => {
			return p.add(p5.Vector.random2D())
		})
	}

	if (randomness2.checked()) {
		points = points.map(p => {
			return p.mult(1.01)
		})
	}

	if (randomness3.checked()) {
		points = points.map(p => {
			return p.rotate(0.02).add(p5.Vector.random2D().mult(0.2))
		})
	}
}

function draw(){
	background(2,10,4)
	translate(width/2, height/2)
	stroke(255)
	opints_check()

	let rot_names= ['vertex','ellipse','ellipse_with_lines','prime','prime-corner','el-color','el-b&w','triangle8','triangle8_color']
	if (rot_names.includes(output_method.value())) {

		if (rotate_or_not.checked()) {
			if (my_gyroscope.x != 0){

				if (double_rotation.checked()){
					rotate(radians(my_gyroscope.x*2))
				}else{
					rotate(radians(my_gyroscope.x))
				}
			}
		}else{
			if (!is_3d)	rotate(radians(rotate_mouse_pos.x))
		}

		// 							             _               _                    _   _               _
		// 							            | |             | |                  | | | |             | |
		// 							  ___  _   _| |_ _ __  _   _| |_   _ __ ___   ___| |_| |__   ___   __| |
		// 							 / _ \| | | | __| '_ \| | | | __| | '_ ` _ \ / _ \ __| '_ \ / _ \ / _` |
		// 							| (_) | |_| | |_| |_) | |_| | |_  | | | | | |  __/ |_| | | | (_) | (_| |
		// 							 \___/ \__,_|\__| .__/ \__,_|\__| |_| |_| |_|\___|\__|_| |_|\___/ \__,_|
		// 							                | |
		// 							                |_|

		if (output_method.value() == 'vertex') {
			push()

				noFill()
				stroke(255)
				beginShape()
				points.forEach(p => {
				    vertex(p.x, p.y)
				})
				endShape()
			pop()
		}
		if (output_method.value() == 'ellipse') {

			push()
				noFill()
				stroke(255)
				points.forEach(p => {
					let d = dist(0, 0, p.x, p.y) + my_gyroscope.y*2
					stroke(d, 100, 50)
					fill(d, 100, 50)
					ellipse(p.x, p.y, 5, 5)
				})
			pop()
		}
		if (output_method.value() == 'ellipse_with_lines') {

			push()
				
				noFill()
				stroke(255)
				points.forEach((currentValue, index, array) => {

					// линия
					if (index % 4 == 0){
						stroke(255, 50)
						noFill()
						line(0,0,currentValue.x,currentValue.y);
					}

					// цвет
					let d = dist(0, 0, currentValue.x, currentValue.y) + my_gyroscope.y*2
					// stroke(d, 100, 50)
					fill(d, 100, 50)
					
					// эллипс
					noStroke()
					ellipse(currentValue.x, currentValue.y, 5, 5)

				})
			pop()
		}
		if (output_method.value() == 'prime') {
			push()

			points.map((curr, index, arr) => {
				if (primes.includes(index)){
					let p = curr
					line(0,0, p.x, p.y)
				}
			})
			pop()
		}
		if (output_method.value() == 'prime-corner') {
			push()

			points.map((curr, index, arr) => {
				if (primes.includes(index)){
					let p = curr
					line(width/2, height/2, p.x, p.y)
				}
				ellipse(curr.x, curr.y, 5, 5)
			})
			pop()
		}
		if (output_method.value() == 'el-color') {
			push()


			noStroke()
			points.map((curr, index, arr) => {
				let d = (dist(0, 0, curr.x, curr.y)*20) %360
				fill(d, 100, 50)
				ellipse(curr.x, curr.y, 5, 5)
			})

			pop()
		}
		if (output_method.value() == 'el-b&w') {
			push()


			noStroke()
			points.map((curr, index, arr) => {
				let d = (dist(0, 0, curr.x, curr.y)*20) %255
				fill(d)
				ellipse(curr.x, curr.y, 5, 5)
			})

			pop()
		}
		if (output_method.value() == 'el-b&w') {
			push()


			noStroke()
			points.map((curr, index, arr) => {
				let d = (dist(0, 0, curr.x, curr.y)*20) %255
				fill(d)
				ellipse(curr.x, curr.y, 5, 5)
			})

			pop()
		}
		if (output_method.value() == 'triangle8') {

			push()


				noStroke()
				fill(255)
				points.map((curr, index, arr) => {

					if (index%5 == 0){
						let [pos1, pos2] = get_pair(curr,2)
						triangle(pos1.x, pos1.y, pos2.x, pos2.y, 0,0)
					}
				})

			pop()
		}
		if (output_method.value() == 'triangle8_color') {

			push()

				points.map((curr, index, arr) => {

					if (index%5 == 0){
						let [pos1, pos2] = get_pair(curr,2)
						
						if (pos1.y > 0 && pos2.y > 0){
							stroke('red')
						}
						else if (pos1.y < 0 && pos2.y < 0){
							stroke('green')
						}
						else if (pos1.x > 0 && pos1.y < 0){
							stroke('blue')
						}
						else{
							stroke('white')
						}

						triangle(pos1.x, pos1.y, pos2.x, pos2.y, 0,0)
					}
				})

			pop()
		}

	}

	if (output_method.value() == 'to the mouse') {

		push()
			translate(width/-2, height/-2)

			let d = dist(mouseX, mouseY, rotate_mouse_pos.x, rotate_mouse_pos.y)

			let mouse_pos = createVector(mouseX, mouseY).sub(rotate_mouse_pos)
			if (100 < d && d < 150){
				mouse_pos.setMag(2)
				rotate_mouse_pos.add(mouse_pos)
			}else if (5 < d && d < 100){
				mouse_pos.setMag(1)
				rotate_mouse_pos.add(mouse_pos)
			}else if (0 < d && d < 5){
				// pass
			}else{
				mouse_pos.setMag(3)
				rotate_mouse_pos.add(mouse_pos)
			}

			ellipse(rotate_mouse_pos.x, rotate_mouse_pos.y, 6, 6)
				translate(rotate_mouse_pos.x, rotate_mouse_pos.y)
				rotate(radians(frameCount))
				translate(-rotate_mouse_pos.x, -rotate_mouse_pos.y)
			rect(rotate_mouse_pos.x, rotate_mouse_pos.y, 23, 23)
		pop()
	}
	if (output_method.value() == 'cardioid') {

		text(my_gyroscope.z, 100,100)
		push()
			translate(0,-100)
			rotate(-PI/2)

			if (rotate_or_not.checked()) {
				// gyroscope
				let gyroscope_value = my_gyroscope.z
				if (double_rotation.checked())
					scale(map(gyroscope_value, -90, 90, 0.1*2, 3*2))
				else
					scale(map(gyroscope_value, -90, 90, 0.1, 3))

			}else{
				// mouse
				scale(map(rotate_mouse_pos.x, 0, width, 1, 3))
			}
			
			noStroke()
			points2.forEach(guy => {

				fill('red')
				ellipse(guy.x, guy.y, 1, 1)
			})

		pop()
	}
	if (output_method.value() == '3D') {

		fill(255, 30)
		stroke('blue')
		push()
			translate(width/-2, height/-2)



			if (rotate_or_not.checked()) {
				// gyroscope
				let gyroscope_value = my_gyroscope.z
				if (double_rotation.checked())
					scale(map(gyroscope_value, -90, 90, 1, 3*2))
				else
					scale(map(gyroscope_value, -90, 90, 1, 3*2))
			}else{
				// mouse
				scale(map(rotate_mouse_pos.x, 0, height, 1, 3))
			}


			rotateX(radians(frameCount*0.2))
			rotateZ(sig(mouseX)) // automatic sigmoid

			box(30)
		pop()
	}

}