
    let sport=form.sport_type.value;
    let vik=form.number.value;
    let sex=form.sex.value;
    let city=form.city.value;
    let eMail=form.e_mail.value;
    let tel=form.tel.value;
    let login=form.login.value;
    let password=form.password_One.value;
    let repassword=form.Password_Two.value;
    let confsdens=form.confidens.value;
    let fail=false;

    $('button').on('click',function(e){
        e.preventDefault;
    if(sport==''){
       fail='вкажіть вид спорту'
    }
    else if(sex==''){
        fail='вкажіть Вашу стать'
    }
    else if(city==''||city==' '){
        fail='вкажіть Ваше місто'
    }
    else if(eMail==''||eMail==' '){
        fail='вкажіть Ваш e-mail'
    }
    else if(tel==''||tel==' '){
        fail='вкажіть Ваш телефон'
    }
    else if(login==''||login==' '){
        fail='введіть логін'
    }
    else if(password==''||password==' '){
        fail='введіть палоль'
    }
    else if(password!=repassword){
        fail='паролі не співпадають'
    }


    if(fail){
        alert(fail)
    }
    else{
        window.location=https://www.google.com.ua;
    }
})

