var more = document.getElementById('more');
        var more_btn = document.getElementsByClassName('more_btn');

        function show() {
            if (document.getElementById('more_btn').style.display == 'none') {
                document.getElementById('more_btn').style.display = 'block';
            } else {
                document.getElementById('more_btn').style.display = 'none';
            }
        }

        var search=document.getElementById('search');
        var show_result=document.getElementById('show_result');
        search.onfocus=function(){
            show_result.style.display='block';
        }
        search.onblur=function(){
            show_result.style.display='none';
        }
