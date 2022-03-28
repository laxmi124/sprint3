import React,{useState} from 'react';
import styled from 'styled-components';


const productsData =[
  {
    id:1,
    name:"womens top",
   price:40,
   category:"cloth"
  },
  {
    id:2,
    name:"mens top",
   price:50,
   category:"cloth"
  },
  {
    id:3,
    name:"child top",
   price:90,
   category:"cloth"
  }

];

const Page = styled.div`
 display:grid;
 grid-template-columns:auto auto auto;
 grid-gap:2vh;
`
const Card = styled.div`
 border:1px solid black;
 hieght:fit-content;
 width:fit-content;
 padding:3vh;
 font-wight:bold;
`

function Products() {

  // fetch(`http://localhost:3001/producs`,{
  //   method: 'POST',
  //   body: JSON.stringify(productsData),
  //   headers:{
  //       "Content-Type": "application/json",
  //   }
  // }).then((res)=>res.json()).then((res)=>console.log(res))

  return (
    <Page>
      {
        productsData.map((item)=>{
          return <Card key={item.id}>
            <p> name: {item.name}</p>
            <p>price: {item.price}</p>
            <p>category: {item.category}</p>
           </Card>
        })
      }
    </Page>
  )
}

export default Products