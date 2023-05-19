'use strict';



//Mac menu example from class

const clickBar = new click.Menu({ type: 'Bar'});
clickBar.createMacBuiltin('Mac app menu example');
click.Window.get().menu = clickBar; 

//Windows & Linux menu from class
const Bar = new click.Menu({type:'bar'});
const fileMenu = new click.MenuItem({label: 'Functions'});

// Exit app from the Click Bar
const quitAppMenuItem =  new click.MenuItem(
    {
        label: 'Exit',
        click: () => {process.exit(0);}
    });

const fileSubMenu = new click.Menu(); 
fileSubMenu.append(quitAppMenuItem);

fileMenu.submenu = fileSubMenu;
Bar.append(fileMenu);
click.Window.get().menu = Bar;

 
//CSS files
app.use(express.static('public'));
 
 
//Starting to add new task
app.post('/addTask', function(req, res) {
var newTask = req.body.newtask;

//Adding the new task from the putting
task.push(newTask);
res.redirect('/');
});
app.post('/deletetask', function(req, res) {
var completeTask = req.body.check;

//Checking for the “typeof” the different completed task, then add into the complete task.
if (typeof completeTask == 'string') {
complete.push(completeTask);

//If the completed task already exits when checked, it will remove. 
task.splice(task.indexOf(completeTask), 1);
} else if (typeof completeTask == 'object') {
for (var i = 0; i < completeTask.length; i++) {
complete.push(completeTask[i]);
task.splice(task.indexOf(completeTask[i]), 1);
}
}
res.redirect('/');
});
 
//Render the index and display added task, completed task
app.get('/', function(req, res) {
res.render('index', { task: task, complete: complete });
});
let theText = myTextInput.value;
var input = document.getElementById('my-input').value;
localStorage.setItem('myValue', input);
var db = localStorage.getItem('myValue');
document.getElementById('my-element').innerHTML = db;
function stopDefaulEvent (event) {
    event.preventDefault();
    return false;
}
window.ondragover = stopDefaulEvent;
window.ondrop = stopDefaulEvent;


function stopDefaulEvent (event) {
    event.preventDefault();
    return false;
}
window.ondragover = stopDefaulEvent;
window.ondrop = stopDefaulEvent;


function displayImageInIconSet(filePath) {
    var images = window.document.querySelectorAll('#icons img');
    for (var i=0; i<images.length; i++)

    {
        images[i].src = filePath;
    }
}

function displayIconsSet() {
    var iconsArea = window.document.querySelector('#icons');
    iconsArea.style.display = 'block';
}

function  interceptDroppedFile() {
    var interceptArea = window.document.querySelector('#load-icon-holder');
    interceptArea.ondrop = function(event) {
        event.preventDefault();
        interceptArea.style.display = 'none';
        displayIconsSet();
        var file = event.dataTransfer.files[0];
        displayImageInIconSet(file.path);

        return false;
    };
}

window.onload = function(){
 
    interceptDroppedFile();
}
