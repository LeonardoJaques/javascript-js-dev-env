webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	__webpack_require__(1);
	
	var _userApi = __webpack_require__(3);
	
	// Populate table of users via Api call.
	
	(0, _userApi.getUsers)().then(function (result) {
	    var usersBody = "";
	
	    result.forEach(function (user) {
	        usersBody += '<tr><td><a href="#" data-id="' + user.id + '" class="deleteUser">Delete</a></td><td>' + user.id + '</td><td>' + user.firstName + '</td><td>' + user.lastName + '</td><td>' + user.email + '</td></tr>';
	    });
	    global.document.getElementById('users').innerHTML = usersBody;
	
	    var deleteLinks = global.document.getElementsByClassName('deleteUser');
	
	    // Must use array. from to create a real array from a DOM collection
	    // getElementByClassName only returns an "array like" object
	
	    Array.from(deleteLinks, function (link) {
	        link.onclick = function (event) {
	            var element = event.target;
	            event.preventDefault();
	            (0, _userApi.deleteUser)(element.attributes['data-id'].value);
	            var row = element.parentNode.parentNode;
	            row.parentNode.removeChild(row);
	        };
	    });
	});
	
	// import numeral from 'numeral';
	//
	// const courseValue = numeral(1000).format('$0,0.00');
	// console.log(`I wold pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getUsers = getUsers;
	exports.deleteUser = deleteUser;
	
	__webpack_require__(4);
	
	var _baseUrl = __webpack_require__(5);
	
	var _baseUrl2 = _interopRequireDefault(_baseUrl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var baseUrl = (0, _baseUrl2.default)();
	
	function getUsers() {
	    return get('users');
	}
	
	function deleteUser(id) {
	    return del('users/' + id);
	}
	
	function get(url) {
	    return fetch(baseUrl + url).then(onSuccess, onError);
	}
	
	//Can't call func delete since reserved word.
	function del(url) {
	    var request = new Request(baseUrl + url, {
	        method: 'DELETE'
	    });
	
	    return fetch(request).then(onSuccess, onError);
	}
	
	function onSuccess(response) {
	    return response.json();
	}
	
	function onError(error) {
	    console.log(error); //eslint-disable-line no-console
	}

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getBaseUrl;
	function getBaseUrl() {
	    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
	}
	
	function getQueryStringParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

/***/ }
]);
//# sourceMappingURL=main.1a7c6a40d1038b8ddc2b.js.map