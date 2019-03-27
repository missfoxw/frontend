//类操作 兼容IE11以下
var CC={
    getClass:function(e){
        return e.className.replace(/\s+/," ").split(" ");
    },
    hasClass:function(e,cls){
       return -1 < ( " " + e.className + "" ).indexOf(" " + cls + " ");
    },
    addClass:function(e,cls){
        if(!this.hasClass(e,cls)){
            e.className += " " + cls;
        }
    },
    removeClass:function(e,cls){
        if(this.hasClass(e,cls)){
            //gi 全部查找，不分大小写
            var  reg=new RegExp('(\\s|^)' + cls + '(\\s|$)',"gi");
            e.className = e.className.replace(reg," ");
        }
    },
    toggleClass:function(e,cls){
        if(this.hasClass(e,cls)){
            this.removeClass(e,cls);
        }else{
            this.addClass(e,cls);
        }
    }
}

//类操作 classList 不兼容IE11以下
var CL={
    getClass:function(){
        return e.classList;
    },
    hasClass:function(e,cls){
       return e.classList.contains(cls);
    },
    addClass:function(e,cls){
        e.classList.add(cls);
    },
    removeClass:function(e,cls){
        e.classList.remove(cls);
    },
    toggleClass:function(e,cls){
        //返回是否存在该类
        return e.classList.toggle(cls);
    }
}

// 跨浏览器事件流
var EventUtil={
    // 事件对象，事件类型，事件句柄
    addHandler: function(e,t,h){
        if(e.addEventListener){
            e.addEventListener(t,h,false);
        }else if(e.attachEvent){
            e.attachEvent("on" + t,h);
        }else{
            e["on" + t] = null;
        }
    },
    removeHandler: function(e,t,h){
        if(e.removeEventListener){
            e.removeEventListener(t,h,false);
        }else if(e.attachEvent){
            e.detachEvent("on" + t,h);
        }else{
            e["on" + t] = null;
        }
    },
    preventDefault: function(e){
        if(e.preventDefault){
            e.preventDefault();
        }else{
            return e.returnValue = false;
        }
    },
    stopPropagation: function(e){
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            return e.cancelBubble = false;
        }
    },
    getTarget: function(e){
        return e.target || e.srcElement;
    },
    // getCharCode
}