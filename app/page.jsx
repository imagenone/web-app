
"use client";
import Image from 'next/image'
import styles from './stylehome.module.css'
import Navigation from './components/Navigation'
import  'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from "react";
import photo1 from "/public/images/romero.jpg";




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import  Link  from "next/link";



export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const images = [    
  require("/public/images/flor_1.jpg"),
  require("/public/images/jengibre1.jpg"),
  require("/public/images/flor4.jpg"),
  require("/public/images/flor3.jpg"),
  require("/public/images/ruda.jpg"),
  require("/public/images/ruda4.jpg"),
  require("/public/images/ruda1.jpg"),
  require("/public/images/romeroimg11.jpg"),
  require("/public/images/imagen_lapto.jpg"),    
  require("/public/images/mall_3.jpg"),    

  ];
  const slidercard = [
    {
    
      titulo: " Bienvenidos a Studio Art Designe",
      contenido: " En el vasto mundo digital, la estética y la funcionalidad se entrelazan para dar forma a experiencias web cautivadoras. Si eres un amante del diseño, un apasionado del desarrollo web o simplemente alguien que busca inspiración en la intersección de arte y tecnología, has llegado al lugar correcto. Studio Art Designe es tu oasis virtual donde la creatividad se combina con la innovación para ofrecer un viaje emocionante a través del diseño y el desarrollo web.",
    },
    {
    
      titulo: "Vision",
      contenido: "Como programador, mi visión es la de un arquitecto digital que da vida a soluciones innovadoras. Veo líneas de código como pinceles que me permiten crear y dar forma a soluciones a problemas complejos. Mi misión es simplificar procesos, optimizar sistemas y mejorar la vida de las personas a través de la tecnología. Estoy comprometido con la búsqueda constante de conocimiento, ya que el mundo de la programación evoluciona rápidamente. ",
      autor: "John Galsworthy",
    },
    {
    
      titulo: "El Amor que Crece",
      contenido: "El amor es la única cosa que crece cuando se reparte.",
      autor: "Antoine de Saint-Exupéry",
    },
    {
      titulo: "Mirada del Corazón",
      contenido: "El amor no se mira con los ojos, sino con el corazón.",
      autor: "William Shakespeare",
    },
    {
    
      titulo: "El Poder del Amor",
      contenido: "El amor es la llave maestra que abre las puertas de la felicidad.",
      autor: "Oliver Wendell Holmes",
    },
    {
    
      titulo: "La Esencia del Amor",
      contenido: "El amor es como el fuego: suelen ver antes el humo los que están fuera que las llamas los que están dentro.",
      autor: "Jacinto Benavente",
    },
    {
     
      titulo: "La Belleza del Amor",
      contenido: "El amor es la única flor que crece y florece sin la ayuda de las estaciones.",
      autor: "Khalil Gibran",
    },
    {
      
      titulo: "Amor y Compartir",
      contenido: "El amor no se agota al darlo. Se renueva y se hace más fuerte.",
      autor: "Antoine de Saint-Exupéry",
    },
    {

      titulo: "La Magia del Amor",
      contenido: "El amor es un arte que nunca envejece y se aprende mejor en la práctica.",
      autor: "Albert Einstein",
    },
    {
     
      titulo: "El Amor y el Tiempo",
      contenido: "El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección.",
      autor: "Antoine de Saint-Exupéry",
    },
  ];
  

const rendercard = slidercard.map((card, index) => 
    <div  key={index}>
      <h3 className="text-center" >
      {card.titulo}</h3>
      {card.contenido}
    </div>
 )

  const [showClient, setShowClient] = useState(false); // State to control the visibility of the "use client" component
// renderizar las imagenes en el slider 

function renderGalleryImages(galery_image) {
  return galery_image.map((image, index) => (
    <div key={image.id}>
      <Link href="/">
        <div
          className={styles.imageContainer}
          onMouseEnter={() => handleMouseEnter(image.id)}
        >
          <Image
            className={styles.longImage}
            src={image.src}
            alt={image.alt}
            priority
          />
        </div>
      </Link>
    </div>
  ));
}

const galery_image =  images.map((image, index) => ({
  id: index + 1,  // Un identificador único para cada imagen
  src: image,     // La ruta de la imagen
  alt: `Imagen de Pagina principal ${index + 1}`,  // Texto alternativo para la imagen
}));

// console.log("galeria_de_imagenes :", galery_image)

const handleMouseEnter = (id) => {
  // Aquí puedes hacer algo con el ID de la imagen cuando el mouse pasa por encima
  // console.log(`Mouse sobre la imagen con ID: ${id}`);
};

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    arrows: true,
    rows: 1,

    slidesToShow: 3, // Mostrar  imágenes a la vez
    slidesToScroll: 1, // Desplazarse por  imágenes a la vez
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 945,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settingscol2 = {
     
    
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // Mostrar  imágenes a la vez
    slidesToScroll: 1, // Desplazarse por  imágenes a la vez
    initialSlide: 0,
    touchMove:true, 
    autoplaySpeed: 3000,


    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
       <div className={styles.container}>
        <div className={` ${styles.columnContainer}`}>
          <div className={styles.column1} >
           
         

              <Link  href="../../plantas-prop/jengibre" 
              style={{
                  
                     margin:1,
                     width: "100%",
                     height:"75%",
                     display:"flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     textDecorationLine:"none"}}>
              <h3 style={{color:""}} >Columna 1</h3>
                     <Image
                        className={styles.longImage}
                        src={galery_image[1].src}
                        width={500}
                        height={500}
                        alt={galery_image[1].alt}
                        priority
                      />
                    </Link>
          </div>
          
          <div className={`bg-transparent ${styles.column2}`}>
            <div  styles={{backgroundColor:"red"}} >
              <Slider {...settingscol2}
              style={{border:"solid 1px ",boxShadow:"10px 10px 1000px 10px  " }}
              >
              {/* first slider */}
                <div className="">
                <div className={styles.containerTitulo}>
                  <div className={styles.backgroundImage_1}>
                  <h1 className={`fs-5 ${styles.colorText}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    
                  Pasos Iniciales para Convertirte en un Programador Exitoso
                    </h1>
                  </div>
                   
                  </div>                
                  <div className="" style={{  padding: "1px", textAlign: "justify", textJustify: "inter-word"}}>
                    <p style={{  padding: "10px", textAlign: "justify", textJustify: "inter-word"}}>
                    La programación es un mundo apasionante y en constante evolución que ofrece oportunidades ilimitadas para aquellos que desean adentrarse en él. Desde el desarrollo de aplicaciones y sitios web hasta la automatización de tareas cotidianas, la programación desempeña un papel fundamental en la resolución de problemas y la creación de soluciones innovadoras. Si estás interesado en convertirte en un programador exitoso, estás dando el primer paso hacia un viaje de aprendizaje continuo y posibilidades infinitas. Este artículo te guiará a través de los pasos iniciales esenciales que debes seguir para construir una base sólida en programación y avanzar hacia una carrera prometedora. Ya sea que seas un principiante absoluto o alguien que busca consolidar sus conocimientos, estos pasos te proporcionarán las bases necesarias para alcanzar tus metas en el emocionante mundo de la programación.
                    </p>
                    <div className=" ml-52"></div>
                  </div>
                 
              
                </div>
                  {/* third slider */}
                  <div className="">
                  <div className={styles.containerTitulo}>
                  <div className={styles.backgroundImage}>
                  <h1 className={`fs-5 ${styles.colorText}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    
                    La Computadora del Programador: El Equipo Perfecto para Tu Código Creativo
                    </h1>
                  </div>
                   
                  </div>                  
                  <div className="">
                    <p style={{backgroundColor:"white",  padding: "10px", textAlign: "justify", textJustify: "inter-word"}} >
                    La elección de la computadora ideal es una decisión fundamental para cualquier aspirante a programador o desarrollador de software. La computadora que elijas será la herramienta esencial con la que crearás, depurarás y ejecutarás tus proyectos, por lo que es fundamental que se adapte a tus necesidades y te brinde el rendimiento que requieres.<Link href='/tecnologia/computadora' >En este artículo </Link> exploraremos las características esenciales que debes tener en cuenta al buscar la computadora perfecta para la programación, destacando las ventajas de algunos modelos y marcas que pueden satisfacer tus necesidades y, al mismo tiempo, llamar mucho la atención. Si estás listo para potenciar tu carrera como programador, sigue leyendo para descubrir cuál es la computadora ideal para ti.
                    </p>
                    <div className=" ml-52"></div>
                  </div>
                               
                  </div>
                  {/* forth slider */}                
                   {/* <div className="">
                    <div className={styles.containerTitulo}>
                      <h1 className={styles.colorText}>
                        El Romero: Un Tesoro Verde para el Alma y el Cuerpo 1
                      </h1>
                    </div>
                    <div className="">
                      <p style={{backgroundColor:"gray",  padding: "10px", textAlign: "justify", textJustify: "inter-word"}} >
                        El romero, Rosmarinus officinalis : es una planta
                        aromática y medicinal que ha conquistado los jardines y
                        cocinas de todo el mundo, pero su importancia trasciende
                        lo culinario. Esta humilde planta, con sus hojas verdes
                        y fragantes, ha sido apreciada a lo largo de la historia
                        por su poder para sanar y elevar el espíritu. El romero
                        es mucho más que una simple hierba: es un símbolo de
                        vitalidad y esperanza, capaz de tocar nuestras almas de
                        formas profundas.
                      </p>
                          </div>
                          <div style={{margin:1, width: "99%", display:"flex", justifyContent: "center", alignItems: "center"}}>
                      <Image
                        className={styles.longImage}
                        src={photo1}
                        width={500}
                        height={500}
                        alt={galery_image[3].alt}
                        priority
                      />
                    </div>
              
                  </div>  */}
                
                 
              </Slider>
            </div>
          </div>
         
       
       <Link  href="../../plantas-prop/jengibre" 
              style={{
                  
                     margin:1,
                     width: "100%",
                     height:"75%",
                     display:"flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     textDecorationLine:"none"}}
                     className={styles.column3}
                     >

            
            
                     <Image
                        className={styles.longImage}
                        src={galery_image[8].src}
                        width={500}
                        height={500}
                        alt={galery_image[8].alt}
                        priority
                      />
                        <h3 style={{color:""}}>Las 7 Mejores Playas</h3>
                    </Link>
   
          
      
        </div>

        <div className={styles.box2}>
          <div className="">
            {/* <Slider {...settings}>
         
            {renderGalleryImages(galery_image)}
              
            
             
            </Slider> */}
          </div>
        </div>
        <div className={styles.box3}>
          {/* <h1 className={styles.colortext}>Redes</h1> */}
          {/* <FooterComponent /> */}
        </div>
      </div>
    </>
  );
}












