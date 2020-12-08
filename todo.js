$(document).ready(function()
{
	$("#add").click(function(){
	var a=$("#ques").val();
	if(a.length!=0)	
	{
	$("#todo").append('<li><input type="checkbox">&emsp;<span class="span1">'+a+'</span>&emsp; <button class="edit">Edit</button><button class="del">Delete</button></li>');
	$(".edit").click(function(){
		var b1=$(this).parent();
		var b3=b1.text();
		var b2=b3.replace("EditDelete","");
		console.log(b2);
		var a1='<br><input type=text value='+b2+'class="edit1" > &emsp; <button class="btn">done</button>'; 
		$(b1).append(a1);
		$(".btn").click(function(){
			console.log($(".edit1").val());
			$(".span1").text($(".edit1").val());
			$(".edit1").remove();
			$(".btn").remove();
		})
	})
	$(".del").click(function(){		
		var b=$(this).parent();
		b.remove();		
	})
	$("#todo > li > input").click(function(){
		var z1=$(this).parent();
		$("#done").append(z1);
	})
	$("#todo > li > input").click(function(){
		if($(this).parent().parent().attr('id')=="todo")
		{ let x= $(this).parent();
		console.log(x.text());
		$("#done").append(x);
		}
	})
	$("#done > li > input").click(function(){
		if($(this).parent().parent().attr('id')=="done")
		{ let x= $(this).parent();
		console.log(x.text());
		$("#todo").append(x);
		}
	})
	// $("li > input").click(function(){
	// 	var z1=$(this).parent();
	// 	if (z1.parent().attr('id')=='todo') {
	// 	$("#done").append(z1);
	// }
	// else {
	// 	$("#todo").append(z1);
	// }
	// })
	}
	})
})