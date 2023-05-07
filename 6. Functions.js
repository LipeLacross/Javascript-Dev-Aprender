let siteColor = 'blue';

/*sem parâmetros
function colorReset(){
    siteColor = ''
};
console.log(siteColor);
colorReset();
console.log(siteColor);
 */

//Com parâmetros
function colorReset(cor, tonalidade){
    siteColor = cor + ' ' + tonalidade
};
console.log(siteColor);
colorReset('verde', 'claro');
console.log(siteColor);