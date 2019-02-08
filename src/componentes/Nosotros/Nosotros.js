import React, { Component } from 'react';
import './Nosotros.css';

class Nosotros extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros"/>
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum velit, facilisis pulvinar faucibus nec, pellentesque quis dolor. In porta vehicula efficitur. Sed ut nulla bibendum urna facilisis bibendum eu sed odio. Aliquam erat volutpat. Ut fringilla dapibus dui non lobortis. Sed in commodo enim. Maecenas non nisi id tortor lobortis tincidunt sed id diam. Phasellus tincidunt tincidunt urna in dignissim. Suspendisse dignissim risus tortor, nec varius felis commodo id. Proin id ex ut elit varius iaculis euismod id eros. Praesent pharetra ante elementum orci imperdiet iaculis. Pellentesque vel felis vel lacus tempus sagittis sit amet et sapien. Ut vitae purus nisi. </p>
                </div>
            </div>
         );
    }
}
 
export default Nosotros;