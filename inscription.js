$(document).ready(function() {
    
    $('.button-psswd').on('click', function() {
        
        if ($('.input-psswd').attr('psswd-shown') == 'false') {
            
            $('.input-psswd').removeAttr('type');
            $('.input-psswd').attr('type', 'text');
            
            $('.input-psswd').removeAttr('psswd-shown');
            $('.input-psswd').attr('psswd-shown', 'true');
            
            $('.button-psswd').css('opacity', '1');
            
        }else {
            
            $('.input-psswd').removeAttr('type');
            $('.input-psswd').attr('type', 'password');
            
            $('.input-psswd').removeAttr('psswd-shown');
            $('.input-psswd').attr('psswd-shown', 'false');
            
            $('.button-psswd').css('opacity', '0.2');
            
        }
        
    });
    
});

/*
<div class="checkbox">

<input readonly="" class="catdw" id="checkoffer" type="radio" name="adType" value="offer" checked="">
<label class="txtradio" for="checkoffer" data-qa-id="text-offer-desktop">Offres</label>


<input readonly="" class="catdw" id="checkoffer2" type="radio" name="adType" value="offer" checked="">

<label class="txtradio" for="checkoffer2" data-qa-id="text-offer-desktop">Demandes</label>
</div>
</input>*/


























var changeText = function(){
	var text = document.querySelector('#text');
	
	if(text.childNodes[0].nodeValue == 'Rechercher (38 686 826 résultats)'){
		text.childNodes[0].nodeValue = 'Rechercher (38 684 747 résultats)';
	}
	else{
		text.childNodes[0].nodeValue = 'Rechercher (38 686 826 résultats)';
	}
}

var button = document.querySelector('button');

button.addEventListener('click', changeText);