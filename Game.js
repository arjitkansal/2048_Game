var mat = [[0,0,0,0],[0,0,0,2],[0,2,0,0],[0,0,0,0]];
var score = 0;
canvas=document.getElementById("canvas");
ctx=canvas.getContext('2d');
//Display
var color = ["gray", "rgb(250,200,200)", "rgb(240,200,160)", "rgb(160,120,150)", "cyan", "blue", "rgb(0,0,100)", "rgb(0,200,0)", "rgb(0,50,0)", "rgb(150,100,50)", "rgb(100,150,50)", "rgb(200,0,0)"];
function display() {

    console.log(mat);

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            //color to be decided by mat[i][j]
            if (mat[i][j] != 0) {
                ctx.fillStyle = color[Math.log2(mat[i][j])];
            }
            else{
                ctx.fillStyle = "rgb(230,230,230)";
            }
            ctx.fillRect(j * 100 + 2, i * 100 + 2, 96, 96);
            if (mat[i][j] != 0) {
                ctx.font = "20px Comic Sans MS";
                ctx.fillStyle = "black";
                ctx.textAlign = "center";
                ctx.fillText(mat[i][j], j * 100 + 50, i * 100 + 60);
            }
        }
    }
}
function left() {
    var cnt = 0;

    for (var i=0;i<4;i++) {
        //Shifting elements left
        for (var j=0;j<4;j++) {
            for (var k=j-1;k>=0 && mat[i][k]==0;k--) {
                mat[i][k] = mat[i][k+1];
                mat[i][k+1] = 0;
            }
        }
	    for (var j=0;j<3;j++) {
            if (mat[i][j] == mat[i][j+1]) {
                mat[i][j] *= 2;
                mat[i][j+1] = 0;
                score += mat[i][j];
            }
        }
        //Shifting elements left
        for (var j=0;j<4;j++) {
            for (var k=j-1;k>=0 && mat[i][k]==0;k--) {
                mat[i][k] = mat[i][k+1];
                mat[i][k+1] = 0;
            }
        }
        if (mat[i][3]==0) {
            cnt++;
        }
    }

    //Adding element 2
    if (cnt>0) {
        var pos = Math.floor(Math.random() * cnt);
        for (var i=0;i<4;i++) {
            if (mat[i][3]==0) {
                cnt--;
            }
            if (cnt==0) {
                mat[i][3] = 2;
                break;
            }
        }
    }
}
function right() {
    var cnt = 0;
    
    for (var i=0;i<4;i++) {
        //Shifting elements right
        for (var j=3;j>=0;j--) {
            for (var k=j+1;k<4 && mat[i][k]==0;k++) {
                mat[i][k] = mat[i][k-1];
                mat[i][k-1] = 0;
            }
        }
	    for (var j=3;j>0;j--) {
            if (mat[i][j] == mat[i][j-1]) {
                mat[i][j] *= 2;
                mat[i][j-1] = 0;
                score += mat[i][j];
            }
        }
        //Shifting elements right
        for (var j=3;j>=0;j--) {
            for (var k=j+1;k<4 && mat[i][k]==0;k++) {
                mat[i][k] = mat[i][k-1];
                mat[i][k-1] = 0;
            }
        }
        if (mat[i][0]==0) {
            cnt++;
        }
    }
    //Adding element 2
    if (cnt>0) {
        var pos = Math.floor(Math.random() * cnt);
        for (var i=0;i<4;i++) {
            if (mat[i][0]==0) {
                cnt--;
            }
            if (cnt==0) {
                mat[i][0] = 2;
                break;
            }
        }
    }
}
function down() {
    var cnt = 0;

    for (var j=0;j<4;j++) {
        //Shifting elements down
        for (var i=3;i>=0;i--) {
            for (var k=i+1;k<4 && mat[k][j]==0;k++) {
                mat[k][j] = mat[k-1][j];
                mat[k-1][j] = 0;
            }
        }
	    for (var i=3;i>0;i--) {
            if (mat[i][j] == mat[i-1][j]) {
                mat[i][j] *= 2;
                mat[i-1][j] = 0;
                score += mat[i][j];
            }
        }
        //Shifting elements down
        for (var i=3;i>=0;i--) {
            for (var k=i+1;k<4 && mat[k][j]==0;k++) {
                mat[k][j] = mat[k-1][j];
                mat[k-1][j] = 0;
            }
        }
        if (mat[0][j]==0) {
            cnt++;
        }
    }
    //Adding element 2
    if (cnt>0) {
        var pos = Math.floor(Math.random() * cnt);
        for (var j=0;j<4;j++) {
            if (mat[0][j]==0) {
                cnt--;
            }
            if (cnt==0) {
                mat[0][j] = 2;
                break;
            }
        }
    }
}
function up() {
    var cnt = 0;

    for (var j=0;j<4;j++) {
        //Shifting elements up
        for (var i=0;i<4;i++) {
            for (var k=i-1;k>=0 && mat[k][j]==0;k--) {
                mat[k][j] = mat[k+1][j];
                mat[k+1][j] = 0;
            }
        }
	    for (var i=0;i<3;i++) {
            if (mat[i][j] == mat[i+1][j]) {
                mat[i][j] *= 2;
                mat[i+1][j] = 0;
                score += mat[i][j];
            }
        }
        //Shifting elements up
        for (var i=0;i<4;i++) {
            for (var k=i-1;k>=0 && mat[k][j]==0;k--) {
                mat[k][j] = mat[k+1][j];
                mat[k+1][j] = 0;
            }
        }
        if (mat[3][j]==0) {
            cnt++;
        }
    }
    //Adding element 2
    if (cnt>0) {
        var pos = Math.floor(Math.random() * cnt);
        for (var j=0;j<4;j++) {
            if (mat[3][j]==0) {
                cnt--;
            }
            if (cnt==0) {
                mat[3][j] = 2;
                break;
            }
        }
    }
}
display();
function noMovePossible() {
    for (var i=0;i<4;i++) {
        for (var j=0;j<4;j++) {
            if (!mat[i][j] || (i>0 && mat[i][j]==mat[i-1][j]) || (j>0 && mat[i][j]==mat[i][j-1]) || (i<3 && mat[i][j]==mat[i+1][j]) || (j<3 && mat[i][j]==mat[i][j+1])) {
                return false;
            } 
        }
    }
    //No Move Possible (GAME OVER!); Print Score
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!!", 200,180);

    ctx.fillStyle = "green";
    ctx.textAlign="center";
    ctx.font="30px Comic Sans MS";
    ctx.fillText("Your Score is "+ score.toString(),200,220);

    return true;
}
window.addEventListener('keydown', function (e) {
    key = e.keyCode;
    if(key==37){
    	e.preventDefault();
    	left();
    }
    if(key==38){
    	e.preventDefault();
    	up();
    }
    if(key==39){
    	e.preventDefault();
    	right();
    }
    if(key==40){
    	e.preventDefault();
    	down();
    }
	display();
    if (noMovePossible()) {
        //Game OVER and Print the Score
        return;
    }
});