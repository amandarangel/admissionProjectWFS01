
function ValidateEmail (InputText)
{
  var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(InputText.value.match(mailFormat))
  {
      alert("O email " +  (document.getElementById('email-placeholder').value) + " foi enviado.");
      document.form1.email;
                
      document.getElementById("bemvindo").innerHTML = 'Bem-vindo (a) ' + (document.getElementById('email-placeholder').value) + '!';
      
      return true;
  }   
   
  else
  {
      alert("Email inválido");
      document.form1.email;
      location.reload();
      return false;
  }

}
  
function setMessage(msg)
{
    message.textContent = msg;
} 




