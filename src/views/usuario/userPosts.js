import React from "react";
import UserPost from "./userPost";


const UserPosts=() =>{
    let products = [
        {
            nombre: 'Iphone 6s',
            descripcion: 'Iphone 6s libre de icloud, 64gb, estado de la bateria 100%',
            precio: '$ 650.000',
            img: 'img/iphone-6-oro.jpg',
            fecha: '23/01/2020',
            ciudad: 'Bogotá',
            estado: 'Activa'
        },
        {
            nombre: 'Apartamento 46m*2',
            descripcion: 'Apartemento de 46m*2 ubicado en pepe sierra 3 habitaciones, sala comedor, cocina, 2 baños',
            precio: '$ 350.000.000',
            img: 'img/apto.jpg',
            fecha: '13/02/2021',
            ciudad: 'Bogotá',
            estado: 'Activa'
        }
    ]
    return(
        <div className="col-12 col-sm-12 col-md-12 mt-4 row justify-content-center">            
            <h5 className="text-center col-12">Publicaciones</h5>
            {
                products.map((product,index)=>
                    <UserPost 
                        key = {index}
                        post = {product}
                    />
                )
            }
        </div>
    )
}

export default UserPosts;