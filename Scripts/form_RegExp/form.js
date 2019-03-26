var user = document.getElementById("txtUser");
var pass = document.getElementById("txtPass");
var passCf = document.getElementById("txtPassCf");
var userName = document.getElementById("txtName");
var idCard = document.getElementById("txtIdCard");
var email = document.getElementById("txtEmail");
var tel = document.getElementById("txtTel");
var ckRule = document.getElementById('ckRule');// 勾选
var btn = document.getElementById("btnSubmit");
var result = {
    user: false, pass: false, passCf: false, userName: false, idCard: false, email: false, tel: false
};

// 设置水平居中
var c0 = document.getElementById("c0");
var w = document.documentElement.clientWidth;
c0.style.left = (w - c0.offsetWidth) / 2 + "px";


// 设置输入提示框 
var setRedTips = function (e, str, isG, eflag) {
    var redTips = e.nextElementSibling;
    if (redTips) {
        redTips.style.color = isG ? "green" : "red";
        redTips.innerHTML = str;
    }

    result[eflag] = isG;
}

// 用户名验证
user.onfocus = function () {
    setRedTips(this, '请输入6到18位字母、数字或者下划线！', false, 'user');
}
user.onblur = function () {
    if (this.value == "") {
        setRedTips(this, '请务必输入用户名！', false, 'user');
        return;
    }
    var userReg = /^\w{6,18}$/;
    if (!userReg.test(this.value)) {
        setRedTips(this, '用户名格式不正确！', false, 'user');
    } else {
        setRedTips(this, '用户名格式正确！', true, 'user');
    }
}

// 密码验证
pass.onfocus = function () {
    setRedTips(this, '请输入6到18位字母、数字或者下划线！', false, 'pass');
}
pass.onblur = function () {
    if (this.value == "") {
        setRedTips(this, '请务必输入密码！', false, 'pass');
        return;
    }
    var userReg = /^\w{6,18}$/;
    if (!userReg.test(this.value)) {
        setRedTips(this, '密码格式不正确！', false, 'pass');
    } else {
        setRedTips(this, '密码格式正确！', true, 'pass');
    }
}

// 再次输入密码验证
passCf.onfocus = function () {
    setRedTips(this, '请再次输入密码！', false, 'passCf');
}
passCf.onblur = function () {
    if (!result.pass) {
        setRedTips(this, '请输入密码！', false, 'passCf');
        return;
    }
    if (this.value == "") {
        setRedTips(this, '请再次输入密码！', false, 'passCf');
        return;
    }
    if (this.value != pass.value) {
        setRedTips(this, '和第一次输入的密码不一致！', false, 'passCf');
    } else {
        setRedTips(this, '输入正确！', true, 'passCf');
    }
}

// 姓名验证
userName.onfocus = function () {
    setRedTips(this, '请输入姓名，中文且最多五位！', false, 'userName');
}
userName.onblur = function () {
    if (this.value == "") {
        setRedTips(this, '请务必输入姓名！', false, 'userName');
        return;
    }
    var userReg = /^[\u4e00-\u9fa5]{2,5}$/;
    if (!userReg.test(this.value)) {
        setRedTips(this, '姓名格式不正确！', false, 'userName');
    } else {
        setRedTips(this, '姓名格式正确！', true, 'userName');
    }
}

// 身份证号码
idCard.onfocus = function () {
    setRedTips(this, '请输入18位身份证号码，最后一位如果是X,使用大写：X！', false, 'idCard');
}
idCard.onblur = function () {
    if (this.value == "") {
        setRedTips(this, '请务必输入身份证号码！', false, 'idCard');
        return;
    }
    var userReg = /^\d{17,17}[0-9X]$/;
    if (!userReg.test(this.value)) {
        setRedTips(this, '身份证号码格式不正确！', false, 'idCard');
    } else {
        setRedTips(this, '身份证号码格式正确！', true, 'idCard');
    }
}

// 邮箱验证
email.onfocus = function () {
    setRedTips(this, '请输入正确的邮箱！', false, 'email');
}
email.onblur = function () {
    if (this.value == "") {
        setRedTips(this, '请务必输入邮箱！', false, 'email');
        return;
    }
    var userReg = /^\w+@\w+\.(cn|com|rng)$/;
    if (!userReg.test(this.value)) {
        setRedTips(this, '邮箱格式不正确！', false, 'email');
    } else {
        setRedTips(this, '邮箱格式正确！', true, 'email');
    }
}

// 手机号码
tel.onfocus = function () {
    setRedTips(this, '请输入正确的手机号码！', false, 'tel');
}
tel.onblur = function () {
    if (this.value == "") {
        setRedTips(this, '请务必输入手机号码！', false, 'tel');
        return;
    }
    var userReg = /^\d{11}$/;
    if (!userReg.test(this.value)) {
        setRedTips(this, '手机号码格式不正确！', false, 'tel');
    } else {
        setRedTips(this, '手机号码格式正确！', true, 'tel');
    }
}

btn.onclick = function () {

    if (!result.user) {
        user.focus();
        return;
    }
    if (!result.pass) {
        pass.focus();
        return;
    }
    if (!result.passCf) {
        passCf.focus();
        return;
    }
    if (!result.userName) {
        userName.focus();
        return;
    }
    if (!result.tel) {
        tel.focus();
        return;
    }
    if (!result.email) {
        email.focus();
        return;
    }
    if (!result.idCard) {
        idCard.focus();
        return;
    }

    if (!ckRule.checked) {
        alert("请阅读并同意遵守规定！")
        ckRule.focus();
        return;
    }
    // 提交信息
    alert("提交成功");
}

