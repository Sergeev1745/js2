var arr = [];
for (var i = 0; i < 5; i++) {
	arr[i] = prompt('введите имя');
	
}
console.log(arr);
var username = prompt('введите имя пользователя');
console.log(arr.indexOf(username), username);

if (username == ''){
	alert('Ошибка входа')
} else if (arr.indexOf(username) >= 0){
	alert(username + ', Вы успешно вошли в систему')} else {
		alert('Ошибка входа');
	}



