(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.CoCast = root.CoCast || {};
    root.CoCast.Api = root.CoCast.Api || {};
    factory(root.CoCast.Api, root.jQuery, root.CoCast.Model);
  }

}(this, function (ns, $, modelPackage) {

  function Station() {

    function getStation() {
      var DATA = {
        styles: {
          backgroundColor: 'red'
        },
        caption: [
          'Cólera mata 10 no maior campo de refugiados do mundo, no Quênia',
          'Suspeito deixa celular cair durante fuga e fotos ajudam PM a localizá-lo',
          'Você viu? Bolsas asiáticas, inflação de 2015 e outras notícias da semana'
        ],
        channels: [
          {
            visibility: false,
            styles: {
              backgroundColor: 'blue'
            },
            title: 'What\'s new',
            contents: [
              {
                type: 'image',
                visibility: false,
                title: 'Mega da Virada pode render multa de R$ 8,5 milhões por publicidade ilegível',
                src: 'http://cdn1.mundodastribos.com/2015/11/6-motivos-para-jogar-na-Mega-da-Virada-2016-04.jpg'
              },
              {
                type: 'quote',
                visibility: false,
                description: 'Eu pensei que fosse algum problema no site quando vi a nota maior que 1.000.'
              }
            ]
          },
          {
            visibility: false,
            styles: {
              backgroundColor: 'blue'
            },
            title: 'What\'s hot',
            contents: [
              {
                type: 'image',
                visibility: false,
                title: 'Obama apresenta medidas para reduzir violência com armas de fogo',
                src: 'http://www.pravdanews.jex.com.br/includes/imagem.php?id_jornal=20207&id_noticia=5463'
              },
              {
                type: 'quote',
                visibility: false,
                description: 'Se for verificado que houve a propaganda enganosa, a Caixa certamente será multada.'
              }
            ]
          }
        ]
      };
      var defer = $.Deferred();
       
      setTimeout(function() {
        defer.resolve( DATA );
      }, Math.floor( 400 + Math.random() * 2000 ) );
       
      // var promise = $.ajax({
      //   url: '/api/station/v1/station/',
      //   dataType: 'json',
      //   contentType: 'application/json',
      //   method: 'GET'
      // });

      return defer.promise().then(function(response){
        if(response){
          return new modelPackage.Station(response);
        }
      });
    }

    var self = {
      getStation: getStation
    };

    return self;
  }

  ns.Station = Station;
}));
