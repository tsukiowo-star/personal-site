let i = 0, imgArr=new Array();
imgArr[0] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSThQ9Ke-EInWRFm8Z3HPPufFEyxf9vHpwdqyInhW74ZVpnrfK3QKB73gbgLifF9th80Ic&usqp=CAU"
imgArr[1] = "https://img.88tph.com/production/20171203/12370487-1.jpg!/watermark/url/L3BhdGgvbG9nby5wbmc/align/center/fw/640/quality/70"
imgArr[2] = "https://twkid.com/wp-content/uploads/2018/01/20180116105535_29.jpg"

function showImg() {
  document.getElementById("ico").src = imgArr[i]
  i = (i+1) % 3
}

function show() {
  setInterval(showImg,2000);
}