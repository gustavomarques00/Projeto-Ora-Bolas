
var tempo = [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.52, 0.54, 0.56, 0.58, 0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72, 0.74, 0.76, 0.78, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1, 1.02, 1.04, 1.06, 1.08, 1.1, 1.12, 1.14, 1.16, 1.18, 1.2, 1.22, 1.24, 1.26, 1.28, 1.3, 1.32, 1.34, 1.36, 1.38, 1.4, 1.42, 1.44, 1.46, 1.48, 1.5, 1.52, 1.54, 1.56, 1.58, 1.6, 1.62, 1.64, 1.66, 1.68, 1.7, 1.72, 1.74, 1.76, 1.78, 1.8, 1.82, 1.84, 1.86, 1.88, 1.9, 1.92, 1.94, 1.96, 1.98, 2, 2.02, 2.04, 2.06, 2.08, 2.1, 2.12, 2.14, 2.16, 2.18, 2.2, 2.22, 2.24, 2.26, 2.28, 2.3, 2.32, 2.34, 2.36, 2.38, 2.4, 2.42, 2.44, 2.46, 2.48, 2.5, 2.52, 2.54, 2.56, 2.58, 2.6, 2.62, 2.64, 2.66, 2.68, 2.7, 2.72, 2.74, 2.76, 2.78, 2.8, 2.82, 2.84, 2.86, 2.88, 2.9, 2.92, 2.94, 2.96, 2.98, 3, 3.02, 3.04, 3.06, 3.08, 3.1, 3.12, 3.14, 3.16, 3.18, 3.2, 3.22, 3.24, 3.26, 3.28, 3.3, 3.32, 3.34, 3.36, 3.38, 3.4, 3.42, 3.44, 3.46, 3.48, 3.5, 3.52, 3.54, 3.56, 3.58, 3.6, 3.62, 3.64, 3.66, 3.68, 3.7, 3.72, 3.74, 3.76, 3.78, 3.8, 3.82, 3.84, 3.86, 3.88, 3.9, 3.92, 3.94, 3.96, 3.98, 4, 4.02, 4.04, 4.06, 4.08, 4.1, 4.12, 4.14, 4.16, 4.18, 4.2, 4.22, 4.24, 4.26, 4.28, 4.3, 4.32, 4.34, 4.36, 4.38, 4.4, 4.42, 4.44, 4.46, 4.48, 4.5, 4.52, 4.54, 4.56, 4.58, 4.6, 4.62, 4.64, 4.66, 4.68, 4.7, 4.72, 4.74, 4.76, 4.78, 4.8, 4.82, 4.84, 4.86, 4.88, 4.9, 4.92, 4.94, 4.96, 4.98, 5, 5.02, 5.04, 5.06, 5.08, 5.1, 5.12, 5.14, 5.16, 5.18, 5.2, 5.22, 5.24, 5.26, 5.28, 5.3, 5.32, 5.34, 5.36, 5.38, 5.4, 5.42, 5.44, 5.46, 5.48, 5.5, 5.52, 5.54, 5.56, 5.58, 5.6, 5.62, 5.64, 5.66, 5.68, 5.7, 5.72, 5.74, 5.76, 5.78, 5.8, 5.82, 5.84, 5.86, 5.88, 5.9, 5.92, 5.94, 5.96, 5.98, 6, 6.02, 6.04, 6.06, 6.08, 6.1, 6.12, 6.14, 6.16, 6.18, 6.2, 6.22, 6.24, 6.26, 6.28, 6.3, 6.32, 6.34, 6.36, 6.38, 6.4, 6.42, 6.44, 6.46, 6.48, 6.5, 6.52, 6.54, 6.56, 6.58, 6.6, 6.62, 6.64, 6.66, 6.68, 6.7, 6.72, 6.74, 6.76, 6.78, 6.8, 6.82, 6.84, 6.86, 6.88, 6.9, 6.92, 6.94, 6.96, 6.98, 7, 7.02, 7.04, 7.06, 7.08, 7.1, 7.12, 7.14, 7.16, 7.18, 7.2, 7.22, 7.24, 7.26, 7.28, 7.3, 7.32, 7.34, 7.36, 7.38, 7.4, 7.42, 7.44, 7.46, 7.48, 7.5, 7.52, 7.54, 7.56, 7.58, 7.6, 7.62, 7.64, 7.66, 7.68, 7.7, 7.72, 7.74, 7.76, 7.78, 7.8, 7.82, 7.84, 7.86, 7.88, 7.9, 7.92, 7.94, 7.96, 7.98, 8, 8.02, 8.04, 8.06, 8.08, 8.1, 8.12, 8.14, 8.16, 8.18, 8.2, 8.22, 8.24, 8.26, 8.28, 8.3, 8.32, 8.34, 8.36, 8.38, 8.4, 8.42, 8.44, 8.46, 8.48, 8.5, 8.52, 8.54, 8.56, 8.58, 8.6, 8.62, 8.64, 8.66, 8.68, 8.7, 8.72, 8.74, 8.76, 8.78, 8.8, 8.82, 8.84, 8.86, 8.88, 8.9, 8.92, 8.94, 8.96, 8.98, 9, 9.02, 9.04, 9.06, 9.08, 9.1, 9.12, 9.14, 9.16, 9.18, 9.2, 9.22, 9.24, 9.26, 9.28, 9.3, 9.32, 9.34, 9.36, 9.38, 9.4, 9.42, 9.44, 9.46, 9.48, 9.5, 9.52, 9.54, 9.56, 9.58, 9.6, 9.62, 9.64, 9.66, 9.68, 9.7, 9.72, 9.74, 9.76, 9.78, 9.8, 9.82, 9.84, 9.86, 9.88, 9.9, 9.92, 9.94, 9.96, 9.98, 10, 10.02, 10.04, 10.06, 10.08, 10.1, 10.12, 10.14, 10.16, 10.18, 10.2, 10.22, 10.24, 10.26, 10.28, 10.3, 10.32, 10.34, 10.36, 10.38, 10.4, 10.42, 10.44, 10.46, 10.48, 10.5, 10.52, 10.54, 10.56, 10.58, 10.6, 10.62, 10.64, 10.66, 10.68, 10.7, 10.72, 10.74, 10.76, 10.78, 10.8, 10.82, 10.84, 10.86, 10.88, 10.9, 10.92, 10.94, 10.96, 10.98, 11, 11.02, 11.04, 11.06, 11.08, 11.1, 11.12, 11.14, 11.16, 11.18, 11.2, 11.22, 11.24, 11.26, 11.28, 11.3, 11.32, 11.34, 11.36, 11.38, 11.4, 11.42, 11.44, 11.46, 11.48, 11.5, 11.52, 11.54, 11.56, 11.58, 11.6, 11.62, 11.64, 11.66, 11.68, 11.7, 11.72, 11.74, 11.76, 11.78, 11.8, 11.82, 11.84, 11.86, 11.88, 11.9, 11.92, 11.94, 11.96, 11.98, 12, 12.02, 12.04, 12.06, 12.08, 12.1, 12.12, 12.14, 12.16, 12.18, 12.2, 12.22, 12.24, 12.26, 12.28, 12.3, 12.32, 12.34, 12.36, 12.38, 12.4, 12.42, 12.44, 12.46, 12.48, 12.5, 12.52, 12.54, 12.56, 12.58, 12.6, 12.62, 12.64, 12.66, 12.68, 12.7, 12.72, 12.74, 12.76, 12.78, 12.8, 12.82, 12.84, 12.86, 12.88, 12.9, 12.92, 12.94, 12.96, 12.98, 13, 13.02, 13.04, 13.06, 13.08, 13.1, 13.12, 13.14, 13.16, 13.18, 13.2, 13.22, 13.24, 13.26, 13.28, 13.3, 13.32, 13.34, 13.36, 13.38, 13.4, 13.42, 13.44, 13.46, 13.48, 13.5, 13.52, 13.54, 13.56, 13.58, 13.6, 13.62, 13.64, 13.66, 13.68, 13.7, 13.72, 13.74, 13.76, 13.78, 13.8, 13.82, 13.84, 13.86, 13.88, 13.9, 13.92, 13.94, 13.96, 13.98, 14, 14.02, 14.04, 14.06, 14.08, 14.1, 14.12, 14.14, 14.16, 14.18, 14.2, 14.22, 14.24, 14.26, 14.28, 14.3, 14.32, 14.34, 14.36, 14.38, 14.4, 14.42, 14.44, 14.46, 14.48, 14.5, 14.52, 14.54, 14.56, 14.58, 14.6, 14.62, 14.64, 14.66, 14.68, 14.7, 14.72, 14.74, 14.76, 14.78, 14.8, 14.82, 14.84, 14.86, 14.88, 14.9, 14.92, 14.94, 14.96, 14.98, 15, 15.02, 15.04, 15.06, 15.08, 15.1, 15.12, 15.14, 15.16, 15.18, 15.2, 15.22, 15.24, 15.26, 15.28, 15.3, 15.32, 15.34, 15.36, 15.38, 15.4, 15.42, 15.44, 15.46, 15.48, 15.5, 15.52, 15.54, 15.56, 15.58, 15.6, 15.62, 15.64, 15.66, 15.68, 15.7, 15.72, 15.74, 15.76, 15.78, 15.8, 15.82, 15.84, 15.86, 15.88, 15.9, 15.92, 15.94, 15.96, 15.98, 16, 16.02, 16.04, 16.06, 16.08, 16.1, 16.12, 16.14, 16.16, 16.18, 16.2, 16.22, 16.24, 16.26, 16.28, 16.3, 16.32, 16.34, 16.36, 16.38, 16.4, 16.42, 16.44, 16.46, 16.48, 16.5, 16.52, 16.54, 16.56, 16.58, 16.6, 16.62, 16.64, 16.66, 16.68, 16.7, 16.72, 16.74, 16.76, 16.78, 16.8, 16.82, 16.84, 16.86, 16.88, 16.9, 16.92, 16.94, 16.96, 16.98, 17, 17.02, 17.04, 17.06, 17.08, 17.1, 17.12, 17.14, 17.16, 17.18, 17.2, 17.22, 17.24, 17.26, 17.28, 17.3, 17.32, 17.34, 17.36, 17.38, 17.4, 17.42, 17.44, 17.46, 17.48, 17.5, 17.52, 17.54, 17.56, 17.58, 17.6, 17.62, 17.64, 17.66, 17.68, 17.7, 17.72, 17.74, 17.76, 17.78, 17.8, 17.82, 17.84, 17.86, 17.88, 17.9, 17.92, 17.94, 17.96, 17.98, 18, 18.02, 18.04, 18.06, 18.08, 18.1, 18.12, 18.14, 18.16, 18.18, 18.2, 18.22, 18.24, 18.26, 18.28, 18.3, 18.32, 18.34, 18.36, 18.38, 18.4, 18.42, 18.44, 18.46, 18.48, 18.5, 18.52, 18.54, 18.56, 18.58, 18.6, 18.62, 18.64, 18.66, 18.68, 18.7, 18.72, 18.74, 18.76, 18.78, 18.8, 18.82, 18.84, 18.86, 18.88, 18.9, 18.92, 18.94, 18.96, 18.98, 19, 19.02, 19.04, 19.06, 19.08, 19.1, 19.12, 19.14, 19.16, 19.18, 19.2, 19.22, 19.24, 19.26, 19.28, 19.3, 19.32, 19.34, 19.36, 19.38, 19.4, 19.42, 19.44, 19.46, 19.48, 19.5, 19.52, 19.54, 19.56, 19.58, 19.6, 19.62, 19.64, 19.66, 19.68, 19.7, 19.72, 19.74, 19.76, 19.78, 19.8, 19.82, 19.84, 19.86, 19.88, 19.9, 19.92, 19.94, 19.96, 19.98, 20];
var posX = [0.5,0.53,0.56001,0.59002,0.62005,0.65009,0.68016,0.71025,0.74037,0.77052,0.80072,0.83096,0.86124,0.89158,0.92198,0.95243,0.98295,1.01354,1.0442,1.07494,1.10576,1.13667,1.16767,1.19876,1.22995,1.26125,1.29265,1.32417,1.35581,1.38756,1.41944,1.45145,1.48359,1.51587,1.5483,1.58087,1.61359,1.64647,1.67951,1.71271,1.74608,1.77962,1.81334,1.84725,1.88133,1.91561,1.95008,1.98475,2.01963,2.05471,2.09,2.12551,2.16124,2.19719,2.23337,2.26979,2.30644,2.34334,2.38048,2.41787,2.45552,2.49343,2.5316,2.57003,2.60874,2.64773,2.687,2.72655,2.76639,2.80653,2.84696,2.8877,2.92874,2.97009,3.01176,3.05375,3.09606,3.1387,3.18168,3.22499,3.26864,3.31264,3.35698,3.40169,3.44675,3.49217,3.53796,3.58412,3.63066,3.67758,3.72488,3.77257,3.82066,3.86914,3.91802,3.96731,4.01701,4.06712,4.11766,4.16862,4.22,4.27182,4.32407,4.37676,4.4299,4.48349,4.53753,4.59203,4.64699,4.70242,4.75832,4.81469,4.87155,4.92889,4.98671,5.04503,5.10385,5.16316,5.22298,5.28331,5.34416,5.40552,5.46741,5.52982,5.59277,5.65625,5.72027,5.78484,5.84995,5.91562,5.98184,6.04863,6.11598,6.1839,6.25239,6.32147,6.39113,6.46137,6.53221,6.60365,6.67568,6.74832,6.82157,6.89543,6.96991,7.04501,7.12074,7.1971,7.27409,7.35172,7.43,7.50892,7.5885,7.66874,7.74963,7.83119,7.91342,7.99632,8.0799,8.16417,8.24912,8.33476,8.4211,8.50814,8.59588,8.68433,8.77349,8.86337,8.95398];
var posY = [1.5,1.52998,1.55992,1.58982,1.61968,1.6495,1.67928,1.70902,1.73872,1.76838,1.798,1.82758,1.85712,1.88662,1.91608,1.9455,1.97488,2.00422,2.03352,2.06278,2.092,2.12118,2.15032,2.17942,2.20848,2.2375,2.26648,2.29542,2.32432,2.35318,2.382,2.41078,2.43952,2.46822,2.49688,2.5255,2.55408,2.58262,2.61112,2.63958,2.668,2.69638,2.72472,2.75302,2.78128,2.8095,2.83768,2.86582,2.89392,2.92198,2.95,2.97798,3.00592,3.03382,3.06168,3.0895,3.11728,3.14502,3.17272,3.20038,3.228,3.25558,3.28312,3.31062,3.33808,3.3655,3.39288,3.42022,3.44752,3.47478,3.502,3.52918,3.55632,3.58342,3.61048,3.6375,3.66448,3.69142,3.71832,3.74518,3.772,3.79878,3.82552,3.85222,3.87888,3.9055,3.93208,3.95862,3.98512,4.01158,4.038,4.06438,4.09072,4.11702,4.14328,4.1695,4.19568,4.22182,4.24792,4.27398,4.3,4.32598,4.35192,4.37782,4.40368,4.4295,4.45528,4.48102,4.50672,4.53238,4.558,4.58358,4.60912,4.63462,4.66008,4.6855,4.71088,4.73622,4.76152,4.78678,4.812,4.83718,4.86232,4.88742,4.91248,4.9375,4.96248,4.98742,5.01232,5.03718,5.062,5.08678,5.11152,5.13622,5.16088,5.1855,5.21008,5.23462,5.25912,5.28358,5.308,5.33238,5.35672,5.38102,5.40528,5.4295,5.45368,5.47782,5.50192,5.52598,5.55,5.57398,5.59792,5.62182,5.64568,5.6695,5.69328,5.71702,5.74072,5.76438,5.788,5.81158,5.83512,5.85862,5.88208,5.9055,5.92888,5.95222,5.97552];


var roboXArray = [];
var roboYArray = [];

var i=0;
var d;
var t;
var distX;
var distY;
var C = 0;
var cont = 0;
var n = 0;
var j = 0;
var k = 0;
var RAx = [];
var RAy = [];
var RVx = [];
var RVy = [];
var Rx = [];
var Ry = [];
var Dt = [];
var Dp = [];
var Bx = [];
var By = [];
var Bt = [];
var BVx = [];
var BVy = [];
var BAx = [];
var BAy = [];

/*Função principal*/
function Envia(){
  var x = document.getElementById("x");
  var y = document.getElementById("y");
  var teta = 0;
  var cosseno = 0;
  var seno = 0;
  var auxiliadora = 0;

  for(i=0;i<465;i++){

    roboXArray[0] = parseFloat(x.value);
    roboYArray[0] = parseFloat(y.value);

    distX = (posX[i] - roboXArray[0]);
    distY = (posY[i] - roboYArray[0]);

	
	if(distX == 0)
	{	//Parte Superior à trajetória da bola
		if(roboYArray[0]>posY[i])
		{
			teta = (270 * Math.PI)/180;
			seno = -1;
			cos = 0;
			auxiliadora = 1;
		}//Parte Inferior à trajetória da bola
		else
		{
			teta = (90 * Math.PI)/180;
			seno = 1;
			cos = 0;
			auxiliadora = 1;
		}
	}
	else if(distY == 0)
	{	//Lado Esquerdo da trajetória da bola
		if(roboXArray[0]>posX[i])
		{
			teta = (180 * Math.PI)/180;
			seno = 0;
			cos = -1;
			auxiliadora = 1;
		}//Lado Direito da trajetória da bola
		else
		{
			teta = 0;
			seno = 0;
			cos = 1;
			auxiliadora = 1;
		}
	}
	else
	{	//Calcula a tangente entre a posição do robô e da bola.
		var tg = 0;
		tg = distY/distX;
		if(tg < 0) tg = tg * -1;
		teta = Math.atan(tg);
		seno = Math.sin(teta);
		cosseno = Math.cos(teta);
	}
	
	//Calcula a distância entre a posição do robô e da bola.
    d = Math.sqrt(Math.pow(distX,2)+Math.pow(distY,2));

    if(d>0.612){
        t = ((d-0.612)/2.8) + 0.4;
        C = 1;
    }

    else{
        t = Math.sqrt((d - 0.112)/3);
        C = 0;
    }

    console.log("VALOR DO TEMPO DO ROBÔ: ",t);
    console.log("VALOR DO TEMPO DA BOLA: ", tempo[i]);

    if(tempo[i]<t){
      cont++;
    }
    else if(tempo[i]>=t){
      cont = 0;
      break;
    }

  }
 
  
  /*Fórmulas do robo, quando a velocidade máxima é atingida*/
  if(C == 0)
  {
        for(k=0; k<t; k+=0.02)
        {
       
		if(roboXArray[0] > posX[i])
		{
			Rx[n] = roboXArray[0] - 0.1005 - (3*cosseno * (k*k));
			RVx[n] = ((2.8*cosseno) * k) * -1;
			RAx[n] = (2.8*cosseno) * -1;
		}
		else
		{			
			Rx[n] = roboXArray[0] + 0.1005 + (3*cosseno * (k*k));
			RVx[n] = (2.8*cosseno) * k;
			RAx[n] = 2.8*cosseno;
		}
		if(roboYArray[0] > posY[i])
		{
			Ry[n] = roboYArray[0] - 0.1005 - (3*seno * (k*k));
			RVy[n] = ((2.8*seno) * k)*-1;
			RAy[n] = (2.8*seno)*-1;
		}
		else 
		{
			Ry[n] = roboYArray[0] + 0.1005 + (3*seno * (k*k));
			RVy[n] = (2.8*seno) * k;
		}
        n++;
        }
		C = 0;
  }
  n = 0;
  k = 0;
  
  /*Fórmulas do robo, antes da velocidade máxima*/
  if(C == 1)
  {
    for(j=0; j<t-0.4; j+=0.02)
    {
      if(C == 1)
      {
        for(k=0; k<0.4; k+=0.02)
        {
       
		if(roboXArray[0] > posX[i])
		{
			Rx[n] = roboXArray[0] - 0.1005 - (3*cosseno * (k*k));
			RVx[n] = ((2.8*cosseno) * k) * -1;
			RAx[n] = (2.8*cosseno) * -1;
		}
		else
		{			
			Rx[n] = roboXArray[0] + 0.1005 + (3*cosseno * (k*k));
			RVx[n] = (2.8*cosseno) * k;
			RAx[n] = 2.8*cosseno;
		}
		if(roboYArray[0] > posY[i])
		{
			Ry[n] = roboYArray[0] - 0.1005 - (3*seno * (k*k));
			RVy[n] = ((2.8*seno) * k)*-1;
			RAy[n] = (2.8*seno)*-1;
		}
		else 
		{
			Ry[n] = roboYArray[0] + 0.1005 + (3*seno * (k*k));
			RVy[n] = (2.8*seno) * k;
		}
        n++;
        C = 0;
        }
        
      }
	  if(roboXArray[0] > posX[i])
	  {
		  RVx[n] = (2.8*cosseno)*-1;
		  RAx[n] = (2.8*cosseno)*-1;
		  Rx[n] = (roboXArray[0]- 0.1005 - ((3*cosseno)*0.16)) + RVx[n] * j;
		  console.log("VALOR DA POSIÇÃO DO ROBÔ NO EIXO X: ", Rx[n]);
		  console.log("VALOR DA VELOCIDADE DO ROBÔ NO EIXO X: ", RVx[n-1]);
		  
	  }
	  else
	  {		
		  RVx[n] = 2.8*cosseno;
		  RAx[n] = 2.8*cosseno;
		  Rx[n] = (roboXArray[0]+ 0.1005 + ((3*cosseno)*0.16)) + RVx[n] * j;
          console.log("VALOR DA POSIÇÃO DO ROBÔ NO EIXO X: ", Rx[n]);
          console.log("VALOR DA VELOCIDADE DO ROBÔ NO EIXO X: ", RVx[n-1]);
		  
	  }
	  if(roboYArray[0] > posY[i])
	  {
		  RVy[n] = (2.8*seno)*-1;
		  RAy[n] = (2.8*seno)*-1;
		  Ry[n] = (roboYArray[0]- 0.1005 - ((3*seno)*0.16)) + RVy[n] * j;
          console.log("VALOR DA POSIÇÃO DO ROBÔ NO EIXO Y: ", Ry[n]);
          console.log("VALOR DA VELOCIDADE DO ROBÔ NO EIXO Y: ", RVy[n-1]);
		  
	  }
	  else
	  {	
		  RVy[n] = 2.8*seno;
		  RAy[n] = 2.8*seno;
		  Ry[n] = (roboYArray[0]+ 0.1005 + ((3*seno)*0.16)) + RVy[n] * j;
          console.log("VALOR DA POSIÇÃO DO ROBÔ NO EIXO Y: ", Ry[n]);
          console.log("VALOR DA VELOCIDADE DO ROBÔ NO EIXO Y: ", RVy[n-1]);
	  }
      n++;
    }
    C = 1;
  }
  n = 0;

  /*MOVIMENTO UNIFORME + VARIADO*/
  if(C == 0)
  {
        for(k=0; k<t; k+=0.02)
        {
        Dt[n] = k;
        Dp[n] = ((k*k)*3 + 0.1005);
        n++;
        C = 0;
        }
  }
  n = 0;
  
  
  /*MOVIMENTO UNIFORME + VARIADO*/
  if(C == 1)
  {
    for(j=0; j<t-0.4; j+=0.02)
    {
      if(C == 1)
      {
        for(k=0; k<0.4; k+=0.02)
        {
        Dt[n] = k;
        Dp[n] = ((k*k)*3 + 0.1005);
        n++;
        C = 0;
        }
        auxiliar = k;
        k = 0;
      }
      Dt[n] = j + auxiliar;
      Dp[n] = (j*2.5 + 0.6005);
      n++;
    }
    C = 1;
  }

  /*Trajetória da bola até o encontro*/
  for(j=0;j<i;j++)
  {
    Bx[j] = posX[j];
    By[j] = posY[j];
    Bt[j] = tempo[j];
  }
  k = 0

  /*Fórmulas Bola*/

  for(j=0;j<i;j++)
  {
    BVx[j] = (0.27*tempo[j]) + 1.5;
    BVy[j] = (-0.1*tempo[j]) + 1.5;
    BAx[j] = -0.54*tempo[j];
    BAy[j] = -0.1;
  }

  
 
  /*Grafico da posição do Robô em X*/
  var traceRx = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Posição do Robô em função do tempo no eixo X',
  mode: 'lines+markers',
  marker: {
    color: '#64a6ed',
    size: 8
  },
  line: {
    color: '#64a6ed',
    width: 1
  }

  };
  traceRx.x = Dt;
  traceRx.y = Rx;
  
  /*Grafico da posição do Robô em Y*/
  var traceRy = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Posição do Robô em função do tempo no eixo Y',
  mode: 'lines+markers',
  marker: {
    color: '#ff9500',
    size: 8
  },
  line: {
    color: '#ff9500',
    width: 1
  }

  };
  var layout = {
  title: 'Coordenadas X e Y do robô em função do Tempo',
      plot_bgcolor:"rgba(204, 204, 204,0.1)",
      paper_bgcolor:"rgba(204, 204, 204,0.1)",
  titlefont: {
    size: 25,
	color: '#2E2E2E'
  },

  xaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 4,
    title: 'Tempo(t)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },

  yaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
	zerolinecolor: 'black',
    zerolinewidth: 4,
    title: 'X(t) e Y(t)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },
  }
  traceRy.x = Dt;
  traceRy.y = Ry;
  var data = [traceRx, traceRy];
  Plotly.newPlot('myDiv4', data, layout);
  
  
  /*Grafico da Velocidade do Robô em X*/
  var traceRVx = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Velocidade do Robô no eixo X',
  mode: 'lines+markers',
  marker: {
    color: '#64a6ed',
    size: 8
  },
  line: {
    color: '#64a6ed',
    width: 1
  }

  };
  traceRVx.x = Dt;
  traceRVx.y = RVx;
  
  /*Grafico da Velocidade do Robô em Y*/
  var traceRVy = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Velocidade do Robô no eixo Y',
  mode: 'lines+markers',
  marker: {
    color: '#ff9500',
    size: 8
  },
  line: {
    color: '#ff9500',
    width: 1
  }

  };
  var layout = {
  title: 'Componentes Vx(t) e Vy(t) do robô em função do tempo',
  plot_bgcolor:"rgba(204, 204, 204,0.1)",
  paper_bgcolor:"rgba(204, 204, 204,0.1)",
  titlefont: {
    size: 25,
	color: '#2E2E2E'
  },

  xaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 4,
    title: 'Tempo(t)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },

  yaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
	zerolinecolor: 'black',
    zerolinewidth: 4,

    title: 'Vx(t) e Vy(t)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },
  }
  traceRVy.x = Dt;
  traceRVy.y = RVy;
  var data = [traceRVx,traceRVy];
  Plotly.newPlot('myDiv6', data, layout);
  
  
  /*Grafico da Aceleração do Robô em X*/
  var traceRAx = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Aceleração do robô no eixo X',
  mode: 'lines+markers',
  marker: {
    color: '#64a6ed',
    size: 8
  },
  line: {
    color: '#64a6ed',
    width: 1
  }
  };
  traceRAx.x = Dt;
  traceRAx.y = RAx;
  

  
  /*Grafico da Aceleração do Robô em Y*/
  var traceRAy = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Aceleração do robô no eixo Y',
  mode: 'lines+markers',
  marker: {
    color: '#ff9500',
    size: 8
  },
  line: {
    color: '#ff9500',
    width: 1
  }

  };
  var layout = {
  title: 'Componetes Ax(t) e Ay(t) do robô em função do tempo',
      plot_bgcolor:"rgba(204, 204, 204,0.1)",
      paper_bgcolor:"rgba(204, 204, 204,0.1)",
  titlefont: {
    size: 25,
	color: '#2E2E2E'
  },

  xaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 4,
    title: 'Tempo(t)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },

  yaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
	zerolinecolor: 'black',
    zerolinewidth: 4,
    title: 'Ax(t) e Ay(t)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },
  }

  traceRAy.x = Dt;
  traceRAy.y = RAy;
  var data = [traceRAx,traceRAy];
  Plotly.newPlot('myDiv8', data, layout);
  
  /*Gráfico da Distância*/
  var traceD = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Distância',
  mode: 'lines+markers',
  marker: {
    color: '#64a6ed',
    size: 8
  },
  line: {
    color: '#64a6ed',
    width: 1
  }

  };
  var layout = {
  title: 'Distância relativa entre o Robô e a Bola',
      plot_bgcolor:"rgba(204, 204, 204,0.1)",
      paper_bgcolor:"rgba(204, 204, 204,0.1)",
  titlefont: {
    size: 25,
	color: '#2E2E2E'
  },

  xaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 4,
    title: 'Tempo(t)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },

  yaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
	zerolinecolor: 'black',
    zerolinewidth: 4,
    title: 'Posição(d)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },
  }

  traceD.x = Dt;
  traceD.y = Dp;
  var data = [traceD];
  Plotly.newPlot('myDiv1', data, layout);

  /*Gráfico da trajetória da Bola*/

  var traceTB = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Trajetória da Bola',
  mode: 'lines+markers',
  marker: {
    color: '#00fff2',
    size: 8
  },
  line: {
    color: '#00fff2',
    width: 1
  }

  };

  traceTB.x = Bx;
  traceTB.y = By;
  var data = [traceTB];


  var traceTB2 = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Trajetória Total da Bola',
  mode: 'lines+markers',
  marker: {
    color: '#64a6ed',
    size: 8
  },
  line: {
    color: '#64a6ed',
    width: 1
  }
  };
  var layout = {
  title: 'Trajetória da Bola',
      plot_bgcolor:"rgba(204, 204, 204,0.1)",
      paper_bgcolor:"rgba(204, 204, 204,0.1)",
  titlefont: {
    size: 25,
	color: '#2E2E2E'
  },

  xaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 4,



    title: 'Posição(x)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },

  yaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
	zerolinecolor: 'black',
    zerolinewidth: 4,
    title: 'Posição Y(x)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  }
};
  traceTB2.x = posX;
  traceTB2.y = posY;
  var data = [traceTB];
  Plotly.newPlot('myDiv3', data, layout);
  
  /*Grafico da TRAJETÓRIA DO ROBO*/
  var traceRR = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Trajetória do Robô',
  mode: 'lines+markers',
  marker: {
    color: '#ff9500',
    size: 8
  },
  line: {
    color: '#ff9500',
    width: 1
  }

  };
  var layout = {
  title: 'Trajetória do Robô',
      plot_bgcolor:"rgba(204, 204, 204,0.1)",
      paper_bgcolor:"rgba(204, 204, 204,0.1)",
  titlefont: {
    size: 25,
	color: '#2E2E2E'
  },

  xaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 4,
    title: 'Posição X',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },

  yaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
	zerolinecolor: 'black',
    zerolinewidth: 4,
    title: 'Posição Y',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },
  }

  traceRR.x = Rx;
  traceRR.y = Ry;
  var data = [traceRR];
  Plotly.newPlot('myDiv2', data, layout);
  
  /*TRAJETÓRIA INTERCEPTAÇÃO*/
  var layout = {
  title: 'Trajetória da Interceptação',
      plot_bgcolor:"rgba(204, 204, 204,0.1)",
      paper_bgcolor:"rgba(204, 204, 204,0.1)",
  titlefont: {
    size: 25,
	color: '#2E2E2E'
  },

  xaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 1,
    zerolinecolor: 'black',
    zerolinewidth: 4,
    title: 'Posição X',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },

  yaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
	zerolinecolor: 'black',
    zerolinewidth: 4,
    title: 'Posição Y',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },
  }
  var data = [traceTB2, traceTB, traceRR];
  Plotly.newPlot('myDiv10', data, layout);


  /*Posição da bola em X*/


  var traceTBX = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Posição X',
  mode: 'lines+markers',
  marker: {
    color: '#64a6ed',
    size: 8
  },
  line: {
    color: '#64a6ed',
    width: 1
  }
  };
  traceTBX.x = Bt;
  traceTBX.y = posX;


  /*Posição - Bola(y)*/

  var traceTBY = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Posição Y',
  mode: 'lines+markers',
  marker: {
    color: '#ff9500',
    size: 8
  },
  line: {
    color: '#ff9500',
    width: 1
  }
  };
  var layout = {
  title: 'Posição da Bola X(t) e Y(t)',
      plot_bgcolor:"rgba(204, 204, 204,0.1)",
      paper_bgcolor:"rgba(204, 204, 204,0.1)",
  titlefont: {
    size: 25,
	color: '#2E2E2E'
  },

  xaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 4,



    title: 'Tempo(t)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },

  yaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
	zerolinecolor: 'black',
    zerolinewidth: 4,




    title: 'X(t) e Y(t)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  }
};
  traceTBY.x = Bt;
  traceTBY.y = posY;
  var data = [traceTBX, traceTBY];
  Plotly.newPlot('myDiv5', data, layout);

  /*Velocidade da Bola X(t)*/

  var traceTBVX = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Velocidade X',
  mode: 'lines+markers',
  marker: {
    color: '#64a6ed',
    size: 8
  },
  line: {
    color: '#64a6ed',
    width: 1
  }
  };
  traceTBVX.x = Bt;
  traceTBVX.y = BVx;


  /*Velocidade da bola Y(t)*/

  var traceTBVY = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Velocidade Y',
  mode: 'lines+markers',
  marker: {
    color: '#ff9500',
    size: 8
  },
  line: {
    color: '#ff9500',
    width: 1
  }
  };
  var layout = {
      title: 'Componentes Vx(t) e Vy(t) da velocidade da bola em função do tempo',
      plot_bgcolor:"rgba(204, 204, 204,0.1)",
      paper_bgcolor:"rgba(204, 204, 204,0.1)",
  titlefont: {
    size: 25,
	color: '#2E2E2E'
  },

  xaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 4,



    title: 'Tempo(t)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },

  yaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
	zerolinecolor: 'black',
    zerolinewidth: 4,
    title: 'Vx(t) e Vy(t)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  }
};
  traceTBVY.x = Bt;
  traceTBVY.y = BVy;
  var data = [traceTBVX, traceTBVY];
  Plotly.newPlot('myDiv7', data, layout);


  /*Aceleração da bola em X(t)*/

  var traceTBAX = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Aceleração X',
  mode: 'lines+markers',
  marker: {
    color: '#64a6ed',
    size: 8
  },
  line: {
    color: '#64a6ed',
    width: 1
  }
  };
  traceTBAX.x = Bt;
  traceTBAX.y = BAx;


  /*Aceleração em Y(t)*/


  var traceTBAY = {
  x: [0],
  y: [0],
  type: 'scatter',
  name: 'Aceleração Y',
  mode: 'lines+markers',
  marker: {
    color: '#ff9500',
    size: 8
  },
  line: {
    color: '#ff9500',
    width: 1
  }
  };
  var layout = {
  title: 'Aceleração da Bola Ax(t) Ay(t)',
      plot_bgcolor:"rgba(204, 204, 204,0.1)",
      paper_bgcolor:"rgba(204, 204, 204,0.1)",
  titlefont: {
    size: 25,
	color: '#2E2E2E'
  },

  xaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
    zerolinecolor: 'black',
    zerolinewidth: 4,



    title: 'Tempo(t)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  },

  yaxis: {
	showgrid: true,
    zeroline: true,
    mirror: 'ticks',
    gridcolor: '#2E2E2E',
    gridwidth: 2,
	zerolinecolor: 'black',
    zerolinewidth: 4,


    title: 'Ax(t) e Ay(t)',
    titlefont: {
      family: 'Segoe UI, sans-serif',
      size: 20,
      color: '#2E2E2E'
    },
    showticklabels: true,
    tickangle: 'auto',
    tickfont: {
      family: 'Segoe UI, serif',
      size: 15,
      color: '#2E2E2E'
    },
    exponentformat: 'e',
    showexponent: 'all'
  }
};
  traceTBAY.x = Bt;
  traceTBAY.y = BAy;
  var data = [traceTBAX, traceTBAY];
  Plotly.newPlot('myDiv9', data, layout);

}

function Mudarestado(el) {
        var display = document.getElementById(el).style.display;
		var b = 0;
		var m = "";
		for(b=1;b<=10;b++)
		{
			m = "myDiv" + b;
			document.getElementById(m).style.display = 'none';
		}
        document.getElementById(el).style.display = 'block';
    }
