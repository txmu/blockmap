 
function cst(code){
    var c=String.fromCharCode(code.charCodeAt(0)+code.length);  
    for(var i=1;i<code.length;i++){        
        c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));  
    }     
    return escape(c);
}
//字符串进行解密   
function ust(code){
    code = unescape(code);        
    var c=String.fromCharCode(code.charCodeAt(0)-code.length);        
    for(var i=1;i<code.length;i++){        
        c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));        
    }        
    return c;
}  
window.onerror = function(errorMessage, scriptURI, lineNumber, columnNumber, errorObj) { 
    alert("邵帝内核错误提示\n错误信息：" + errorMessage + "\n出错文件：" + scriptURI 
		  + "\n出错行号：" + lineNumber +
		  "\n出错列号：" + columnNumber +
		  "\n错误详情：" + errorObj);
} ;
// 点击按钮,在div中创建一个p标签
// 第二种方式创建元素: 对象.innerHTML="标签代码及内容";
var wide = 9, high = 4;
var aa,bb;
var gjj=Array(10),fyj=Array(100);
var men=1;
var jbj=Array(100);
var ata=Array(109);
var sleep = function(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while (new Date().getTime() < startTime)
	{}
};
function msg(msgg) {
	document.getElementById("msga").innerHTML = msgg + document.getElementById("msga").innerHTML;
}
function nern() {
	ntern(men);
	disp();
	nos();
}
function updrr() {
	upa(aa, bb, men);
	disp();
	nos();
}
function upa(aa,b,id){
	if(id==a[aa][b]){
	if(money[id]<10){
		msg("钱不够\n");
		return;
	}
	
	layoutq[aa][b]+=2;
	money[id]-=10;
	disp();
	msg("\n"+namer[id]+"升级了点"+aa+","+b+"的经济\n");
	}
}
function updr() {
	atackp(aa, bb, men, costof(aa, bb, men));
	disp();
	nos();
}
cli = function(a, b) {
	aa = a;bb = b;
	if (layout[a][b] == -1)return;
	if (gea(aa, b) == men)
	{
		document.getElementById("tatr").style.visibility = "visible" ;

		document.getElementById("ase").innerHTML = "您要花费" + costof(a, b, men) + "元升级点" + (a + 1).toString() + "," + (b + 1).toString() + "吗？";

		return;


	}
	else
	{
		if(can(men,aa,b)===false){
		msg("无效的选择\n");
		return;
	}
	if(gea(aa,b)=="a"){
		document.getElementById("as").innerHTML = "您要花费" + costof(a, b, men) + "元占领点" + (a + 1).toString() + "," + (b + 1).toString() + "吗？";
		document.getElementById("tat").style.visibility = "visible" ;
		document.getElementById("aaa").style.visibility = "hidden";
		return;
		}
		document.getElementById("aaa").style.visibility = "visible";
		
		document.getElementById("as").innerHTML = "您要花费" + costof(a, b, men) + "元到" + costof(a, b, men) * 2 + "元攻击点" + (a + 1).toString() + "," + (b + 1).toString() + "吗？";
		document.getElementById("tat").style.visibility = "visible" ;
		document.getElementById("bds").value = 0;
	}
	document.getElementById("mon").value = costof(a, b, men);
};
nos = function() {
	document.getElementById("tat").style.visibility = "hidden" ;
	document.getElementById("tatr").style.visibility = "hidden" ;
		document.getElementById("aaa").style.visibility = "hidden";
		

};
yesa = function() {
	nos();
	var mone=document.getElementById("mon").value;
	var bds=document.getElementById("bds").value;
	if(a[aa][bb]=="a"){
		a[aa] = rep(a[aa], bb, men);
		money[men]-=costof(aa,bb,men);
		disp();
		return;
	}
	if (mone > 2 * costof(aa, bb, men) || mone < costof(aa, bb, men) || bds < 0 || bds > army[men])
	{
		msg("无效的输入");
		return;
	}atackp(aa, bb, men, mone, bds);
	disp();
};
btn = function() {
	for (i = 0;i < 99;i++)
	{
		army[i] = 0;
		gjj[i]=0;
		jbj[i]=1;
		fyj[i]=0;
	}
	for (i = 0;i < 99;i++)
	{
		ata[i] = Array(100);
		for (j = 0;j < 99;j++)
		{
			ata[i][j] = 1;
		}
	}
	for (i = 0;i < 99;i++)
	{
		layoutq[i] = Array(100);
		for (j = 0;j < 99;j++)
		{
			layoutq[i][j] = 2;
		}
	}
	if (confirm("要加载自定义地图吗？"))
	{
		var text = prompt("请输入地图");
		if (text)
		{
			eval(text.replace(/name/g, "namer"));

		}
    }
	else init();
	disp();
};
disp = function() {
	var aa=" <table width=\"80%\" border=\"1\">\n ";
	aa += "<tr>\n";

	for (j = 0;j <= wide;j++)
	{

		aa += "<th>" + j.toString() + "</th>\n";
	}
	aa += "</tr>\n";
	for (i = 0;i < high;i++)
	{
	 	aa += "<tr><th>" + (i + 1).toString() + "</th>\n";
		for (j = 0;j < wide;j++)
		{
var lev=layout[i][j]+1;
if(lev>14)lev=14;
			if (a[i][j] == "a")aa += "<td onclick=\"cli(" + i.toString() + "," + j.toString() + ")\" style=\"background-color:white\">空地</td>\n"
		else if (layout[i][j] >= 0)aa += "<td id=\""+i.toString()+"t"+j.toString()+"\" onclick=\"cli(" + i.toString() + "," + j.toString() + ")\" style=\"background-color:" + getc(gea(i, j)) + "\"><pre>" + layout[i][j] + "级防御\n" +layoutq[i][j]/2+"级经济\n"+ namer[a[i][j]] + "</pre><img style=\"width:100%;height=100%\" src=\""+lev.toString()+".png\"/></td>\n";
			else if (layout[i][j] == -1)aa += "<td onclick=\"cli(" + i.toString() + "," + j.toString() + ")\" style=\"background-color:blue\">水</td>\n"
		}
		aa += "</tr>\n";
	}
	aa += " </table>\n"
	document.getElementById("dv").innerHTML = aa;
	
aa="<tr> <th>玩家</th><th>金币</th><th>部队</th><th>领地</th><th>难度</th></tr>";
var ld=new Array(100);
	for (i = 1; i <= pn; i++)
	{
		ld[i] = 0;
	}
	
	for (i = 0; i < high; i++)
	{
		for (j = 0; j < wide; j++)
		{
			if (layout[i][j] >= 0 && layout[i][j] <= 30)
			{
				ld[a[i][j]]++;
			}
		}
	}
	
	for (i = 1;i <= pn;i++)
	{
		//if(ld[i]==0)msg(namer
	 	aa += "<tr><th>" + namer[i] + "</th>\n";
		aa+="<td>"+money[i]+"</td><td>"+army[i]+"</td><td>"+ld[i]+"</td>";
		if(diff[i]==0)aa+="<td>玩家</td>";
		else aa+="<td>"+diff[i]+"</td>";
		aa += "</tr>\n";
	}
	document.getElementById("mes").innerHTML = aa;
	
};
var a= new Array(100);
var saf= new Array(100);
function gea(aa, b) {
	if (aa < 0 || b < 0 || aa > high || b > wide)return 0;
	return a[aa][b];
};
namer = new Array(100);
var diff= new Array(100);
var player= new Array(100);
var playernum= new Array(100);
var money= new Array(100);
var layout= new Array(100);
var layoutq= new Array(100);
var cost_t= [ 1, 1, 1, 1, 1, 1, 1, 1 ];
var color=[
	"#BEBEBE",
	"#FF60AF",
	"#FF77FF",
	"#CA8EFF",
	"#9393FF",
	"#84C1FF",
	"#80FFFF",
	"#93FF93",
	"#FFFF6F",
	"#FFBB77",
	"#CF9E9E",
	"#95CACA",
	"#CA8EC2"
];
function getc(id) {
	return color[id];
}
var pn = 4;
var wide = 9, high = 4;
var atadx= new Array(100);
var atady= new Array(100);
var army= new Array(100);
var atadn;
function init() {
	msg("\n一号地图，简单难度已开始\n邵帝内核加载成功\n");
    money[1] = 1;
    money[2] = 1;
    money[3] = 1;
    money[4] = 1;
    a[0] = "a11222333";
    a[1] = ("111222333");
    a[2] = ("111222333");
    a[3] = ("444444444");
	layout[0] = [1,0,0,0,0,0,0,0,0];layout[1] =  [0,0,0,0,0,0,0,0,0];layout[2] =  [0,0,0,0,0,0,0,0,0];layout[3] =  [0,0,0,0,0,0,0,0,0];
    namer[1] = "player";
    namer[2] = "编程ai";
    namer[3] = "该死的ai";
    namer[4] = "邵弟ai";
    diff[1] = 0;;
    diff[2] = 1;;
    diff[3] = 1;;
    diff[4] = 1;;
    return;
}
function bd(bb, code) {
	if (bb > 0 && bb <= money[men])
	{
		msg(namer[code] + "购买了" + bb + "部队\n");
		army[code] += bb;
		money[code] -= bb;
	}
	else msg("购买无效\n");
}
function makar() {
	bb = Number(prompt("您要训练多少部队?一块钱一个。最多可以" + money[men] + "个", money[men]));
	bd(bb, men);
}
function refresh() {
	var ld=new Array(100);
	for (i = 1; i <= pn; i++)
	{
		ld[i] = 0;
	}
	for (i = 1; i <= pn; i++)
	{
		cost_t[i] = 1;
	}
	for (i = 0; i < high; i++)
	{
		for (j = 0; j < wide; j++)
		{
			if (layout[i][j] >= 0)
			{
				money[a[i][j]] += layoutq[i][j]*jbj[a[i][j]];
				ld[a[i][j]]++;
			}
		}
	}
	for (i = 1; i <= pn; i++)
	{

		msg(namer[i] + "占有" + ld[i].toString() + "块地\n");
	}
}
function endturn() {
	for (i = 1; i <= pn; i++)
	{
		msg(namer[i] + "还剩" + money[i] + "元\n");

	}
	

}
function abs(a) {
	if (a > 0)return a;
	return -a;
}
function canj(id, x, y) {
	
	var le=99999;
	for (i = -1; i <= 1; i++)
		for (j = -1; j <= 1; j++)
			if (x + i >= 0 && i + x < high && j + y >= 0 && j + y < wide)
				if (saf[i + x][j + y]<le )
					le=saf[i+x][j+y];
	return le;
}
function cug(ii,j){
	if(Number(a[ii][i])<0)return;
	     var imm = document.getElementById(ii.toString()+"t"+j.toString()).style.backgroundColor.toString();
 var rr='',gg='',bbb='',co=0;
// alert(imm);
 for(i=0;imm[i]!=')';i++){
	 if(imm[i]=='(')co=1;
	 else if(imm[i]==',')co++;
	 else if(co==1){
		 rr+=imm[i];
	 }
	 else if(co==2){
		 gg+=imm[i];
	 }
	 else if(co==3){
		 bbb+=imm[i];
	 }
	 if(co==4)break;
 }
  var rc,tim=0,rim=0;
  var aa=Number(rr),bb=Number(gg),cc=Number(bbb);
   setInterval(function () {
	   if(tim>30)return;
	   tim++;
	   aa+=8;bb+=8;cc+=8;
	
	 
	 document.getElementById(ii.toString()+"t"+j.toString()).style.backgroundColor=("RGB("+aa+","+bb+","+cc+")");
	 
    }, 40);
	
	
   setInterval(function () {
	   if(rim>30||tim<30)return;
	   rim++;
	   aa-=8;bb-=8;cc-=8;
	 document.getElementById(ii.toString()+"t"+j.toString()).style.backgroundColor=("RGB("+aa+","+bb+","+cc+")");
	 
// alert(im)
    }, 40);
}
function canu(id, x, y) {
	if (x >= high || y >= wide)return false;
	if (costof(x, y, id) > money[id] * 2)
		return false;
	if (a[x][y] != id)
		return false;
	for (i = -1; i <= 1; i++)
		for (j = -1; j <= 1; j++)
			if (x + i >= 0 && i + x < high && j + y >= 0 && j + y < wide)
				if (a[i + x][j + y] != id)
					return true;
	return false;
}
function can(id, x, y) {
	if (x >= high || y >= wide)return false;
	if (layout[x][y] == -1)return false;
	if (costof(x, y, id) > money[id] * 2)
		return false;
	if (a[x][y] == id)
		return false;
	for (i = -1; i <= 1; i++)
		for (j = -1; j <= 1; j++)
			if (x + i >= 0 && i + x < high && j + y >= 0 && j + y < wide)
				if (a[i + x][j + y] == id)
					return true;
	return false;
}
function pf(a) {
	return a * a;
}
function abss(a) {
	if (a > 0)
		return a;
	return -a;
}
function shaogodlu(id) {
	var cx=-1,cy=-1;
	var luk = 0;
	for (ti = 0; ti < high ; ti++)
	{

		for (jt = 0; jt < wide ; jt++)
		{
			//alert(ti.toString()+jt.toString());
			if (canu(id, ti, jt))
			{
				if ((cx == -1 || costof(ti, jt, id) < costof(cx, cy, id)))
				{
					cx = ti;cy = jt;

				}
			}
		}
	}
	var d=Array(2);
	d[0] = cx;
	d[1] = cy;
	return d;
}
function shaogodup(id) {
	for (i = 0;i < 99;i++)
	{
		saf[i] = Array(100);
		for (j = 0;j < 99;j++)
		{
			saf[i][j] = 999;
		}
	}
	var cx=-1,cy=-1;
	var luk = 0;
	for (ti = 0; ti < high ; ti++)
	{

		for (jt = 0; jt < wide ; jt++)
		{
			//alert(ti.toString()+jt.toString());
			if (canu(id, ti, jt))
			{
				saf[ti][jt]=0;
			}
			if(a[ti][jt]!=id)saf[ti][jt]=0;
		}
	}
	var lv=-1,lx=-1,ly=-1;
	for (ti = 0; ti < high ; ti++)
	{

		for (jt = 0; jt < wide ; jt++)
		{
			saf[ti][jt]=canj(id,ti,jt)+1;
			if(saf[ti][jt]>lv){
				lv=saf[ti][jt];
				lx=ti;
				ly=jt;
			}
		}
	}
	var d=Array(2);
	d[0] = lx;
	d[1] = ly;
	return d;
}
function shaogodlq(id) {
	var cx=-1,cy=-1;
	var luk = 0;
	for (ti = 0; ti < high ; ti++)
	{

		for (jt = 0; jt < wide ; jt++)
		{
			//alert(ti.toString()+jt.toString());
			if (can(id, ti, jt))
			{
				if (diff[a[ti][jt]] == 0 && (cx == -1 || costof(ti, jt, id) < costof(cx, cy, id)))
				{
					cx = ti;cy = jt;

				}
			}
		}
	}
	var d=Array(2);
	d[0] = cx;
	d[1] = cy;
	return d;
}
function shaogodle(id) {
	var cx=-1,cy=-1;
	var luk = 0;
	for (ti = 0; ti < high ; ti++)
	{

		for (jt = 0; jt < wide ; jt++)
		{
			//alert(ti.toString()+jt.toString());
			if (can(id, ti, jt))
			{
				if (cx == -1 || costof(ti, jt, id) < costof(cx, cy, id))
				{
					cx = ti;cy = jt;
				}

				if (costof(ti, jt, id) == costof(cx, cy, id) && (pf(abs(cx - high / 2)) +
					pf(abs(cy - wide / 2)) >
					pf(abs(ti - high / 2)) +
					pf(abs(jt - wide / 2)) 
					|| (rand() % 15 == 1) || diff[Number(gea(ti, jt))] == '0') && luk == 0)
				{
					cx = ti;
					cy = jt;
					luk++;
				}
			}
		}
	}
	var d=Array(2);
	d[0] = cx;
	d[1] = cy;
	return d;
}
function mp(a, b) {
	var c=Array(2);
	c[0] = a;
	c[1] = b;
	return c;
}
function shaogod1(player) {
	var cw = Math.floor(wide / 2), ch = Math.floor(high / 2), rc = 0;
	while (cw - rc > 0 && ch - rc > 0)
	{
		if (can(player, cw - rc, ch))
			return mp(cw - rc, ch);
		if (can(player, cw + rc, ch))
			return mp(cw + rc, ch);
		if (can(player, cw, ch + rc))
			return mp(cw, ch + rc);
		if (can(player, cw, ch - rc))
			return mp(cw, ch - rc);
		rc++;
	}
	return mp(-1, -1);
}
function min(a, b) {
	if (a > b)return b;
	return a;
}
function shaogod2(player) {
	var cw = Math.floor(wide / 2), ch = Math.floor(high / 2);
	var rc = min(cw, ch);
	while (cw - rc > 0 && ch - rc > 0)
	{
		if (can(player, cw - rc, ch - rc))
			return mp(cw - rc, ch - rc);
		if (can(player, cw + rc, ch + rc))
			return mp(cw + rc, ch + rc);
		if (can(player, cw + rc, ch + rc))
			return mp(cw + rc, ch + rc);
		if (can(player, cw - rc, ch - rc))
			return mp(cw - rc, ch - rc);
		rc--;
	}
	return mp(-1, -1);
}
function ai(code) {

	var ros=Array(10);
	var hh=0;
	while (hh < diff[code] * 2)
	{
		hh++;
		var tt=false;
		ros[3] = (shaogod2(code));

		ros[2] = (shaogod1(code));

		ros[1] = (shaogodle(code));

		ros[4] = (shaogodlq(code));
		for (hi = 1 ;hi < 5;hi++)
		{
			if (ros[hi][1] != -1 && can(code, ros[hi][0], ros[hi][1])
				&& costof(ros[hi][0], ros[hi][1], code) != -1)
			{
				if (atack(ros[hi][0], ros[hi][1], code) == true)
				{
					tt = true
				}
			}

			if (tt == false)return 0;
		}
		var e=shaogodup(code);
		if (e[0] != -1)upa(e[0], e[1], code);
		var t=shaogodlu(code);
		if (t[0] != -1)atack(t[0], t[1], code);
	}
	
	bd(Math.floor(money[code] * (Math.random())), code);
	return;
	// ros[code].push_back(a);
	// cout << aa.first << aa.second << endl;
}
function costof(x, y,  pe) {
//msg(x),msg(y);msg(pe);
	if (x >= high || y >= wide || x < 0 || y < 0)return 99999;
	if (gea(x, y) == pe)
	{
		return layout[x][y] * 2 + 1;
	}
	return cost_t[pe] * (layout[x][y] * 2 + 1);

}
function rand() {
	return Math.random() * 3180486 + 518846;
}
function atack(aa, b, id) {
	if (a[aa][b] == id)
	{
		if (costof(aa, b, id) <= money[id])
		{
			money[id] -= costof(aa, b, id);
			layout[aa][b]++;
		}
		else msg("钱不够\n");
		return true;
	}
	var tr = Math.floor(costof(aa, b, id) * (((rand() % 9) / 10 + 1.1)));
	var perc = ((tr - costof(aa, b, id)) / costof(aa, b, id)+0.1 -( (layout[aa][b]) /10))*ata[id][Number(a[aa][b])]+gjj[id]-fyj[a[aa][b]];
	if (tr > money[id])
	{
		msg("钱不够😭\n");
		return false;
	}
	var uaa=0;
	
	if (army[id] > 0)
	{
		uaa = Math.floor((0.9 - perc) * 100);
		if (uaa > army[id])uaa = army[id];
		if (uaa < 0)uaa = 0;
		army[id] -= uaa;
	}
	perc = perc + (uaa / 100);
	msg(namer[id] + "投资" + tr + "以及" + uaa + "个部队以" + (perc).toFixed(2) + "的概率");
	money[id] -= tr;
	if ((perc * 8 > (((rand() % 7)))))
	{
		msg("成功攻占此地区！\n");
		cost_t[id] = Number(Number(cost_t[id]) + Number(tr));
		a[aa] = rep(a[aa], b, id);
		disp();
		cug(aa,b);
		return true;
	}
	else
	{
		msg("未攻占此地区！\n");

	};
	return true;
}
function atackp(aa, b, id, tr, uaa) {
	
	if (a[aa][b] == id)
	{
		if (costof(aa, b, id) <= money[id])
		{
			money[id] -= costof(aa, b, men);
			layout[aa][b]++;
		}
		else msg("钱不够\n");
		return true;
	}
	var perc = ((tr - costof(aa, b, id)) / costof(aa, b, id)+0.1 -( (layout[aa][b]) /10))*ata[id][Number(a[aa][b])]+gjj[id]-fyj[a[aa][b]];
	if (tr > money[id])
	{
		msg("没钱\n");
		return false;
	}
	if (uaa > army[id])uaa = army[id];
	if (uaa < 0)uaa = 0;
	army[id] -= uaa;

	perc = perc + (uaa / 100);
	msg(namer[id] + "投资" + tr + "以及" + uaa + "个部队以" + (perc + 0.1).toFixed(2) + "的概率");


	money[id] -= tr;
	if (perc * 8 > ((rand() % 10) + 1))
	{
		msg("成功攻占此地区！\n");

		cost_t[id] = Number(Number(cost_t[id]) + Number(tr));

		a[aa] = rep(a[aa], b, id);
		disp();
		cug(aa,b);
		return true;
	}
	else
	{
		msg("未攻占此地区！\n");

	};
	return true;
}

function rep(str, index, char) {
	return str.substring(0, index) + char + str.substring(index + 1);
}
function ntern(pler) {
	pler = pler + 1;
	while (diff[pler] >= 1 && pler <= pn)
	{
		ai(pler);
		pler++;
	}

	if (pler - 1 == pn)
	{

		refresh();
		endturn();
	}
	disp();
}
function main() {
	init("4 9 4 1 1 player 0 2 1 robot 1 3 1 机器人 1 4 1 邵帝 1 111222333 111222333 111222333 444444444 jjjjjjjjjj jjjjjjjjjj jjjjjjjjjj jjjjjjjjjj ");
	display();

    endturn();
	for (;;)
	{
		cost = 1;
		//  debug_input();
		ntern('1');
		refresh();
		endturn();
		display();
		getchar();
	}

}
