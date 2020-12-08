$(document).ready(function()
{
	$(document).on("click",".check",finishItem);
	$(document).on("click",".edit",editItem);
	$("#add").click(function(){
	var a=$("#ques").val();
	if(a.length!=0)	
	{
	$("#todo").append('<li><input type="checkbox" class="check">&emsp;<span class="span1">'+a+'</span>&emsp; <button class="edit">Edit</button><button class="del">Delete</button></li>');
	$(".del").click(function(){		
		var b=$(this).parent();
		b.remove();		
	})
	}
	})
})
function finishItem()
	{
	if($(this).parent().parent().attr('id')=="done")
	{ let x= $(this).parent();
	console.log(x);
	$("#todo").append(x);
	}
	else
	{
	let y= $(this).parent();
	console.log(y);
	$("#done").append(y);
	}
	}
	function editItem()
	{
		var b1=$(this).parent();
		var b3=b1.text();
		var b2=b3.replace("EditDelete","");
		console.log(b2);
		var a1='&emsp; <input type=text value='+b2+'class="edit1" > &emsp; <button class="btn">done</button>'; 
		$(b1).append(a1);
		$(".btn").click(function(){
			console.log("HII");
			$(this).parent().children(".span1").text($(".edit1").val());
			$(".edit1").remove();
			$(".btn").remove();
		})
	}
