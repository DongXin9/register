$(function(){
    var $userName = $('#TANGRAM__PSP_4__userName'),
        $phone = $('#TANGRAM__PSP_4__phone'),
        $password = $('#TANGRAM__PSP_4__password'),
        $code = $('#TANGRAM__PSP_4__verifyCode'),
        $submit = $('#TANGRAM__PSP_4__submit'),
        $send = $('#TANGRAM__PSP_4__verifyCodeSend');
  $submit.click(function(){
    if(!validateName('#TANGRAM__PSP_4__userName')) {
      $userName.select();
      return false;
    }else if(!validate('#TANGRAM__PSP_4__phone')){
      $phone.select();
      return false;
    }else if(!validate('#TANGRAM__PSP_4__password')){
      $password.select();
      return false;
    }else if(!validate('#TANGRAM__PSP_4__verifyCode')){
      $code.select();
      return false;
    }else{
      alert('表单已提交');
      return true;
    }
  });
  $send.click(function(){
    var $btn = $('#TANGRAM__PSP_4__verifyCodeSend'),
        i = 60,
        timer;
    if(!validate('#TANGRAM__PSP_4__phone')){
       $phone.select();
        return false;
    }
    timer = setInterval(function(){
      i--;
      if(i === 0){
        clearInterval(timer);
        $btn.val('获取验证码');
        $btn.removeAttr('disabled');
        $btn.attr('class','passbutton');
      }else{
        $btn.val('重发验证（'+i+'s）');
        $btn.attr('disabled','disabled');
        $btn.attr('class','waitbutton');
      }
    },1000);
  });
  $userName.focusout(function(){
    if(!validateName('#TANGRAM__PSP_4__userName'));
  });
  $userName.focusin(function(){
    var $tip = $('#TANGRAM__PSP_4__userNameTip');
    $tip.attr('style','');
  });
  $phone.focusout(function(){
    if(!validate('#TANGRAM__PSP_4__phone')) ;
  });
  $password.focusout(function(){
    if(!validate('#TANGRAM__PSP_4__password')) ;
  });
  $password.focusin(function(){
    var $tip = $('#TANGRAM__PSP_4__passwordTip');
    $tip.attr('style','');
    $('#TANGRAM__PSP_4__passwordSucc').attr('style','display:none');
    $('#TANGRAM__PSP_4__newPwdTip').attr('style','display:inline');
  });
  $code.focusout(function(){
    if(!validate('#TANGRAM__PSP_4__verifyCode')) ;
  });

  function validate(field){
    var $data = $(field),
        $msg = $(field+'Error'),
        $tip = $(field+'Tip'),
        $succ = $(field+'Succ'); 
    if(field==='#TANGRAM__PSP_4__phone'){
      if(!/^1[3456789]\d{9}$/.test($data.val())){
        $msg.attr('style','display: inline;');
        $data.addClass('texterror');
        $succ.attr('style','display: none');
        $msg.html('手机号格式不正确');
        return false;
      }else{
        $msg.attr('style','display: none;');
        $data.removeClass('texterror');
        $succ.attr('style','display:inline');
        return true;
      }
    }else if(field==='#TANGRAM__PSP_4__password'){
      if(!(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test($data.val()))){
        $msg.attr('style','display: inline;');
        $data.addClass('texterror');
        $msg.html('密码设置不符合要求');
        $tip.attr('style','display:none');
        $succ.attr('style','display:none');
        return false;
      }else{
        $msg.attr('style','display: none;');
        $data.removeClass('texterror');
        $tip.attr('style','display:none');
        $succ.attr('style','display:inline');
        return true;
      }
    }else if(field==='#TANGRAM__PSP_4__verifyCode'){
      if($data.val()===''){
        $msg.attr('style','display: inline;');
        $data.addClass('texterror');
        $msg.html('请求超时，请稍后再试');
        return false;
      }else{
        $msg.attr('style','display: none;');
        $data.removeClass('texterror');
        return true;
      }
    }else{

    }
  };
  function validateName(field){
    var $data = $(field),
        $msg = $(field+'Error'),
        $tip = $(field+'Tip'),
        $succ = $(field+'Succ'),
        len = 0,
        uname=[];
        uname=$data.val();
        for(var i = 0;i<uname.length;i++){
          if (/[\u4E00-\u9FA5]/.test(uname[i])) {
            len += 2;
          } else {
              len += 1;
          };
          if (len > 14) {
              break;
          };
        };
        if(!(/(?!\d+$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test($data.val()))){
          $msg.attr('style','display: inline;');
          $data.addClass('texterror');
          $msg.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
          $tip.attr('style','display:none');
          $succ.attr('style','display: none');
          return false;
        }else if(len > 14){
            $msg.attr('style','display: inline;');
            $data.addClass('texterror');
            $msg.html('用户名不能超过14个字符或者7个汉字');
            $tip.attr('style','display:none');
            $succ.attr('style','display: none');
            return false;
        }else{
          $msg.attr('style','display: none;');
          $data.removeClass('texterror');
          $tip.attr('style','display:none');
          $succ.attr('style','display: inline');
          return true;
        };
  };
});
  
