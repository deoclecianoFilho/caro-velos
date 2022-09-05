$(function(){

    var currentValue = 0
    var isDrag = false
    var preco_maximo  = 70000
    var preco_atual  = 0

    $('.pointer-barra').mousedown(function(){
        isDrag = true
    })

    $(document).mouseup(function(){
        isDrag = false
        inableTextSelection()

    })

    $('.barra-preco').mousemove(function(e){
        if(isDrag){
            disableTextSelection()
            var elBase = $(this)
            var mauseX = e.pageX - elBase.offset().left
            if(mauseX < 0)
                mauseX = 0;
            if(mauseX > elBase.width())
                mauseX = elBase.width();

            $('.pointer-barra').css('left',(mauseX-13)+'px')
            currentValue = (mauseX / elBase.width()) * 100
            $('.barra-preco-fill').css('width',currentValue+'%')

            preco_atual = (currentValue / 100) * preco_maximo
            preco_atual = formatarPreco(preco_atual)
            $('.valor-pesquisa .preco').html('R$ '+preco_atual)
        }
    })

    function formatarPreco(preco_atual){
        preco_atual = preco_atual.toFixed(2)
        preco_arr = preco_atual.split('.')

        var novo_preco = formatarTotal(preco_arr)
        return novo_preco
    }

    function formatarTotal(preco_arr){
        if(preco_arr[0] < 1000){
            return preco_arr[0]+','+preco_arr[1]
        }else if(preco_arr[0] < 10000){
            return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+','+preco_arr[1]
        }else{
            return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length)+','+preco_arr[1]
        }
    }

    function disableTextSelection(){
        $('body').css('-webkit-user-select','none')
        $('body').css('-moz-user-select','none')
        $('body').css('-ms-user-select','none')
        $('body').css('-o-user-select','none')
        $('body').css('user-select','none')
    }

    function inableTextSelection(){
        $('body').css('-webkit-user-select','auto')
        $('body').css('-moz-user-select','auto')
        $('body').css('-ms-user-select','auto')
        $('body').css('-o-user-select','auto')
        $('body').css('user-select','auto')
    }

})