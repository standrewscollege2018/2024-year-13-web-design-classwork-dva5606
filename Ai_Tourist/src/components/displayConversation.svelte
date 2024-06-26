<script>

displayConversation.getElementById("displayConversation");
console.log("rat")
displayConversation.insertAdjacentHTML(
"afterbegin",
'<div class="flex flex-row">' +
    '<div class="w-[12.5%]">' +
    '<img src="src/lib/images/openaiLight.png" alt="">' +
    '</div>' +
    '<div class="flex flex-row grow">' +
        '<p class="text-base font-bold ml-2.5 w-[95%]">ChatGPT</p>' +
        '<img class="h-6 " src="src/lib/images/speakerLight.png" alt="">' +
    '</div>' +
    
'</div>' +
'<p class="ml-[16%]" id="displayUserText"></p>' +
'</div>',
);

console.log(`${Date.now() - now}ms`);
let userText = document.getElementById("textInputField").value;

console.log(userText, img[1])
console.log(`${Date.now() - now}ms`);

function await (){
printText = await askQuestion(userText, img[1]);
}

console.log(`${Date.now() - now}ms`);
console.log(printText)
if (printText){
    console.log(printText)
    document.getElementById("displayUserText").innerHTML = printText;
    }

</script>

  