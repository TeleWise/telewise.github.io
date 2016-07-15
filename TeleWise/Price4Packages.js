
var data_arrm=[5, 20, 50, 100, 300, 500, 1024, 2048, 3072, 5120, 10240, 20480];
var price_arrm=[4, 12, 25, 35, 85, 105, 160, 260, 330, 430, 650, 1250];

var data_arrc=[25,50,100,300,500,1024,2048,3072,5120,10240,20480];
var price_arrc=[6,10,19,55,85,149,245,299,399,549,1.099];

var data_arrt=[25,50,100,250,500,1024,2048];
var price_arrt=[7.25,14.5,29,39,69,99,139];
var br="</br>";
var data_arrv = [20 , 60 , 100 , 250 , 15 , 30 , 100 , 250 , 500 , 1024 , 2048 , 3072 , 5120 , 10240 , 20480];
var price_arr= [5 , 6 , 10 , 20 , 9 , 12 , 29 , 59 , 99 , 149 , 249 , 299 , 399 , 599 , 999];
//main method
function main()
{
	var validity = document.input_user.day.value;

	var data ;

	data = document.input_user.amountOfData.value;

	if(data<=0){
		alert("Dont be silly");
	//method that deals with packages
}else{
		//if(){
			vodacom(data , validity);
		//}else if(){
			telkom(data,validity);
		//}else if(){
			cellC(data,validity);
		//}else if(){
			mtn(data, validity);
		//}
		//else{
			//document.write("Dont be rude!!!!");
		//}
}
}

//method to deal with vodacom packages
function vodacom(data , validity)
{
	console.log("Vodacom");
	//embedded packages into arrays
	//to avoid the use of a 3d array I have made seperate arrays
	//to each hold different component of the package
	//and the 0th index of array A will correspond to the 0th
	//of array B
	//e.g. price_arr[0] is for the data_arrv[0] where its validity_arr[0]
	//var data_arrv = [20 , 60 , 100 , 250 , 15 , 30 , 100 , 250 , 500 , 1024 , 2048 , 3072 , 5120 , 10240 , 20480];
	var validity_arr = 30;//[1 , 1 , 1 , 1 , 30 , 30 , 30 , 30 , 30 , 30 , 30 , 30 , 30 , 30 , 30];

	var i=0;
	if(data>0 && data<=data_arrv[i]){
		document.write("Best Vodacom package :<br>Data(mb) : "+data_arrv[i]+"<br>Valid for : "+validity+" day(s)"+"<br>Price(R) : "+price_arr[i]+br);

	}
	else{
		for(i=1;i<data_arrv.length;i++){
				if(data_arrv[i]==data){
					document.write("Best Vodacom package :<br>Data(mb) : "+data_arrv[i]+"<br>Valid for : "+validity+" day(s)"+"<br>Price(R) : "+price_arr[i]+br);
					break;
				}else if(data>data_arrv[i-1] && data<data_arrv[i]){
					document.write("Best Vodacom package :<br>Data(mb) : "+data_arrv[i]+"<br>Valid for : "+validity+" day(s)"+"<br>Price(R) : "+price_arr[i]+br);
					break;
				}
		}
	}
}


/*
This method deals with the Telkom package...when a user chooses telkom mobile as their priority network, it calculates the best telkom package a user can choose which fits their needs given the details they provide to the system.
*/
function telkom(data, validity){
	/*var data_arrt=[25,50,100,250,500,1024,2048];
	var price_arrt=[7.25,14.5,29,39,69,99,139];
	*/
	var validityt=30;

	var k=0;
	if(data>0 && data<=data_arrt[k]){
			console.log("runing if");
			document.write(br+"Best Telkom mobile package :<br>Data(mb) : "+data+"<br>Valid for : "+validityt+" day(s)"+"<br>Price(R) : "+price_arrt[k]+br);

		}
	else{
		for(k=1;k<data_arrt.length;k++){
			console.log("running else");
			if(data_arrt[k]==data){
				document.write(br+"Best Telkom mobile package :<br>Data(mb) : "+data+"<br>Valid for : "+validityt+" day(s)"+"<br>Price(R) : "+price_arrt[k]+br);
				break;
			}
			else if(data>data_arrt[k-1] && data<data_arrt[k]){
				document.write(br+"Best Telkom mobile package :<br>Data(mb) : "+data_arrt[k]+"<br>Valid for : "+validityt+" day(s)"+"<br>Price(R) : "+price_arrt[k]+br);
					break;
			}
		}
	}
}
/*
This method deals with the Cell C package...when a user chooses Cell C as their priority network, it calculates the best Cell C package a user can choose which fits their needs given the details they provide to the system.
*/
function cellC(data,validity){
	/*var data_arrc=[25,50,100,300,500,1024,2048,3072,5120,10240,20480];
	var price_arrc=[6,10,19,55,85,149,245,299,399,549,1.099];
	*/
	var validityc=30;
	console.log("Hey buddy");
	var l=0;
	if(data>0 && data<=data_arrc[l]){
			console.log("runing if");
			document.write(br+"Best Cell C package :<br>Data(mb) : "+data_arrc[l]+"<br>Valid for : "+validityc+" day(s)"+"<br>Price(R) : "+price_arrc[l]+br);

		}
	else{
		for(l=1;l<data_arrc.length;l++){
			console.log("running else");
			if(data_arrc[l]==data){
				document.write(br+"Best Cell C package :<br>Data(mb) : "+data+"<br>Valid for : "+validityc+" day(s)"+"<br>Price(R) : "+price_arrc[l]+br);
				break;
			}
			else if(data>data_arrc[l-1] && data<data_arrc[l]){
				document.write(br+"Best Cell C package :<br>Data(mb) : "+data_arrc[l]+"<br>Valid for : "+validityc+" day(s)"+"<br>Price(R) : "+price_arrc[l]+br);
					break;
			}
		}
	}
}

function mtn(data, validity) {

	 /*var data_arrm=[5, 20, 50, 100, 300, 500, 1024, 2048, 3072, 5120, 10240, 20480];
	 var price_arrm=[4, 12, 25, 35, 85, 105, 160, 260, 330, 430, 650, 1250];
	 */
	 var validitym=30;

	 var m=0;
	 if(data>0 && data<=data_arrm[m]){
		 	document.write(br+"Best MTN package  :<br>Data(mb)  :" + data_arrm[m] + "<br>Valid for :" +validitym +" day(s)" + "<br>Price(R) : " +price_arrm[m]+br);
	 }
	 else {
	 		for(m=1;m<data_arrm.length;m++){
				if(data_arrm[m]==data){
					console.log(data);
					document.write(br+"Best MTN package  :<br>Data(mb)  :" + data + "<br>Valid for :" +validitym +" day(s)" + "<br>Price(R) : " +price_arrm[m]+br);
					break;
				}else if(data>data_arrm[m-1] && data<data_arrm[m]){
					document.write(br+"Best MTN package  :<br>Data(mb)  :" + data_arrm[m] + "<br>Valid for :" +validitym +" day(s)" + "<br>Price(R) : " +price_arrm[m]+br);

					break;
				}
			}
	 }
}
