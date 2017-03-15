       $(function () {
           var oUser = $('#user');
           var oPass = $('#pass');
           var oLogin = $('#login');
           var oRegister = $('#regi');
           oLogin.click(function () {
               // if (oUser.val().trim() || oPass.val().trim()) {
               //     alert('账户名或密码不能为空');
               // }

               $.ajax({
                   url: '/login',
                   data: {
                       user: oUser.val(),
                       pass: oPass.val()
                   },
                   success: function (data) {
                       if (data.state) {
                           alert(data.message);
                       } else {
                           alert('登陆成功');
                       }
                   },
                   error: function () {}
               });
           });
           oRegister.click(function () {
               // if (oUser.val().trim() || oPass.val().trim()) {
               //     alert('账户名或密码不能为空');
               // }

               $.ajax({
                   url: '/regi',
                   data: {
                       user: oUser.val(),
                       pass: oPass.val()
                   },
                   success: function (data) {
                       if (data.state) {
                           alert(data.message);
                       } else {
                           alert('注册成功');
                       }
                   },
                   error: function () {}
               });
           });
       });