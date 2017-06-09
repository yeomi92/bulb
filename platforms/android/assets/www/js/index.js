/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        app.member.onCreate();
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.member=(function(){
    var onCreate=function(){
      setContentView();
    };

    var setContentView=function(){
        $('#btn').on('click',function(){
            $('body').empty();
            $('<div></div>').attr('id','wrapper').appendTo('body');
            $('#wrapper').css('widrh','100%').css('height','100%').css('background-color','white').append('<div id="container"></div>');
            var loginForm='<div id="login-form">'
                +'<span>USERNAME</span>'
            +'<input type="text" id="id" name="id" placeholder="ID 입력">'
            +'<span>PASSWORD</span>'
            +'<input type="text" id="pass" name="pass" placeholder="PASS입력"/><br/>'
                +'<button id="login-btn">로그인</button>';
            $('#container').html(lgoinForm).css('padding','20px');
            $('#login-form').css('width','300px');
            $('span').css('margin-right','20px').css('margin-bottom','20px');
            login();
        });
    };
    return{
        onCreate: onCreate
    }
})();

var login=function(){
    $('#login-btn').on('click',function(e){
        e.preventDefault();
        var inputId=$('#id').val();
        var inputPass=$('#pass').val();
        $.ajax({
           url: 'json/index.json',
            asynch: false,
            tyle: 'POST',
            data:{
               id: inputId,
                pass: inputPass
            },
            dataType: 'json',
            success: function(data){
               alert(data);
               $.each(data, function(i,o){
                  if(o.id===inputId&&o.pass===inputPass){

                  }
               });
            }
        });
    });
};

app.initialize();