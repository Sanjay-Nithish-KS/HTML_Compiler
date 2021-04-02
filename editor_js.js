function showPreview()
{
    var htmlcode = document.getElementById("htmlcode").value;
    var csscode = "<style>"+document.getElementById("csscode").value+"</style>";
    var jscode = "<scri"+"pt>"+document.getElementById("jscode").value+"</scri"+"pt>";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(`${htmlcode}${csscode}${jscode}`);
    frame.close();
}

function saveDynamicDataToFile() 
{
    var userInput = document.getElementById("htmlcode").value;
    var blob = new Blob([userInput], { type: "text/html;charset=utf-8" });
    saveAs(blob, "editor.html");

    var userInput = document.getElementById("csscode").value;
    var blob = new Blob([userInput], { type: "text/typescript;charset=utf-8" });
    saveAs(blob, "editor_style.css");

    var userInput = document.getElementById("jscode").value;
    var blob = new Blob([userInput], { type: "text/javascript;charset=utf-8" });
    saveAs(blob, "editor_js.js");

}