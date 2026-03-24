let aCube, vCube, aBox, bBox, hBox, vBox, numOfCubes;
aCube=8;
vCube=Math.pow(aCube,3);//изчислява обема на кубчето
aBox=20;
bBox=18;
hBox=55;
vBox=aBox*bBox*hBox; //изчислява обема на кутията
numOfCubes=vBox/vCube; /*открива колко части от кубчета 
могат да се съберат в кутията*/
document.write("В кутията могат да се съберат " + Math.floor(numOfCubes) + " кубчета.");
/* ^ извежда колко цели кубчета могат да се поберат в кутията*/

/* ДОПЪЛНИТЕЛНА ИНФОРМАЦИЯ */
document.write("<br>Страна на кубчето: " + aCube);
document.write("<br>Дължина на кутията: " + aBox);
document.write("<br>Ширина на кутията: " + bBox);
document.write("<br>Височина на кутията: " + hBox);

