function creativeAjax(url, sussfn, failfn) { //首先，创建一个ajax对象；  
    if (window.XMLHttpRequest) { //这里将XMLHttpRequest作为window对象的属性进行if判断；  
        var iajax = new XMLHttpRequest(); //不然会因为没有声明变量XMLHttpRequest而报错；  
    } else {  
        var iajax = new ActiveXObject('Microsoft.XMLHTTP');  
    }  
    iajax.open('GET', url + '?m=' + Math.random(), true); //连接服务器 参数 方法 文件相对路径 传输方式异步传输；  
    iajax.send(); //发送请求；    
    iajax.onreadystatechange = function () { //接受返回值；  
        if (iajax.readyState == 4) { //读取完成；    
            if (iajax.status == 200) { //读取成功；  
                var str = eval(iajax.responseText);//解析json  
                sussfn(str);  
            } else {  
                if (failfn) {  
                    failfn(iajax.status); //读取失败;返回失败数值，比如常见的404；    
                }  
            }  
        }  
    };  
}  